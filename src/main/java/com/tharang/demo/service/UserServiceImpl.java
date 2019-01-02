package com.tharang.demo.service;

import com.tharang.demo.model.Role;
import com.tharang.demo.model.User;
import com.tharang.demo.respository.RoleRepository;
import com.tharang.demo.respository.UserRepository;
import org.jvnet.hk2.annotations.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void save(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        List<Role> copy = copyIterable(roleRepository.findAll());
        Set<Role> roles = new HashSet<Role>(copy);
        user.setRoles(roles);
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public static <T> List<T> copyIterable(Iterable<T> iterable) {
        Iterator<T> iter = iterable.iterator();
        List<T> copy = new ArrayList<T>();
        while (iter.hasNext())
            copy.add(iter.next());
        return copy;
    }

}
