package com.tharang.demo.eligibility;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentEligibilityRepository extends CrudRepository<StudentEligibility,Integer> {
    public boolean existsByUserId(String userId);
    public StudentEligibility findByUserId(String userId);
}
