import Container from "react-bootstrap/esm/Container";

const style = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  color: "white",
  padding: "10px 0",
  textAlign: "center",
};

const Footer = () => {
  return (
    <footer style={style} className="bg-dark">
      <Container>
        <p style={{ margin: 0 }}>Footer</p>
      </Container>
    </footer>
  );
};

export default Footer;
