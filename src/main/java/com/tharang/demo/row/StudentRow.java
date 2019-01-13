package com.tharang.demo.row;

import com.tharang.demo.model.User;
import com.tharang.demo.name.StudentName;

public class StudentRow extends StudentName {
    public String getSubmitted() {
        return submitted;
    }

    public void setSubmitted(String submitted) {
        this.submitted = submitted;
    }

    private String submitted;

}
