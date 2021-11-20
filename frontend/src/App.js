import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, Row, } from 'react-bootstrap'
function App() {
  return (
    <Row>
      <Col xl={1} className="bg-danger">a</Col>
      <Col xl={7} className="bg-info">b</Col>
    </Row>
  );
}

export default App;
