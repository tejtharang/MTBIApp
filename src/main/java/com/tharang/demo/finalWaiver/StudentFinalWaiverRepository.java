package com.tharang.demo.finalWaiver;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentFinalWaiverRepository extends CrudRepository<StudentFinalWaiver, Integer> {
    boolean existsByUserId(String userId);
    StudentFinalWaiver findByUserId(String userId);
}
