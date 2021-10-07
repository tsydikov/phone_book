import React from "react";
import { Container, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="../assets/img/phone.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      CRUD приложение - телефонный справочник
      </Navbar.Brand>
    </Container>
  </Navbar>
  );
};

export default MyNavbar;
