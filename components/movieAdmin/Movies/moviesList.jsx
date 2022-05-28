import React from "react";
import React, { useState, useEffect } from "react";
import { withSwalInstance } from "sweetalert2-react";
import Swal from "sweetalert2";
import NavBar from "../adminNavbar";
import Sidebar from "../sidebar";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { API } from "../config";
import "./movieList.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
function MoviesList() {
  const [movies, setMovies] = useState([]);
  const SweetAlert = withSwalInstance(Swal);
  //fetch all Theater

  const loadMovie = async () => {
    const response = await fetch(`${API}movies`);
    const data = await response.json();

    setMovies(data);
  };

  useEffect(() => {
    loadMovie();
  }, []);

  //remove item from cart
  const destroy = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API}movies/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }).then((response) => {
          //  if (window.confirm("Do u want to continue?")) {
          //    window.location.href = "/movieslist";
          //  }
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          window.location.href = "/movieslist";
        });
      }
    });
  };

  return (
    <div>
      <NavBar />
      <Sidebar />
      <Container>
        <div className="container">
          <Scrollbars style={{ width: "100%", height: 600 }}>
            <div className="flex-container">
              {movies.map((movie) => (
                <div key={movie._id}>
                  <div>
                    <Card style={{ width: "18rem" }} id="card">
                      <Card.Img
                        variant="top"
                        src={movie.img}
                        style={{ width: "280px", height: "340px" }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h3>{movie.name}</h3>
                        </Card.Title>
                        <Card.Text>
                          <h6 style={{ minHeight: "97px" }}>{movie.desc}</h6>
                        </Card.Text>
                        <Card.Text>
                          <h5>Release Date: {movie.releaseDate}</h5>
                        </Card.Text>

                        <Card.Text>
                          <h5>Time Duration: {movie.castTime}</h5>
                        </Card.Text>
                        <Card.Text>
                          <h5>Theater: {movie.theater}</h5>
                        </Card.Text>
                        <Card.Text>
                          <h5>Show Time: {movie.showTime}</h5>
                        </Card.Text>

                        <div className="btns">
                          <Link to={`${movie._id}`}>
                            <Button variant="success">Update</Button>
                          </Link>

                          <Button
                            variant="danger"
                            style={{ marginLeft: "100px" }}
                            onClick={() => destroy(movie._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>

                    {/* <img src={movie.img} alt="img"></img> */}
                  </div>
                </div>
              ))}
            </div>
          </Scrollbars>
        </div>
      </Container>
    </div>
  );
}

export default MoviesList;
