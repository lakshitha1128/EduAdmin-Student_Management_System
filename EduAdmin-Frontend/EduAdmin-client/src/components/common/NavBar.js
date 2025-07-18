import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mb-5 shadow"
      style={{ backgroundColor: "#1a1a40" }} 
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          EduAdmin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/view-students"}>
                All Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-students"}>
                Add New Student
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
