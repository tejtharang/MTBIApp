package com.tharang.demo.personalStatement;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.io.File;

@Entity
public class StudentPersonalStatement {
    @Id
    private String userId;
    private String locationOfFile;


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLocationOfFile() {
        return locationOfFile;
    }

    public void setLocationOfFile(String locationOfFile) {
        this.locationOfFile = locationOfFile;
    }
}
