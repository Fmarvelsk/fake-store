import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Jumbotron>
      <Container className="text-center">
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
    </Container>
  </Jumbotron>
);

export default NotFound;