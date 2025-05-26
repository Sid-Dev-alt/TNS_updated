import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Add/remove class to body to adjust margin on smaller screens
    if (window.innerWidth < 992) {
      document.body.classList.toggle("sidebar-open", !isSidebarOpen);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="d-flex flex-grow-1">
       
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main content area */}
        <main className="content-wrapper">{children}</main>
      </div>

      
      {isSidebarOpen && window.innerWidth < 992 && (
        <div
          className="offcanvas-backdrop fade show d-lg-none"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Layout;
