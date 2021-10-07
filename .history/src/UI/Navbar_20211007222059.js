import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Navbar = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '}CRUD приложение - телефонный справочник
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navbar;
