import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Navbar.module.css";
import { Navbar as NavBar, Container, Nav } from 'react-bootstrap';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { LinkContainer } from 'react-router-bootstrap'
const Navbar = (props) => {
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <NavBar.Brand >Navbar</NavBar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/thumbnail">
              <Nav.Link >Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/editor">
              <Nav.Link>New</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/editor/0">
              <Nav.Link>Edit id:0</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
