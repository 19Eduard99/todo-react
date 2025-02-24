import Col from "react-bootstrap/esm/Col";
import "./style.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import classNames from "classnames";
import { useState } from "react";
import EditTodoTitle from "../EditTodoTitle";

const TodoItem = ({
  id,
  title,
  handlerDelete,
  changeStatus,
  completed,
  disabled,
  setDisabled,
  onEditTitle,
  index,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const navigate = useNavigate();
  const redirect = () => navigate("/" + index);

  const fadeOut = classNames({
    "fade-out": isPressed,
    "": !isPressed,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() === "") {
      return;
    }
    onEditTitle(id, editedTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setIsEditing(false);
  };

  return (
    <Col xs={4}>
      <div className={`taskWrapper fade-in ${fadeOut}`}>
        <div className="d-flex justify-content-between align-items-center">
          {isEditing ? (
            <EditTodoTitle
              editedTitle={editedTitle}
              setEditedTitle={setEditedTitle}
              handleSave={handleSave}
              handleCancel={handleCancel}
            />
          ) : (
            <>
              <h2 className="taskHeading">{title}</h2>
              <i
                onClick={handleEdit}
                className="bi bi-pen-fill cursor-pointer"
              ></i>
            </>
          )}
        </div>
        <hr />
        <label className="completed form-check">
          <input
            defaultChecked={completed}
            type="checkbox"
            className="form-check-input"
            onChange={changeStatus}
          />
          <span> Completed ? </span>
        </label>
        <hr />
        <div className="d-flex gap-5 justify-content-between">
          <button
            disabled={disabled}
            className="btn btn-success open-btn"
            onClick={redirect}
          >
            Open
          </button>

          <button
            className="btn btn-danger delete-btn"
            onClick={() => {
              setDisabled(true);
              setTimeout(() => {
                handlerDelete();
                setDisabled(false);
              }, 500);
              setIsPressed(true);
            }}
            disabled={disabled}
          >
            Delete
          </button>
        </div>
      </div>
    </Col>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handlerDelete: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
  onEditTitle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
