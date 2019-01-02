package com.tharang.demo.knowledgeOfMtbi;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StudentKnowledgeOfMtbi {
    @Id
    private String userId;

    private String knowledgeOfMtbi;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getKnowledgeOfMtbi() {
        return knowledgeOfMtbi;
    }

    public void setKnowledgeOfMtbi(String knowledgeOfMtbi) {
        this.knowledgeOfMtbi = knowledgeOfMtbi;
    }
}
