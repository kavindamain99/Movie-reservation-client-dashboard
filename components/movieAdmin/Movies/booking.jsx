import React from "react";
import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import NavBar from "../adminNavbar";
import Sidebar from "../sidebar";
import { API } from "../config";
import { Container, Table, Button } from "react-bootstrap";
function Booking() {
  //fetch movie theaters
  const [theaters, setTheaters] = useState([]);
  const [booking, setBooking] = useState([]);
  const [theaterName, setTheaterName] = useState("");

  //fetch all Theater

  const loadTheater = async () => {
    const response = await fetch(`${API}viewtheater`);
    const data = await response.json();

    setTheaters(data);
  };

  const loadBooking = async () => {
    const response = await fetch(`${API}/get/booking`);
    const data = await response.json();

    setBooking(data);
  };

  useEffect(() => {
    loadTheater();
    loadBooking();
  }, []);

  const content2 = booking.map((booking) => (
    <div key={booking._id}>
      <h1>{booking.theater}</h1>
      <h5>{booking.date}</h5>
      <p>{booking.time}</p>
    </div>
  ));
  const [searchMovies, setSearchMovies] = useState("");
  return (
    <div>
      {" "}
      <NavBar />
      <Sidebar />
      <Container>
        <form>
          <select
            placeholder="Movie Theater"
            name="theater"
            style={{ fontSize: "20px" }}
            value={theaterName}
            onChange={(e) => setTheaterName(e.target.value)}
          >
            <option>Please Select Theater</option>
            {theaters &&
              theaters.map((c, i) => (
                <option key={i} value={c.theaterName}>
                  {c.theaterName}
                </option>
              ))}
          </select>
          <Button
            type="submit"
            variant="success"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/booking/single/${theaterName}`;
            }}
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>

        <div id="input-group-prepend" className="row mt-3 mb-3">
          <span
            className="input-group-text"
            id="basic-addon1"
            style={{}}
          ></span>
          <input
            className="form-control col-sm-3"
            type="search"
            placeholder="Search movies"
            name="searchForm"
            onChange={(event) => {
              setSearchMovies(event.target.value);
            }}
          />
        </div>

        <div style={{ marginTop: "50px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Movie</th>
                <th>Theater</th>
                <th>Ticket Count</th>
                <th>Date</th>
                <th>Time</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              {booking
                .filter((data) => {
                  if (
                    searchMovies === "" ||
                    data.name.toLowerCase().includes(searchMovies.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((booking) => (
                  <tr>
                    <td>{booking.name}</td>
                    <td>{booking.theater}</td>
                    <td>{booking.fullTicketCount + booking.halfTicketCount}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>Rs.{booking.price}.00</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          ;
        </div>
      </Container>
    </div>
  );
}

export default Booking;
