import React, { useState } from 'react';

const AddFieldOfStudy = () => {
  const [fieldOfStudyName, setFieldOfStudyName] = useState('');
  const [fieldOfStudyCode, setFieldOfStudyCode] = useState('');

  const [departments, setDepartments] = useState([{ name: '', code: '' }]);

  const handleAddFieldOfStudySave = (e) => {
    e.preventDefault();
    console.log("Saving Field of Study:", { fieldOfStudyName, fieldOfStudyCode });
    alert('Field of Study details saved (check console)!');
  };

  const handleDepartmentChange = (index, e) => {
    const { name, value } = e.target;
    const newDepartments = [...departments];
    newDepartments[index][name] = value;
    setDepartments(newDepartments);
  };

  const handleAddMoreDepartment = () => {
    setDepartments([...departments, { name: '', code: '' }]);
  };

  const handleRemoveDepartment = (index) => {
    const newDepartments = departments.filter((_, i) => i !== index);
    setDepartments(newDepartments);
  };

  const handleDepartmentSave = (e) => {
    e.preventDefault();
    console.log("Saving Department Details:", departments);
    alert('Department details saved (check console)!');
  
  };

  return (
    <div className="container-fluid">
      <h3 className="mb-4">Add Field of Study</h3>

      {/* Field of Study Details Section */}
      <div className="card mb-4">
        <div className="card-header bg-tnits-light text-black">
          <h5 className="mb-0">Field of Study Details</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleAddFieldOfStudySave}>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="fieldOfStudyInput" className="form-label">Field of Study</label>
                <input
                  type="text"
                  className="form-control"
                  id="fieldOfStudyInput"
                  placeholder="Field of Study"
                  value={fieldOfStudyName}
                  onChange={(e) => setFieldOfStudyName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="fieldOfStudyCodeInput" className="form-label">Field of Study Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="fieldOfStudyCodeInput"
                  placeholder="Field of Study Code"
                  value={fieldOfStudyCode}
                  onChange={(e) => setFieldOfStudyCode(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <button type="submit" className="btn btn-primary px-4 py-2">SAVE</button>
            </div>
          </form>
        </div>
      </div>

      {/* Department Details Section */}
      <div className="card">
        <div className="card-header bg-tnits-light text-black  d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Department Details</h5>
          <button className="btn btn-success btn-sm px-3" onClick={handleAddMoreDepartment}>
            + ADD MORE
          </button>
        </div>

        <div className="card-body">
          <form onSubmit={handleDepartmentSave}>
            {departments.map((department, index) => (
              <div className="row g-3 mb-3 align-items-end" key={index}>
                <div className="col-md-5">
                  <label htmlFor={`departmentName${index}`} className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`departmentName${index}`}
                    name="name"
                    placeholder="Department"
                    value={department.name}
                    onChange={(e) => handleDepartmentChange(index, e)}
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor={`departmentCode${index}`} className="form-label">Department Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`departmentCode${index}`}
                    name="code"
                    placeholder="Department Code"
                    value={department.code}
                    onChange={(e) => handleDepartmentChange(index, e)}
                    required
                  />
                </div>
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  {/* Plus button only if it's the last one, or if there's only one */}
                  {departments.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleRemoveDepartment(index)}
                      title="Remove Department"
                      style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  )}
                  {departments.length === (index + 1) && departments.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={handleAddMoreDepartment}
                      title="Add Department"
                      style={{ width: '38px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-start mt-3">
              <button type="submit" className="btn btn-primary px-4 py-2">SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFieldOfStudy;