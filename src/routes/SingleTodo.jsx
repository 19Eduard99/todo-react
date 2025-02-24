import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "react-bootstrap/esm/Button";
import EditTodo from "../components/EditTodo";

const SingleTodo = ({ todoItems, setTodoItems }) => {
  const { index } = useParams();

  const singleTodo = todoItems.find((_, i) => i + 1 === +index);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(singleTodo);

  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (
      editedTodo.title.trim() === "" ||
      editedTodo.description.trim() === ""
    ) {
      return;
    }
    setEditedTodo((prev) => ({
      ...prev,
      title: editedTodo.title,
      description: editedTodo.description,
    }));

    setTodoItems((prev) => {
      const newTodoItems = [...prev];
      newTodoItems.splice(index - 1, 1, editedTodo);
      return newTodoItems;
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (!singleTodo) {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Button onClick={goBack} variant="primary">
                  Go Back
                </Button>
                <Card.Title className="text-center">Task not found</Card.Title>
                <Card.Text className="text-center">
                  Try selecting another task.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card>
            <Card.Body style={{ position: "relative" }}>
              <Button onClick={goBack} variant="primary">
                Go Back
              </Button>
              {isEditing ? (
                <EditTodo
                  handleCancel={handleCancel}
                  handleSave={handleSave}
                  editedTodo={editedTodo}
                  setEditedTodo={setEditedTodo}
                />
              ) : (
                <>
                  <Button
                    style={{
                      position: "absolute",
                      right: "20px",
                    }}
                    variant="warning"
                    onClick={handleEdit}
                  >
                    Edit
                    <i
                      style={{ paddingLeft: "10px" }}
                      className="bi bi-pen-fill cursor-pointer"
                    ></i>
                  </Button>
                  <Card.Title className="text-center mb-4">
                    <h1>{singleTodo.title}</h1>
                  </Card.Title>
                  <Card.Text>
                    <span className="lead">{singleTodo.description}</span>
                  </Card.Text>
                </>
              )}
              <Card.Footer className="text-muted">
                Status: {singleTodo.completed ? "Done" : "In progress"}
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

SingleTodo.propTypes = {
  todoItems: PropTypes.array,
  setTodoItems: PropTypes.func,
};

export default SingleTodo;
