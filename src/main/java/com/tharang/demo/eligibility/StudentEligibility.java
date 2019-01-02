package com.tharang.demo.eligibility;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentEligibility {
    @Id
    private String userId;
    private String eligibility1;
    private String eligibility2;
    private String eligibility3;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEligibility1() {
        return eligibility1;
    }

    public void setEligibility1(String eligibility1) {
        this.eligibility1 = eligibility1;
    }

    public String getEligibility2() {
        return eligibility2;
    }

    public void setEligibility2(String eligibility2) {
        this.eligibility2 = eligibility2;
    }

    public String getEligibility3() {
        return eligibility3;
    }

    public void setEligibility3(String eligibility3) {
        this.eligibility3 = eligibility3;
    }




}
