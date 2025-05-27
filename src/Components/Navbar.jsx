import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/TNITS-white (1).png";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-tnits-dark sticky-top">
      <div className="container-fluid">
        <button
          className="btn text-white d-lg-none"
          type="button"
          onClick={toggleSidebar}
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-4"></i>{" "}
        </button>

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="TNITS Logo" className="me-2" />
          <div className="d-none d-md-block"></div>
        </Link>
        <div className="d-flex align-items-center ms-auto">
          <Link to="#" className="btn text-white me-3">
            <i className="bi bi-bell fs-5"></i> {/* Notification icon */}
          </Link>
          <div className="d-flex align-items-center">
            <span className="text-white me-2">ADMIN</span>
            <div
              className="rounded-circle bg-white text-dark p-2 d-flex align-items-center justify-content-center"
              style={{ width: "30px", height: "30px" }}
            >
              <i className="bi bi-person-fill fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
