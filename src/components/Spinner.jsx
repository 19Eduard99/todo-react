import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
      }}
      className="taskWrapper fade-in fade-in-out fade-out"
    >
      <Spinner
        style={{ width: "100px", height: "100px" }}
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
