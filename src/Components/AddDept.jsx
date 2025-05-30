import React, { useState } from "react";

const AddDept = () => {
  const [formData, setFormData] = useState({
    department: "",
    fieldOfStudyCode: "",
    fieldOfStudy: "",
    description: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">Department Details</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="department" className="form-label">
                  Department <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Department"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="fieldOfStudyCode" className="form-label">
                  Field of Study Code <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="fieldOfStudyCode"
                  name="fieldOfStudyCode"
                  value={formData.fieldOfStudyCode}
                  onChange={handleChange}
                  placeholder="fieldOfStudyCode"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="fieldOfStudy" className="form-label">
                  Field of Study <span>*</span>
                </label>
                <select
                  className="form-select"
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Field of Study
                  </option>
                  <option value="Science">Science</option>
                  <option value="Science">Science</option>
                  <option value="Science">Science</option>
                  <option value="Science">Science</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Description"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDept;
