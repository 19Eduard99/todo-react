import Storage from "../utils/Storage";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem/index";
import Loader from "../components/Spinner";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const HomePage = ({ todoItems, setTodoItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    Storage.setItem(todoItems);
  }, [todoItems]);

  const createTodoItems = (todoItem) => {
    todoItem.id = `id-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .slice(2)}`;
    todoItem.completed = false;

    setTodoItems((prevTodoItems) => [todoItem, ...prevTodoItems]);
  };

  const handlerDelete = (id) => () => {
    const updatedTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedTodoItems);
  };

  const changeStatus = (id) => () => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onEditTitle = (id, newTitle) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  const renderTodoItems = () => {
    let content;

    if (todoItems.length === 0) {
      content = isLoading ? (
        <Col xs={8}>
          <Row>
            <Col xs={4}>
              <Loader />
            </Col>
          </Row>
        </Col>
      ) : null;
    } else {
      content = (
        <Col xs={8}>
          <Row>
            {isLoading && (
              <Col xs={4}>
                <Loader />
              </Col>
            )}
            {todoItems.map(({ id, title, completed }, index) => (
              <TodoItem
                key={id}
                id={id}
                title={title}
                completed={completed}
                handlerDelete={handlerDelete(id)}
                changeStatus={changeStatus(id)}
                disabled={disabled}
                setDisabled={setDisabled}
                onEditTitle={onEditTitle}
                index={index + 1}
              />
            ))}
          </Row>
        </Col>
      );
    }

    return content;
  };

  return (
    <Container>
      <h1 style={{ paddingBottom: "20px" }}>Create New Todo</h1>
      <Row>
        <Col xs={4}>
          <TodoForm
            createTodoItems={createTodoItems}
            setIsLoading={setIsLoading}
          />
        </Col>

        {todoItems && renderTodoItems()}
      </Row>
    </Container>
  );
};

HomePage.propTypes = {
  todoItems: PropTypes.array,
  setTodoItems: PropTypes.func,
};

export default HomePage;
