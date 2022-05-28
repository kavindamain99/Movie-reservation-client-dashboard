import React from "react";
import React, { useState, useEffect } from "react";

import NavBar from "../adminNavbar";
import Sidebar from "../sidebar";
import { API } from "../config";
import axios from "axios";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./movies.css";

export default function Movies() {
  const [message, setMessage] = useState("");
  const [newMovie, setNewMovie] = useState({
    name: "",
    desc: "",
    releaseDate: "",
    cast1: "",
    cast2: "",
    castTime: "",
    director: "",
    theater: "",
    showTime: "",
    fullTicket: "",
    halfTicket: "",
    img: "",
  });

  //item add to cart section
  handleMovie = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", newMovie.name);
    formData.append("desc", newMovie.desc);
    formData.append("releaseDate", newMovie.releaseDate);
    formData.append("cast1", newMovie.cast1);
    formData.append("cast2", newMovie.cast2);
    formData.append("castTime", newMovie.castTime);
    formData.append("director", newMovie.director);
    formData.append("img", newMovie.img);
    formData.append("theater", newMovie.theater);
    formData.append("showTime", newMovie.showTime);
    formData.append("fullTicket", newMovie.fullTicket);
    formData.append("halfTicket", newMovie.halfTicket);
    //store data
    axios
      .post(`${API}movie`, formData)
      .then((res) => {
        console.log(res);
        setMessage("Movie inserted Successfully");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Some Error occured");
      });
  };
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewMovie({ ...newMovie, img: e.target.files[0] });
    console.log(newMovie);
  };

  //fetch movie theaters
  const [theaters, setTheaters] = useState([]);

  //fetch all Theater

  const loadTheater = async () => {
    const response = await fetch(`${API}viewtheater`);
    const data = await response.json();

    setTheaters(data);
  };

  useEffect(() => {
    loadTheater();
  }, []);

  return (
    <div>
      <NavBar />
      <Sidebar />
      <Container>
        <div>
          <h2>
            {message ? (
              <p
                style={{
                  marginTop: "50px",
                  color: "green",
                  border: "1px solid green",
                  padding: "10px 10px 1px",
                }}
              >
                {message}
              </p>
            ) : null}
          </h2>
        </div>

        <Form
          onSubmit={handleMovie}
          style={{ marginTop: "50px" }}
          encType="multipart/form-data"
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Movie Name</Form.Label>
              <br />
              <input
                type="text"
                placeholder="name"
                name="name"
                value={newMovie.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDirector">
              <Form.Label>Movie Director</Form.Label>
              <br />
              <input
                type="text"
                placeholder="Movie Director"
                name="director"
                value={newMovie.director}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <br />
            <textarea
              rows="3"
              placeholder="Description"
              name="desc"
              value={newMovie.desc}
              onChange={handleChange}
              maxLength="160"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Cast 1 </Form.Label>
            <br />
            <input
              type="text"
              placeholder="The people who act 1"
              name="cast1"
              value={newMovie.cast1}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Cast 2</Form.Label>
            <br />
            <input
              type="text"
              placeholder="The people who act 2"
              name="cast2"
              value={newMovie.cast2}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Row>
            <Form.Group as={Col} controlId="formFullTicket">
              <Form.Label>Full ticket(LKR)</Form.Label>
              <br />
              <input
                type="text"
                name="fullTicket"
                value={newMovie.fullTicket}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formHalfTicket">
              <Form.Label>Half Ticket(LKR)</Form.Label>
              <br />
              <input
                type="number"
                name="halfTicket"
                value={newMovie.halfTicket}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <h4>Info</h4>

          <Form.Group as={Col} controlId="formTheater">
            <Form.Label>Theater</Form.Label>
            <br />
            <select
              placeholder="Movie Theater"
              name="theater"
              value={newMovie.theater}
              onChange={handleChange}
            >
              <option>Please select</option>
              {theaters &&
                theaters.map((c, i) => (
                  <option key={i} value={c.theaterName}>
                    {c.theaterName}
                  </option>
                ))}
            </select>
          </Form.Group>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formShowTime">
              <Form.Label>Show Time</Form.Label>
              <br />
              <input
                type="time"
                placeholder="Show Time"
                name="showTime"
                value={newMovie.showTime}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formReleaseDate">
              <Form.Label>Release Date</Form.Label>
              <br />
              <input
                type="date"
                placeholder="Release date"
                name="releaseDate"
                value={newMovie.releaseDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Banner</Form.Label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                name="img"
                onChange={handlePhoto}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formDuration">
              <Form.Label>Duration</Form.Label>
              <br />
              <input
                type="text"
                placeholder="Format 02h-30m"
                name="castTime"
                value={newMovie.castTime}
                onChange={handleChange}
                pattern="[0-9][0-9]+[h]+-[0-9][0-9]+[m]"
                required
              />
            </Form.Group>
          </Row>
          <Button id="btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
