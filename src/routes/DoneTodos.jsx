import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import Storage from "../utils/Storage";

const DoneTodos = ({ todoItems, setTodoItems }) => {
  const doneTodos = todoItems.filter((item) => item.completed);
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  useEffect(() => {
    Storage.setItem(doneTodos);
  }, [doneTodos]);

  const handlerDelete = (id) => () => {
    const updatedTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedTodoItems);
  };

  return (
    <Container>
      <h1 className="text-center mt-1">Done Todos</h1>
      <Button onClick={goBack} variant="primary" className="mb-2">
        Go Back
      </Button>
      {doneTodos.map(({ id, title, description, completed }, index) => {
        const redirect = () => navigate("/" + (index + 1));

        return (
          <Card key={id} className="text-center mb-4">
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "right",
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

DoneTodos.propTypes = {
  todoItems: PropTypes.array,
  setTodoItems: PropTypes.func,
};

export default DoneTodos;
