import React from "react";
import { Container } from "react-bootstrap";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import {
  MdDashboard,
  MdOutlineTheaters,
  MdOutlineMovie,
  MdTimelapse,
  MdBookmarkAdded,
} from "react-icons/md";
import Link from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function Sidebar() {
  return (
    <Container>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
        style={{
          marginTop: "60px",
          backgroundColor: "#16283c",
          height: "100%",
          position: "fixed",
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText style={{ fontSize: "22px" }}>
              <MdDashboard style={{ marginRight: "5px", marginTop: "-8px" }} />
              <a href="/dashboard" style={{ textDecoration: "none" }}>
                {" "}
                Dashboard
              </a>
            </NavText>
          </NavItem>
          <NavItem>
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText className="navItem" style={{ fontSize: "18px" }}>
              <MdOutlineTheaters
                style={{ marginRight: "5px", marginTop: "-8px" }}
              />
              <a href="/theaters" style={{ textDecoration: "none" }}>
                Movie Theaters
              </a>
            </NavText>
          </NavItem>
          <NavItem>
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{ fontSize: "18px" }}>
              <MdOutlineMovie
                style={{ marginRight: "5px", marginTop: "-8px" }}
              />
              <a href="/movies" style={{ textDecoration: "none" }}>
                New Movie
              </a>
            </NavText>
          </NavItem>
          <NavItem>
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{ fontSize: "18px" }}>
              <MdOutlineMovie
                style={{ marginRight: "5px", marginTop: "-8px" }}
              />
              <a href="/movieslist" style={{ textDecoration: "none" }}>
                Movie List
              </a>
            </NavText>
          </NavItem>

          <NavItem>
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText style={{ fontSize: "18px" }}>
              <MdBookmarkAdded
                style={{ marginRight: "5px", marginTop: "-8px" }}
              />
              Bookings
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </Container>
  );
}
