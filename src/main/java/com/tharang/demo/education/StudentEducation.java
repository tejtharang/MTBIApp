package com.tharang.demo.education;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentEducation {
    @Id
    private String userId;

    private String major;
    private String minor;
    private String lastDateOfClass;
    private String unweightedGPA;
    private String gpaScale;
    private String currentEnrolledYear;
    private String extraDegrees;
    private String extraDegreesList;
    private String awards;
    private String mathOrSciExperiences;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getMinor() {
        return minor;
    }

    public void setMinor(String minor) {
        this.minor = minor;
    }

    public String getLastDateOfClass() {
        return lastDateOfClass;
    }

    public void setLastDateOfClass(String lastDateOfClass) {
        this.lastDateOfClass = lastDateOfClass;
    }

    public String getUnweightedGPA() {
        return unweightedGPA;
    }

    public void setUnweightedGPA(String unweightedGPA) {
        this.unweightedGPA = unweightedGPA;
    }

    public String getGpaScale() {
        return gpaScale;
    }

    public void setGpaScale(String gpaScale) {
        this.gpaScale = gpaScale;
    }

    public String getCurrentEnrolledYear() {
        return currentEnrolledYear;
    }

    public void setCurrentEnrolledYear(String currentEnrolledYear) {
        this.currentEnrolledYear = currentEnrolledYear;
    }

    public String getExtraDegrees() {
        return extraDegrees;
    }

    public void setExtraDegrees(String extraDegrees) {
        this.extraDegrees = extraDegrees;
    }

    public String getExtraDegreesList() {
        return extraDegreesList;
    }

    public void setExtraDegreesList(String extraDegreesList) {
        this.extraDegreesList = extraDegreesList;
    }

    public String getAwards() {
        return awards;
    }

    public void setAwards(String awards) {
        this.awards = awards;
    }

    public String getMathOrSciExperiences() {
        return mathOrSciExperiences;
    }

    public void setMathOrSciExperiences(String mathOrSciExperiences) {
        this.mathOrSciExperiences = mathOrSciExperiences;
    }
}
