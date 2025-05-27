import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const [isFieldOfStudyOpen, setIsFieldOfStudyOpen] = useState(true);

  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(true);

  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      toggleSidebar();
    }
  };

  return (
    <nav
      className={`sidebar bg-tnitsnav-light p-3 d-flex flex-column ${
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

        <div
          className="nav-link-header mt-3"
          onClick={() => setIsFieldOfStudyOpen(!isFieldOfStudyOpen)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          <i
            className={`bi ${
              isFieldOfStudyOpen ? "bi-chevron-down" : "bi-chevron-right"
            } me-2`}
          ></i>
          <span>Field of Study</span>
        </div>

        {isFieldOfStudyOpen && (
          <div className="sub-menu ms-3">
            <Link
              className={`nav-link ${
                location.pathname === "/field-of-study/add" ? "active" : ""
              }`}
              to="/field-of-study/add"
              onClick={handleLinkClick}
            >
              <i className="bi bi-dot me-2"></i> Add Field of Study
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/field-of-study/list" ? "active" : ""
              }`}
              to="/field-of-study/list"
              onClick={handleLinkClick}
            >
              <i className="bi bi-dot me-2"></i> Field of Study List
            </Link>
          </div>
        )}
        <div
          className="nav-link-header mt-3"
          onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          <i
            className={`bi ${
              isDepartmentsOpen ? "bi-chevron-down" : "bi-chevron-right"
            } me-2`}
          ></i>
          <span>Departments</span>
        </div>

        {isDepartmentsOpen && (
          <div className="sub-menu">
            <Link
              className={`nav-link ms-3 ${
                location.pathname === "/departments/add" ? "active" : ""
              }`}
              to="/departments/add"
              onClick={handleLinkClick}
            >
              <i className="bi bi-dot me-2"></i> Add Department
            </Link>
            <Link
              className={`nav-link ms-3 ${
                location.pathname === "/departments/list" ? "active" : ""
              }`}
              to="/departments/list"
              onClick={handleLinkClick}
            >
              <i className="bi bi-dot me-2"></i> Department List
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
