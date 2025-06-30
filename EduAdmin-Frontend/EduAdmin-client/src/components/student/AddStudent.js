import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9192/students", student);
      navigate("/view-students");
    } catch (error) {
      console.error("Error saving student:", error.response || error.message);
      alert(
        "Failed to save student: " +
          (error.response?.data?.message || error.message || "Unknown error")
      );
    }
  };

  return (
    <div style={{ backgroundColor: "#e6f2ff", minHeight: "100vh", paddingTop: "30px" }}>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow bg-white rounded">
        <h2 className="mt-5">Add Student</h2>
        <form onSubmit={saveStudent}>
          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="firstName"
              id="firstName"
              required
              value={firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="lastName"
              id="lastName"
              required
              value={lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="email">
              Email
            </label>
            <input
              className="form-control col-sm-6"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group mb-5">
            <label className="input-group-text" htmlFor="department">
              Degree Programme
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="department"
              id="department"
              required
              value={department}
              onChange={handleInputChange}
            />
          </div>

          <div className="row mb-5">
            <div className="col-sm-2">
              <button type="submit" className="btn btn-outline-success btn-lg">
                Save
              </button>
            </div>

            <div className="col-sm-2">
              <Link to={"/view-students"} className="btn btn-outline-warning btn-lg">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
