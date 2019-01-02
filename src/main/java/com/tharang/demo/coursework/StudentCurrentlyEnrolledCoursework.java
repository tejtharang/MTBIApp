package com.tharang.demo.coursework;

import javax.persistence.*;

@Entity
public class StudentCurrentlyEnrolledCoursework {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String userId;
    private String courseNumber;



    private String semester;
    private String year;
    private String courseTitle;
    private String collegeOrUniversity;

    public Long getId(){
        return Id;
    }
    public void setId(Long Id){
        this.Id = Id;
    }

    public String getUserId() {
        return userId;
    }

    public String getCourseNumber() {
        return courseNumber;
    }

    public void setCourseNumber(String courseNumber) {
        this.courseNumber = courseNumber;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public String getCollegeOrUniversity() {
        return collegeOrUniversity;
    }

    public void setCollegeOrUniversity(String collegeOrUniversity) {
        this.collegeOrUniversity = collegeOrUniversity;
    }
}
