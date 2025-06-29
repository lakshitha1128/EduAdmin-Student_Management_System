package com.EduAdmin.StudentManagement.exception;

public class StudentAleadyExistsException extends RuntimeException {
    public StudentAleadyExistsException(String message)
    {
        super(message);
    }
}
