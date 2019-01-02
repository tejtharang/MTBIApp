package com.tharang.demo.knowledgeOfMtbi;

import org.springframework.data.repository.CrudRepository;

public interface StudentKnowledgeOfMtbiRepository extends CrudRepository<StudentKnowledgeOfMtbi, Integer> {
    public boolean existsByUserId(String userId);
    public StudentKnowledgeOfMtbi findByUserId(String userId);
}
