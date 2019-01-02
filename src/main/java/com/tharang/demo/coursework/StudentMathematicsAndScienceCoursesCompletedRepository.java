package com.tharang.demo.coursework;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface StudentMathematicsAndScienceCoursesCompletedRepository extends CrudRepository<StudentMathematicsAndScienceCoursesCompleted, Integer> {
    boolean existsByUserId(String userId);
    List<StudentMathematicsAndScienceCoursesCompleted> findAllByUserId(String userId);
    boolean existsByUserIdAndCourseTitle(String userId, String courseTitle);

    @Transactional
    void deleteByUserId(String userId);
}
