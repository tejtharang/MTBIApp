package com.tharang.demo.personalStatement;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentPersonalStatementRepository extends CrudRepository<StudentPersonalStatement,Integer> {
    boolean existsByUserId(String userId);
    StudentPersonalStatement findByUserId(String userId);
}
