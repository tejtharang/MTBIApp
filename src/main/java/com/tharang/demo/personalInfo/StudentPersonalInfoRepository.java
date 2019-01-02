package com.tharang.demo.personalInfo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentPersonalInfoRepository extends CrudRepository<StudentPersonalInfo, Integer> {
    public boolean existsByUserId(String userId);
    public StudentPersonalInfo findByUserId(String userId);
}
