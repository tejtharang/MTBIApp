package com.tharang.demo.submission;

import com.tharang.demo.ASUAffiliation.StudentASUAffiliation;
import com.tharang.demo.academicYearAddressAndPhone.StudentAcademicYearAddressAndPhone;
import com.tharang.demo.coursework.StudentCurrentlyEnrolledCoursework;
import com.tharang.demo.coursework.StudentMathematicsAndScienceCoursesCompleted;
import com.tharang.demo.education.StudentCurrentCollegeOrUniversity;
import com.tharang.demo.education.StudentEducation;
import com.tharang.demo.education.StudentPreviousCollegeOrUniversity;
import com.tharang.demo.eligibility.StudentEligibility;
import com.tharang.demo.finalWaiver.StudentFinalWaiver;
import com.tharang.demo.homeAddressAndPhone.StudentHomeAddressAndPhone;
import com.tharang.demo.knowledgeOfMtbi.StudentKnowledgeOfMtbi;
import com.tharang.demo.name.StudentName;
import com.tharang.demo.personalInfo.StudentPersonalInfo;
import com.tharang.demo.personalStatement.StudentPersonalStatement;
import com.tharang.demo.personalStatement.StudentPersonalStatementBAO;

import java.util.List;

public class StudentSubmission {

    private String userId;
    private String submitted;

    public String getSubmitted() {
        return submitted;
    }

    public void setSubmitted(String submitted) {
        this.submitted = submitted;
    }

    private StudentName studentName;
    private StudentEligibility studentEligibility;
    private StudentHomeAddressAndPhone studentHomeAddressAndPhone;

    private StudentAcademicYearAddressAndPhone studentAcademicYearAddressAndPhone;
    private StudentPersonalInfo studentPersonalInfo;
    private StudentASUAffiliation studentASUAffiliation;
    private StudentKnowledgeOfMtbi studentKnowledgeOfMtbi;
    private StudentEducation studentEducation;
    private StudentCurrentCollegeOrUniversity studentCurrentCollegeOrUniversity;
    private StudentPreviousCollegeOrUniversity studentPreviousCollegeOrUniversity;
    private List<StudentCurrentlyEnrolledCoursework> studentCurrentlyEnrolledCourseworkList;
    private List<StudentMathematicsAndScienceCoursesCompleted> studentMathematicsAndScienceCoursesCompletedList;
    private StudentPersonalStatementBAO studentPersonalStatementBAO;
    private StudentFinalWaiver studentFinalWaiver;

    public List<StudentMathematicsAndScienceCoursesCompleted> getStudentMathematicsAndScienceCoursesCompletedList() {
        return studentMathematicsAndScienceCoursesCompletedList;
    }

    public void setStudentMathematicsAndScienceCoursesCompletedList(List<StudentMathematicsAndScienceCoursesCompleted> studentMathematicsAndScienceCoursesCompletedList) {
        this.studentMathematicsAndScienceCoursesCompletedList = studentMathematicsAndScienceCoursesCompletedList;
    }

    public List<StudentCurrentlyEnrolledCoursework> getStudentCurrentlyEnrolledCourseworkList() {
        return studentCurrentlyEnrolledCourseworkList;
    }

    public void setStudentCurrentlyEnrolledCourseworkList(List<StudentCurrentlyEnrolledCoursework> studentCurrentlyEnrolledCourseworkList) {
        this.studentCurrentlyEnrolledCourseworkList = studentCurrentlyEnrolledCourseworkList;
    }


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public StudentName getStudentName() {
        return studentName;
    }

    public void setStudentName(StudentName studentName) {
        this.studentName = studentName;
    }

    public StudentEligibility getStudentEligibility() {
        return studentEligibility;
    }

    public void setStudentEligibility(StudentEligibility studentEligibility) {
        this.studentEligibility = studentEligibility;
    }

    public StudentHomeAddressAndPhone getStudentHomeAddressAndPhone() {
        return studentHomeAddressAndPhone;
    }

    public void setStudentHomeAddressAndPhone(StudentHomeAddressAndPhone studentHomeAddressAndPhone) {
        this.studentHomeAddressAndPhone = studentHomeAddressAndPhone;
    }

    public StudentAcademicYearAddressAndPhone getStudentAcademicYearAddressAndPhone() {
        return studentAcademicYearAddressAndPhone;
    }

    public void setStudentAcademicYearAddressAndPhone(StudentAcademicYearAddressAndPhone studentAcademicYearAddressAndPhone) {
        this.studentAcademicYearAddressAndPhone = studentAcademicYearAddressAndPhone;
    }

    public StudentPersonalInfo getStudentPersonalInfo() {
        return studentPersonalInfo;
    }

    public void setStudentPersonalInfo(StudentPersonalInfo studentPersonalInfo) {
        this.studentPersonalInfo = studentPersonalInfo;
    }

    public StudentASUAffiliation getStudentASUAffiliation() {
        return studentASUAffiliation;
    }

    public void setStudentASUAffiliation(StudentASUAffiliation studentASUAffiliation) {
        this.studentASUAffiliation = studentASUAffiliation;
    }

    public StudentKnowledgeOfMtbi getStudentKnowledgeOfMtbi() {
        return studentKnowledgeOfMtbi;
    }

    public void setStudentKnowledgeOfMtbi(StudentKnowledgeOfMtbi studentKnowledgeOfMtbi) {
        this.studentKnowledgeOfMtbi = studentKnowledgeOfMtbi;
    }

    public StudentEducation getStudentEducation() {
        return studentEducation;
    }

    public void setStudentEducation(StudentEducation studentEducation) {
        this.studentEducation = studentEducation;
    }

    public StudentCurrentCollegeOrUniversity getStudentCurrentCollegeOrUniversity() {
        return studentCurrentCollegeOrUniversity;
    }

    public void setStudentCurrentCollegeOrUniversity(StudentCurrentCollegeOrUniversity studentCurrentCollegeOrUniversity) {
        this.studentCurrentCollegeOrUniversity = studentCurrentCollegeOrUniversity;
    }

    public StudentPreviousCollegeOrUniversity getStudentPreviousCollegeOrUniversity() {
        return studentPreviousCollegeOrUniversity;
    }

    public void setStudentPreviousCollegeOrUniversity(StudentPreviousCollegeOrUniversity studentPreviousCollegeOrUniversity) {
        this.studentPreviousCollegeOrUniversity = studentPreviousCollegeOrUniversity;
    }

    public StudentPersonalStatementBAO getStudentPersonalStatementBAO(){
        return this.studentPersonalStatementBAO;
    }

    public void setStudentPersonalStatement(StudentPersonalStatementBAO studentPersonalStatementBAO){
        this.studentPersonalStatementBAO = studentPersonalStatementBAO;

    }

    public StudentFinalWaiver getStudentFinalWaiver(){
        return studentFinalWaiver;
    }

    public void setStudentFinalWaiver(StudentFinalWaiver studentFinalWaiver){
        this.studentFinalWaiver = studentFinalWaiver;
    }

}
