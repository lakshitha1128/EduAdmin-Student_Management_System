import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:9192/students/students/${id}`);
    setStudent(result.data);
  };

  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          {/* Profile Card */}
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                {/* ✅ Local image from public/user.jpg */}
                <img
                  src="/user.jpg"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {`${student.firstName} ${student.lastName}`}
                </h5>
                
                  <button type="button" className="btn btn-outline-warning ms-1">
                    Send Mail
                  </button>
              
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">First Name</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.firstName}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Last Name</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.lastName}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.email}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">degree programme</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{student.department}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
