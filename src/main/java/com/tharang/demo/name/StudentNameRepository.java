package com.tharang.demo.name;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentNameRepository extends CrudRepository<StudentName,Integer> {
    public boolean existsByUserId(String userId);
    public StudentName findByUserId(String userId);
    public List<StudentName> findAll();
}

