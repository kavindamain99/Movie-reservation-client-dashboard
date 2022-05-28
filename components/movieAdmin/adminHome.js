import { React, useEffect } from "react";
import NavBar from "./adminNavbar";
import Sidebar from "./sidebar";
require("./adminHome.css");
//admin dashboard main page
function AdminHome() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <div id="bodyCinema">
        <div id="fly-in">
          <div>
            <span>Very</span>Cinematic
          </div>
          <div>
            Fade Away<span>into the distance</span>
          </div>
          <div>
            Still Loops <span> for eternity</span>
          </div>
          <div>
            <span>Just CSS</span> and HTML
          </div>
          <div>
            <span>Very</span>Cinematic
          </div>
          <div>
            Fade Away<span>into the distance</span>
          </div>
          <div>
            Still Loops <span> for eternity</span>
          </div>
          <div>
            <span>Just CSS</span> and HTML
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
