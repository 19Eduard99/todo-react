import Button from "react-bootstrap/esm/Button";
import PropTypes from "prop-types";

const EditTodo = ({ handleCancel, editedTodo, setEditedTodo, handleSave }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <div
        style={{ position: "absolute", top: "15px", right: "15px" }}
        className="d-flex gap-3"
      >
        <Button variant="success" onClick={handleSave}>
          <i className="bi bi-check-square-fill"></i>
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          <i className="bi bi-x-square-fill"></i>
        </Button>
      </div>
      <label className="w-100 text-center">
        Title:
        <input
          value={editedTodo.title}
          onChange={(e) =>
            setEditedTodo((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          required
          className="form-control"
          placeholder="Enter title description"
        />
      </label>

      <label className="w-100 text-center">
        Description:
        <textarea
          name="description"
          value={editedTodo.description}
          onChange={(e) =>
            setEditedTodo((prev) => ({ ...prev, description: e.target.value }))
          }
          type="text"
          required
          className="form-control"
          placeholder="Enter task description"
          style={{ height: "200px" }}
        ></textarea>
      </label>
    </div>
  );
};

EditTodo.propTypes = {
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
  editedTodo: PropTypes.object,
  setEditedTodo: PropTypes.func,
};

export default EditTodo;
