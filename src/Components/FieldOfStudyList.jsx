import React, { useState } from "react";

const FieldOfStudyList = () => {
  
  const [fieldOfStudies, setFieldOfStudies] = useState([
    { id: 1, campus: "Hyderabad", field: "Architecture" },
    { id: 2, campus: "Hyderabad", field: "Engineering" },
    { id: 3, campus: "Banglore", field: "Management" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFieldOfStudies = fieldOfStudies.filter(
    (fos) =>
      fos.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fos.campus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fos.id.toString().includes(searchTerm.toLowerCase())
  );

  const handleView = (id) => {
    alert(`View details for Field of Study ID: ${id}`);
   
  };

  const handleEdit = (id) => {
    alert(`Edit Field of Study ID: ${id}`);
   
  };

  return (
    <div className="container-fluid">
      <h3 className="mb-4">List of Field of Study</h3>

      <div className="d-flex justify-content-end mb-3">
        <div className="input-group" style={{ maxWidth: "300px" }}>
         
        </div>
      </div>

      <div className="table-responsive add-field-of-study-card p-3">
        {" "}
     
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Field of Study Id</th>
              <th scope="col">Campus</th>
              <th scope="col">Field of Study</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFieldOfStudies.length > 0 ? (
              filteredFieldOfStudies.map((fos) => (
                <tr key={fos.id}>
                  <td>{fos.id}</td>
                  <td>{fos.campus}</td>
                  <td>{fos.field}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-info me-2"
                      onClick={() => handleView(fos.id)}
                      title="View"
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleEdit(fos.id)}
                      title="Edit"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Field of Study found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FieldOfStudyList;
