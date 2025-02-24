import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";

const pages = [
  {
    id: 1,
    route: "/all-todos",
    title: "All Todos",
  },

  {
    id: 2,
    route: "/done-todos",
    title: "Done Todos",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const handelNavigate = (route) => () => {
    navigate(route);
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          href="/todo-react/"
          style={{ display: "flex", gap: "10px" }}
        >
          <i className="bi bi-check2-square"></i>
          Todo List
        </Navbar.Brand>
        <Nav className="me-auto">
          {pages.map((page) => (
            <Nav.Link key={page.id} onClick={handelNavigate(page.route)}>
              {page.title}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
