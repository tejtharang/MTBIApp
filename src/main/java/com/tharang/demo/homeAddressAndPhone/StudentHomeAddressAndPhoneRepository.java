package com.tharang.demo.homeAddressAndPhone;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentHomeAddressAndPhoneRepository extends CrudRepository<StudentHomeAddressAndPhone , Integer> {
    public boolean existsByUserId(String userId);
    public StudentHomeAddressAndPhone findByUserId(String userId);
}
