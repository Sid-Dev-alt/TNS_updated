import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import AddFieldOfStudy from "./Components/AddFieldOfStudy";
import FieldOfStudyList from "./Components/FieldOfStudyList"; 





const Dashboard = () => (
  <div className="container-fluid">
    <h3>Dashboard Content</h3>
  </div>
);
const AddCampus = () => (
  <div className="container-fluid">
    <h3>Add Campus Content</h3>
  </div>
);
const CampusList = () => (
  <div className="container-fluid">
    <h3>Campus List Content</h3>
  </div>
);
const AddDepartment = () => (
  <div className="container-fluid">
    <h3>Add Department Content</h3>
  </div>
);
const DepartmentList = () => (
  <div className="container-fluid">
    <h3>Department List Content</h3>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Default route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campuses/add" element={<AddCampus />} />
          <Route path="/campuses/list" element={<CampusList />} />
          <Route path="/field-of-study/add" element={<AddFieldOfStudy />} />
          <Route
            path="/field-of-study/list"
            element={<FieldOfStudyList />}
          />{" "}

          <Route path="/departments/add" element={<AddDepartment />} />
          <Route path="/departments/list" element={<DepartmentList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
