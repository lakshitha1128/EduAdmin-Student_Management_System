import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:9192/students/count')
      .then(response => {
        setStudentCount(response.data);
      })
      .catch(error => {
        console.error("Error fetching student count:", error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('/background.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        color: '#fff'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '40px',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <h1 className="mb-4">Welcome to EduAdmin Student Management System</h1>
        <p className="lead mb-4">Efficiently manage and maintain comprehensive student records with ease.</p>

        <h3>Total Students: {studentCount}</h3>

        <div className="mt-4">
          <Link to="/add-students" className="btn btn-primary me-3">Add New Student</Link>
          <Link to="/view-students" className="btn btn-success">View Students</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
