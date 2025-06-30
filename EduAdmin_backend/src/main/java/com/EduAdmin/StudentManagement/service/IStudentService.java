package com.EduAdmin.StudentManagement.service;

import java.util.List;

import com.EduAdmin.StudentManagement.model.Student;

public interface IStudentService {
    Student addStudent(Student student);
    List<Student> getStudents();
    Student updateSTudent(Student student, Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);

    // student count
    long getStudentCount();
}
