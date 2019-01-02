package com.tharang.demo.personalInfo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentPersonalInfo {
    @Id
    private String userId;
    private String dateOfBirth;
    private String cityOfBirth;
    private String stateOfBirth;
    private String countryOfBirth;
    private String gender;
    private String race;
    private String usCitizenship;
    private String residingInUS;
    private String visaStatus;
    private String firstGenerationToAttendCollege;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCityOfBirth() {
        return cityOfBirth;
    }

    public void setCityOfBirth(String cityOfBirth) {
        this.cityOfBirth = cityOfBirth;
    }

    public String getStateOfBirth() {
        return stateOfBirth;
    }

    public void setStateOfBirth(String stateOfBirth) {
        this.stateOfBirth = stateOfBirth;
    }

    public String getCountryOfBirth() {
        return countryOfBirth;
    }

    public void setCountryOfBirth(String countryOfBirth) {
        this.countryOfBirth = countryOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getUsCitizenship() {
        return usCitizenship;
    }

    public void setUsCitizenship(String usCitizenship) {
        this.usCitizenship = usCitizenship;
    }

    public String getResidingInUS() {
        return residingInUS;
    }

    public void setResidingInUS(String residingInUS) {
        this.residingInUS = residingInUS;
    }

    public String getVisaStatus() {
        return visaStatus;
    }

    public void setVisaStatus(String visaStatus) {
        this.visaStatus = visaStatus;
    }

    public String getFirstGenerationToAttendCollege() {
        return firstGenerationToAttendCollege;
    }

    public void setFirstGenerationToAttendCollege(String firstGenerationToAttendCollege) {
        this.firstGenerationToAttendCollege = firstGenerationToAttendCollege;
    }
}
