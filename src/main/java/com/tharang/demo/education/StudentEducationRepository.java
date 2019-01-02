package com.tharang.demo.education;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentEducationRepository extends CrudRepository<StudentEducation, Integer> {
    public boolean existsByUserId(String userId);
    public StudentEducation findByUserId(String userId);
}
