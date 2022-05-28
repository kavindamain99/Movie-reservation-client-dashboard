import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./movieAdmin/login";
import AdminHome from "./movieAdmin/adminHome";
import Theater from "./movieAdmin/Theaters/theater";
import Movies from "./movieAdmin/Movies/movies";
import MoviesList from "./movieAdmin/Movies/moviesList";
import UpdateMovie from "./movieAdmin/Movies/updateMovie";
import Booking from "./movieAdmin/Movies/booking";
import BookingSingle from "./movieAdmin/Movies/bookingSingle";
function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<AdminHome />}></Route>
          <Route path="/theaters" element={<Theater />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/booking/single/:id" element={<BookingSingle />}></Route>

          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movieslist" element={<MoviesList />}></Route>
          <Route path="/movieslist/:id" element={<UpdateMovie />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
