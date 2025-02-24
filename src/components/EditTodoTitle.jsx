import PropTypes from "prop-types";
import Button from "react-bootstrap/esm/Button";

const EditTodoTitle = ({
  editedTitle,
  setEditedTitle,
  handleSave,
  handleCancel,
}) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <input
        type="text"
        required
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="form-control"
      />
      <Button onClick={handleSave} className=" btn-sm" variant="success">
        <i className="bi bi-check-square-fill"></i>
      </Button>
      <Button onClick={handleCancel} className=" btn-sm" variant="secondary">
        <i className="bi bi-x-square-fill"></i>
      </Button>
    </div>
  );
};

EditTodoTitle.propTypes = {
  editedTitle: PropTypes.string,
  setEditedTitle: PropTypes.func,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default EditTodoTitle;
