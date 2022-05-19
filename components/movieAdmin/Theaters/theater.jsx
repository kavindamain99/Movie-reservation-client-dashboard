import React, { useState, useEffect } from "react";

import NavBar from "../adminNavbar";
import Sidebar from "../sidebar";
import { API } from "../config";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

//display all items
function Theater() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");

  //item add to cart section
  handleTheater = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}createtheater`, {
        method: "POST",

        body: JSON.stringify({
          theaterName: name,
          location: location,
          contactNumber: contactNumber,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const resJson = await res.json();

      if (res.status === 200) {
        setMessage("Theater inserted Successfully");
      } else {
        setMessage("Some Error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [theater, setTheater] = useState([]);

  //fetch all Theater

  const loadTheater = async () => {
    const response = await fetch(`${API}viewtheater`);
    const data = await response.json();

    setTheater(data);
  };

  useEffect(() => {
    loadTheater();
  }, []);

  const content = theater.map((theater) => (
    <div
      key={theater._id}
      style={{
        textAlign: "right",
        padding: "40px 40px 40px 40px",
      }}
    >
      <h3>{theater.theaterName}</h3>
      <h5>{theater.location}</h5>
      <p>{theater.contactNumber}</p>
    </div>
  ));

  return (
    <div>
      <NavBar />
      <Sidebar />
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleTheater} style={{ marginTop: "50px" }}>
              <Form.Group controlId="form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="0772211222"
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form.Textarea">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
              <br></br>
              <Button type="submit">SUBMIT</Button>
            </Form>
            <div>
              <h2>{message ? <p>{message}</p> : null}</h2>
            </div>
          </Col>
          <Col>
            <Scrollbars style={{ width: 500, height: 600 }}>
              <div>{content}</div>
            </Scrollbars>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Theater;
