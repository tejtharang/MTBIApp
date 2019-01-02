package com.tharang.demo.education;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentPreviousCollegeOrUniversityRepository extends CrudRepository<StudentPreviousCollegeOrUniversity, Integer> {
    public boolean existsByUserId(String userId);
    public StudentPreviousCollegeOrUniversity findByUserId(String userId);
}
