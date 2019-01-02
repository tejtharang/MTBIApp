package com.tharang.demo.respository;

import com.tharang.demo.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
    public List<Role> findByUsername(String username);
    Role findDistinctByUsername(String username);
}
