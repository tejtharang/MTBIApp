package com.tharang.demo.education;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentCurrentCollegeOrUniversityRepository extends CrudRepository<StudentCurrentCollegeOrUniversity, Integer> {
    public boolean existsByUserId(String userId);
    public StudentCurrentCollegeOrUniversity findByUserId(String userId);
}
