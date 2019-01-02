package com.tharang.demo.academicYearAddressAndPhone;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentAcademicYearAddressAndPhoneRepository extends CrudRepository<StudentAcademicYearAddressAndPhone, Integer> {
    public boolean existsByUserId(String userId);
    public StudentAcademicYearAddressAndPhone findByUserId(String userId);
    
}
