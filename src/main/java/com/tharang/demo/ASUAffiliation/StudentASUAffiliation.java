package com.tharang.demo.ASUAffiliation;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentASUAffiliation {
    @Id
    private String userId;
    private String mtbiPreviousParticipation;
    private String mtbiParticipationDate;
    private String jbmshpPreviousParticipation;
    private String jbmshpParticipationDate;
    private String graduateProgramApplication;
    private String nameOfGraduateProgram;
    private String facultyReferral;
    private String referrerName;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMtbiPreviousParticipation() {
        return mtbiPreviousParticipation;
    }

    public void setMtbiPreviousParticipation(String mtbiPreviousParticipation) {
        this.mtbiPreviousParticipation = mtbiPreviousParticipation;
    }

    public String getMtbiParticipationDate() {
        return mtbiParticipationDate;
    }

    public void setMtbiParticipationDate(String mtbiParticipationDate) {
        this.mtbiParticipationDate = mtbiParticipationDate;
    }

    public String getJbmshpPreviousParticipation() {
        return jbmshpPreviousParticipation;
    }

    public void setJBMSHPPreviousParticipation(String JBMSHPPreviousParticipation) {
        this.jbmshpPreviousParticipation = JBMSHPPreviousParticipation;
    }

    public String getJbmshpParticipationDate() {
        return jbmshpParticipationDate;
    }

    public void setJbmshpParticipationDate(String JBMSHPParticipationDate) {
        this.jbmshpParticipationDate = JBMSHPParticipationDate;
    }

    public String getGraduateProgramApplication() {
        return graduateProgramApplication;
    }

    public void setGraduateProgramApplication(String graduateProgramApplication) {
        this.graduateProgramApplication = graduateProgramApplication;
    }

    public String getNameOfGraduateProgram() {
        return nameOfGraduateProgram;
    }

    public void setNameOfGraduateProgram(String nameOfGraduateProgram) {
        this.nameOfGraduateProgram = nameOfGraduateProgram;
    }

    public String getFacultyReferral() {
        return facultyReferral;
    }

    public void setFacultyReferral(String facultyReferral) {
        this.facultyReferral = facultyReferral;
    }

    public String getReferrerName() {
        return referrerName;
    }

    public void setReferrerName(String referrerName) {
        this.referrerName = referrerName;
    }
}
