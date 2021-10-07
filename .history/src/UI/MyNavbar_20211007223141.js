import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      CRUD приложение - телефонный справочник
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

export default MyNavbar;
