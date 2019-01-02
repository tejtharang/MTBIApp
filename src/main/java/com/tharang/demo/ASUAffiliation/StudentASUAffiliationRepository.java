package com.tharang.demo.ASUAffiliation;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Id;

@Repository
public interface StudentASUAffiliationRepository extends CrudRepository<StudentASUAffiliation, Integer> {
    public boolean existsByUserId(String userId);
    public StudentASUAffiliation findByUserId(String userId);
}
