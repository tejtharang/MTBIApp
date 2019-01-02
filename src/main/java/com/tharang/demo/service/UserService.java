package com.tharang.demo.service;

import com.tharang.demo.model.User;

public interface UserService {

    public void save(User user);
    public User findByUsername(String username);

}
