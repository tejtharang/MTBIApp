package com.tharang.demo.coursework;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface StudentCurrentlyEnrolledCourseworkRepository extends CrudRepository<StudentCurrentlyEnrolledCoursework, Integer> {
    boolean existsByUserId(String userId);
    List<StudentCurrentlyEnrolledCoursework> findAllByUserId(String userId);
    boolean existsByUserIdAndCourseTitle(String userId, String courseTitle);

    @Transactional
    void deleteByUserId(String userId);
}
