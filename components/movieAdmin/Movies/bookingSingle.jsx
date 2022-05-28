import React from "react";
import React, { useState, useEffect } from "react";

import NavBar from "../adminNavbar";
import Sidebar from "../sidebar";
import { API } from "../config";
import { Container, Table, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  //fetch movie theaters
  const params = useParams();
  const [booking, setBooking] = useState([]);

  const loadBooking = async () => {
    const response = await fetch(`${API}/get/booking/${params.id}`);
    const data = await response.json();
    setBooking(data);
  };

  useEffect(() => {
    console.log("called");
    loadBooking();
  }, []);

  const content = booking.map((booking) => (
    <div key={booking._id}>
      <h5>{booking.date}</h5>
      <p>{booking.time}</p>
    </div>
  ));

  return (
    <div>
      {" "}
      <NavBar />
      <Sidebar />
      <Container>
        <h1>{params.id}</h1>
        <div style={{ marginTop: "50px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Movie</th>

                <th>Full Ticket Count</th>
                <th>Half Ticket Count</th>
                <th>Date</th>
                <th>Time</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((booking) => (
                <tr>
                  <td>{booking.name}</td>
                  <td>{booking.halfTicketCount}</td>
                  <td>{booking.fullTicketCount}</td>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>Rs.{booking.price}.00</td>
                </tr>
              ))}
            </tbody>
          </Table>
          ;
        </div>
        <div>
          <Button variant="success" onClick={() => navigate(-1)}>
            Back To Booking
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Booking;
