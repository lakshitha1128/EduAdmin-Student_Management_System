package com.EduAdmin.StudentManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EduAdmin.StudentManagement.model.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,Long> {
    Optional<Student> findByEmail(String email);
}
