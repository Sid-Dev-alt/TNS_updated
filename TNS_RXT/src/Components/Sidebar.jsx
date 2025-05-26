import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const handleLinkClick = () => {
   
    if (window.innerWidth < 992) {
     
      toggleSidebar();
    }
  };

  return (
    <nav
      className={`sidebar bg-tnits-light p-3 d-flex flex-column ${
        isSidebarOpen ? "show" : ""
      }`}
    >
      <div className="py-2">
        <Link
          className={`nav-link ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
          to="/dashboard"
          onClick={handleLinkClick}
        >
          <i className="bi bi-grid me-2"></i> Dashboard
        </Link>

       
        <div className="nav-link-header mt-3">Field of Study</div>
        <Link
          className={`nav-link ${
            location.pathname === "/field-of-study/add" ? "active" : ""
          }`}
          to="/field-of-study/add"
          onClick={handleLinkClick}
        >
          <i className="bi bi-plus-circle me-2"></i> Add Field of Study
        </Link>
        <Link
          className={`nav-link ${
            location.pathname === "/field-of-study/list" ? "active" : ""
          }`}
          to="/field-of-study/list"
          onClick={handleLinkClick}
        >
          <i className="bi bi-card-list me-2"></i> Field of Study List
        </Link>

        <div className="nav-link-header mt-3">Departments</div>
        <Link
          className={`nav-link ${
            location.pathname === "/departments/add" ? "active" : ""
          }`}
          to="/departments/add"
          onClick={handleLinkClick}
        >
          <i className="bi bi-journals me-2"></i> Add Department
        </Link>
        <Link
          className={`nav-link ${
            location.pathname === "/departments/list" ? "active" : ""
          }`}
          to="/departments/list"
          onClick={handleLinkClick}
        >
          <i className="bi bi-bookmark-fill me-2"></i> Department List
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
