import React, { useState } from "react";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  department: Yup.string()
    .required("Department is required")
    .matches(/^[a-zA-Z]+$/, "Department should contain only letters"),
  fieldOfStudyCode: Yup.number()
    .required("Field of Study Code is required")
    .positive("Please enter a valid positive number")
    .integer("Please enter a valid number"),
  fieldOfStudy: Yup.string().required("Please select a Field of Study"),
  description: Yup.string().max(500, "Description cannot exceed 500 characters"),
});

const AddDept = () => {
  const [formData, setFormData] = useState({
    department: "",
    fieldOfStudyCode: "",
    fieldOfStudy: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    Yup.reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [name]: err.message }));
      });
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("Form Data:", formData);
      // Add your form submission logic here
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-tnits-light text-black">
          <h5 className="mb-0">Department Details</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="department" className="form-label">
                  Department <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.department ? "is-invalid" : ""
                  }`}
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Department"
                />
                {errors.department && (
                  <div className="invalid-feedback">{errors.department}</div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="fieldOfStudyCode" className="form-label">
                  Field of Study Code <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className={`form-control ${
                    errors.fieldOfStudyCode ? "is-invalid" : ""
                  }`}
                  id="fieldOfStudyCode"
                  name="fieldOfStudyCode"
                  value={formData.fieldOfStudyCode}
                  onChange={handleChange}
                  placeholder="Field of Study Code"
                />
                {errors.fieldOfStudyCode && (
                  <div className="invalid-feedback">
                    {errors.fieldOfStudyCode}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="fieldOfStudy" className="form-label">
                  Field of Study <span className="text-danger">*</span>
                </label>
                <select
                  className={`form-select ${
                    errors.fieldOfStudy ? "is-invalid" : ""
                  }`}
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Field of Study
                  </option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Engineering">Engineering</option>
                </select>
                {errors.fieldOfStudy && (
                  <div className="invalid-feedback">{errors.fieldOfStudy}</div>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Description"
              />
              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
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