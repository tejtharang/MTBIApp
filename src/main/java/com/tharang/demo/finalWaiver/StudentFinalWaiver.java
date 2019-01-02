package com.tharang.demo.finalWaiver;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentFinalWaiver {
    @Id
    private String userId;
    private String name;
    private String waiveOrNot;
    private String recommenderName;
    private String recommenderPosition;
    private String recommenderTitle;
    private String recommenderCompany;
    private String recommenderAddress;
    private String recommenderEmail;
    private String recommenderPhone;
    private String recommenderFax;
    private String acknowledgement1;
    private String acknowledgement2;
    private String acknowledgement3;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWaiveOrNot() {
        return waiveOrNot;
    }

    public void setWaiveOrNot(String waiveOrNot) {
        this.waiveOrNot = waiveOrNot;
    }

    public String getRecommenderName() {
        return recommenderName;
    }

    public void setRecommenderName(String recommenderName) {
        this.recommenderName = recommenderName;
    }

    public String getRecommenderPosition() {
        return recommenderPosition;
    }

    public void setRecommenderPosition(String recommenderPosition) {
        this.recommenderPosition = recommenderPosition;
    }

    public String getRecommenderTitle() {
        return recommenderTitle;
    }

    public void setRecommenderTitle(String recommenderTitle) {
        this.recommenderTitle = recommenderTitle;
    }

    public String getRecommenderCompany() {
        return recommenderCompany;
    }

    public void setRecommenderCompany(String recommenderCompany) {
        this.recommenderCompany = recommenderCompany;
    }

    public String getRecommenderAddress() {
        return recommenderAddress;
    }

    public void setRecommenderAddress(String recommenderAddress) {
        this.recommenderAddress = recommenderAddress;
    }

    public String getRecommenderEmail() {
        return recommenderEmail;
    }

    public void setRecommenderEmail(String recommenderEmail) {
        this.recommenderEmail = recommenderEmail;
    }

    public String getRecommenderPhone() {
        return recommenderPhone;
    }

    public void setRecommenderPhone(String recommenderPhone) {
        this.recommenderPhone = recommenderPhone;
    }

    public String getRecommenderFax() {
        return recommenderFax;
    }

    public void setRecommenderFax(String recommenderFax) {
        this.recommenderFax = recommenderFax;
    }

    public String getAcknowledgement1() {
        return acknowledgement1;
    }

    public void setAcknowledgement1(String acknowledgement1) {
        this.acknowledgement1 = acknowledgement1;
    }

    public String getAcknowledgement2() {
        return acknowledgement2;
    }

    public void setAcknowledgement2(String acknowledgement2) {
        this.acknowledgement2 = acknowledgement2;
    }

    public String getAcknowledgement3() {
        return acknowledgement3;
    }

    public void setAcknowledgement3(String acknowledgement3) {
        this.acknowledgement3 = acknowledgement3;
    }
}
