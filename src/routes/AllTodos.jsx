import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Storage from "../utils/Storage";

const AllTodos = ({ todoItems, setTodoItems }) => {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const handlerDelete = (id) => () => {
    const updatedTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedTodoItems);
  };

  useEffect(() => {
    Storage.setItem(todoItems);
  }, [todoItems]);

  return (
    <Container>
      <h1 className="text-center mt-1">All Todos</h1>

      <Button onClick={goBack} variant="primary" className="mb-2">
        Go Back
      </Button>
      {todoItems.map(({ id, title, description, completed }, index) => {
        const redirect = () => navigate("/" + (index + 1));

        return (
          <Card key={id} className="text-center mb-4">
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "right",
                  marginBottom: "10px",
                }}
              >
                <Button variant="primary" onClick={redirect}>
                  Open
                </Button>
                <Button variant="danger" onClick={handlerDelete(id)}>
                  Delete
                </Button>
              </div>
              <Card.Title>{title}</Card.Title>
              <Card.Text style={{ textAlign: "left" }}>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              Status: {completed ? "Done" : "In progress"}
            </Card.Footer>
          </Card>
        );
      })}
    </Container>
  );
};

AllTodos.propTypes = {
  todoItems: PropTypes.array,
  setTodoItems: PropTypes.func,
};

export default AllTodos;
