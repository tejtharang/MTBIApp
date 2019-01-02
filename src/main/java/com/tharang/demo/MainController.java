package com.tharang.demo;

import com.mysql.jdbc.util.Base64Decoder;
import com.tharang.demo.ASUAffiliation.StudentASUAffiliation;
import com.tharang.demo.ASUAffiliation.StudentASUAffiliationRepository;
import com.tharang.demo.academicYearAddressAndPhone.StudentAcademicYearAddressAndPhone;
import com.tharang.demo.academicYearAddressAndPhone.StudentAcademicYearAddressAndPhoneRepository;
import com.tharang.demo.coursework.StudentCurrentlyEnrolledCoursework;
import com.tharang.demo.coursework.StudentCurrentlyEnrolledCourseworkRepository;
import com.tharang.demo.coursework.StudentMathematicsAndScienceCoursesCompleted;
import com.tharang.demo.coursework.StudentMathematicsAndScienceCoursesCompletedRepository;
import com.tharang.demo.credentials.Login;
import com.tharang.demo.education.*;
import com.tharang.demo.eligibility.StudentEligibility;
import com.tharang.demo.eligibility.StudentEligibilityRepository;
import com.tharang.demo.finalWaiver.StudentFinalWaiver;
import com.tharang.demo.finalWaiver.StudentFinalWaiverRepository;
import com.tharang.demo.homeAddressAndPhone.StudentHomeAddressAndPhone;
import com.tharang.demo.homeAddressAndPhone.StudentHomeAddressAndPhoneRepository;
import com.tharang.demo.knowledgeOfMtbi.StudentKnowledgeOfMtbi;
import com.tharang.demo.knowledgeOfMtbi.StudentKnowledgeOfMtbiRepository;
import com.tharang.demo.model.Role;
import com.tharang.demo.model.User;
import com.tharang.demo.name.StudentName;
import com.tharang.demo.name.StudentNameRepository;
import com.tharang.demo.personalInfo.StudentPersonalInfo;
import com.tharang.demo.personalInfo.StudentPersonalInfoRepository;
import com.tharang.demo.personalStatement.StudentPersonalStatement;
import com.tharang.demo.personalStatement.StudentPersonalStatementBAO;
import com.tharang.demo.personalStatement.StudentPersonalStatementRepository;
import com.tharang.demo.respository.RoleRepository;
import com.tharang.demo.service.SecurityService;
import com.tharang.demo.service.UserService;
import com.tharang.demo.submission.StudentSubmission;
import com.tharang.demo.respository.UserRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


import javax.mail.internet.MimeMessage;
import javax.persistence.Convert;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import java.io.*;
import java.net.URI;
import java.net.URL;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;



@RestController // This means that this class is a Controller // This means URL's start with /demo (after Application path)
public class MainController {

    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final Logger LOGGER = LogManager.getLogger(MainController.class);

    @Autowired // This means to get the bean called userRepository// Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;

    @Autowired
    private StudentEligibilityRepository studentEligibilityRepository;

    @Autowired
    private StudentNameRepository studentNameRepository;

    @Autowired
    private StudentHomeAddressAndPhoneRepository studentHomeAddressAndPhoneRepository;

    @Autowired
    private StudentAcademicYearAddressAndPhoneRepository studentAcademicYearAddressAndPhoneRepository;

    @Autowired
    private StudentPersonalInfoRepository studentPersonalInfoRepository;

    @Autowired
    private StudentASUAffiliationRepository studentASUAffiliationRepository;

    @Autowired
    private StudentKnowledgeOfMtbiRepository studentKnowledgeOfMtbiRepository;

    @Autowired
    private StudentEducationRepository studentEducationRepository;

    @Autowired
    private StudentCurrentCollegeOrUniversityRepository studentCurrentCollegeOrUniversityRepository;

    @Autowired
    private StudentPreviousCollegeOrUniversityRepository studentPreviousCollegeOrUniversityRepository;

    @Autowired
    private StudentCurrentlyEnrolledCourseworkRepository studentCurrentlyEnrolledCourseworkRepository;

    @Autowired
    private StudentMathematicsAndScienceCoursesCompletedRepository studentMathematicsAndScienceCoursesCompletedRepository;

    @Autowired
    private StudentPersonalStatementRepository studentPersonalStatementRepository;

    @Autowired
    private StudentFinalWaiverRepository studentFinalWaiverRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JavaMailSender sender;

    @RequestMapping(path="/save", method=RequestMethod.POST)
    @Consumes(value="application/json")// Map ONLY POST Requests
    public ResponseEntity<String> takesaveSubmission(@RequestBody StudentSubmission studentSubmission, Authentication authentication) {
        if(studentSubmission == null){
            return new ResponseEntity<>("error",HttpStatus.OK);
        }
        String userId = studentSubmission.getUserId();
        studentEligibilityRepository.save(studentSubmission.getStudentEligibility());
        studentNameRepository.save(studentSubmission.getStudentName());
        studentHomeAddressAndPhoneRepository.save(studentSubmission.getStudentHomeAddressAndPhone());
        studentAcademicYearAddressAndPhoneRepository.save(studentSubmission.getStudentAcademicYearAddressAndPhone());
        studentPersonalInfoRepository.save(studentSubmission.getStudentPersonalInfo());
        studentASUAffiliationRepository.save(studentSubmission.getStudentASUAffiliation());
        studentKnowledgeOfMtbiRepository.save(studentSubmission.getStudentKnowledgeOfMtbi());
        studentEducationRepository.save(studentSubmission.getStudentEducation());
        studentCurrentCollegeOrUniversityRepository.save(studentSubmission.getStudentCurrentCollegeOrUniversity());
        studentPreviousCollegeOrUniversityRepository.save(studentSubmission.getStudentPreviousCollegeOrUniversity());


        List<StudentCurrentlyEnrolledCoursework> studentCurrentlyEnrolledCourseworkList = studentSubmission.getStudentCurrentlyEnrolledCourseworkList();
        while(studentCurrentlyEnrolledCourseworkRepository.existsByUserId(userId))
            studentCurrentlyEnrolledCourseworkRepository.deleteByUserId(userId);
        for(StudentCurrentlyEnrolledCoursework coursework : studentCurrentlyEnrolledCourseworkList){
            studentCurrentlyEnrolledCourseworkRepository.save(coursework);
        }

        List<StudentMathematicsAndScienceCoursesCompleted> studentMathematicsAndScienceCoursesCompletedList = studentSubmission.getStudentMathematicsAndScienceCoursesCompletedList();
        while(studentMathematicsAndScienceCoursesCompletedRepository.existsByUserId(userId))
            studentMathematicsAndScienceCoursesCompletedRepository.deleteByUserId(userId);
        for(StudentMathematicsAndScienceCoursesCompleted coursework : studentMathematicsAndScienceCoursesCompletedList){
            studentMathematicsAndScienceCoursesCompletedRepository.save(coursework);
        }
        String fileContent = studentSubmission.getStudentPersonalStatementBAO().getBytes();
        String fileName = studentSubmission.getStudentPersonalStatementBAO().getFileName();
        if(fileName != null) {
            try {
                String path = "/home/beck/mtbi/" + userId;
                (new File(path)).mkdirs();

                byte [] decodedBytes = org.glassfish.jersey.internal.util.Base64.decode(fileContent.getBytes());
                OutputStream fos = new FileOutputStream(path + "/" + fileName);
                fos.write(decodedBytes);
                fos.flush();
                fos.close();




                StudentPersonalStatement studentPersonalStatement = new StudentPersonalStatement();
                studentPersonalStatement.setUserId(userId);
                studentPersonalStatement.setLocationOfFile(path + "/" + fileName);
                studentPersonalStatementRepository.save(studentPersonalStatement);
            } catch (IOException e) {
                LOGGER.error(e);
            }

        }
        studentFinalWaiverRepository.save(studentSubmission.getStudentFinalWaiver());

        return new ResponseEntity<>("All okay", HttpStatus.OK);
    }
    public static String guessEncoding(byte[] bytes) {
        String DEFAULT_ENCODING = "UTF-8";
        org.mozilla.universalchardet.UniversalDetector detector =
                new org.mozilla.universalchardet.UniversalDetector(null);
        detector.handleData(bytes, 0, bytes.length);
        detector.dataEnd();
        String encoding = detector.getDetectedCharset();
        detector.reset();
        if (encoding == null) {
            encoding = DEFAULT_ENCODING;
        }
        return encoding;
    }
    @RequestMapping(path="/submit", method=RequestMethod.POST)
    @Consumes(value="application/json")// Map ONLY POST Requests
    public ResponseEntity<String> takeSubmission(@RequestBody StudentSubmission studentSubmission, Authentication authentication) {
        if(studentSubmission == null){
            return new ResponseEntity<>("error",HttpStatus.OK);
        }
        String userId = studentSubmission.getUserId();
        User user = userRepository.findByUsername(userId);
        user.setSubmitted("1");
        userRepository.save(user);
        studentEligibilityRepository.save(studentSubmission.getStudentEligibility());
        studentNameRepository.save(studentSubmission.getStudentName());
        studentHomeAddressAndPhoneRepository.save(studentSubmission.getStudentHomeAddressAndPhone());
        studentAcademicYearAddressAndPhoneRepository.save(studentSubmission.getStudentAcademicYearAddressAndPhone());
        studentPersonalInfoRepository.save(studentSubmission.getStudentPersonalInfo());
        studentASUAffiliationRepository.save(studentSubmission.getStudentASUAffiliation());
        studentKnowledgeOfMtbiRepository.save(studentSubmission.getStudentKnowledgeOfMtbi());
        studentEducationRepository.save(studentSubmission.getStudentEducation());
        studentCurrentCollegeOrUniversityRepository.save(studentSubmission.getStudentCurrentCollegeOrUniversity());
        studentPreviousCollegeOrUniversityRepository.save(studentSubmission.getStudentPreviousCollegeOrUniversity());


        List<StudentCurrentlyEnrolledCoursework> studentCurrentlyEnrolledCourseworkList = studentSubmission.getStudentCurrentlyEnrolledCourseworkList();
        while(studentCurrentlyEnrolledCourseworkRepository.existsByUserId(userId))
            studentCurrentlyEnrolledCourseworkRepository.deleteByUserId(userId);
        for(StudentCurrentlyEnrolledCoursework coursework : studentCurrentlyEnrolledCourseworkList){
            studentCurrentlyEnrolledCourseworkRepository.save(coursework);
        }

        List<StudentMathematicsAndScienceCoursesCompleted> studentMathematicsAndScienceCoursesCompletedList = studentSubmission.getStudentMathematicsAndScienceCoursesCompletedList();
        while(studentMathematicsAndScienceCoursesCompletedRepository.existsByUserId(userId))
            studentMathematicsAndScienceCoursesCompletedRepository.deleteByUserId(userId);
        for(StudentMathematicsAndScienceCoursesCompleted coursework : studentMathematicsAndScienceCoursesCompletedList){
            studentMathematicsAndScienceCoursesCompletedRepository.save(coursework);
        }
        String fileContent = studentSubmission.getStudentPersonalStatementBAO().getBytes();
        String fileName = studentSubmission.getStudentPersonalStatementBAO().getFileName();
        if(fileName != null) {
                try {
                    String path = "/home/beck/mtbi/" + userId;

                                       (new File(path)).mkdirs();

                    byte [] decodedBytes = org.glassfish.jersey.internal.util.Base64.decode(fileContent.getBytes());
                    OutputStream fos = new FileOutputStream(path + "/" + fileName);
                    fos.write(decodedBytes);
                    fos.flush();
                    fos.close();




                    StudentPersonalStatement studentPersonalStatement = new StudentPersonalStatement();
                    studentPersonalStatement.setUserId(userId);
                    studentPersonalStatement.setLocationOfFile(path + "/" + fileName);
                    studentPersonalStatementRepository.save(studentPersonalStatement);
                }
                catch (IOException e) {
                    LOGGER.error(e);
                }

        }
        studentFinalWaiverRepository.save(studentSubmission.getStudentFinalWaiver());
        try {
            if(!studentSubmission.getStudentFinalWaiver().getRecommenderEmail().equals(""))
                sendEmail(studentSubmission);

        }catch(Exception ex) {
            LOGGER.error(ex);
        }
        return new ResponseEntity<>("All okay", HttpStatus.OK);
    }

    @PostMapping(path="/registerUser")
    @Consumes(value="application/json")
    public ResponseEntity<String> takeRegistrationDetails(@RequestBody User submittedUser){
        submittedUser.setSubmitted("0");
        User user = userRepository.findByUsername(submittedUser.getUsername());
        if(user != null){

            LOGGER.error("User ID already exists");
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.setContentType(MediaType.TEXT_HTML);

            return new ResponseEntity<>("User ID already exists. Please come up with a different user Id",responseHeaders, HttpStatus.NOT_ACCEPTABLE);
        }
        try {
            submittedUser.setPassword(passwordEncoder.encode(submittedUser.getPassword()));
            submittedUser.setActive("ACTIVE");
            userRepository.save(submittedUser);
            Role role = new Role();
            role.setUsername(submittedUser.getUsername());
            role.setRoleName("STUDENT");
            roleRepository.save(role);
        }
        catch(Exception e){
            LOGGER.error(e);
            return new ResponseEntity<>("Error occured in the process. Please try again in some time", HttpStatus.OK);
        }
        LOGGER.info("Successfully added user");
        return new ResponseEntity<>("Successfully added user", HttpStatus.OK);
    }

    @PostMapping(path="/registerAdmin")
    @Consumes(value="application/json")
    public ResponseEntity<String> takeAdminRegistrationDetails(@RequestBody User submittedUser){
        User user = userRepository.findByUsername(submittedUser.getUsername());
        if(user != null){

            LOGGER.error("User ID already exists");
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.setContentType(MediaType.TEXT_HTML);

            return new ResponseEntity<>("User ID already exists. Please come up with a different user Id",responseHeaders, HttpStatus.NOT_ACCEPTABLE);
        }
        try {
            submittedUser.setPassword(passwordEncoder.encode(submittedUser.getPassword()));
            submittedUser.setActive("INACTIVE");
            userRepository.save(submittedUser);
            Role role = new Role();
            role.setUsername(submittedUser.getUsername());
            role.setRoleName("ADMIN");
            roleRepository.save(role);
        }
        catch(Exception e){
            LOGGER.error(e);
            return new ResponseEntity<>("Error occured in the process. Please try again in some time", HttpStatus.OK);
        }
        LOGGER.info("Successfully added Admin");
        return new ResponseEntity<>("Successfully added Admin", HttpStatus.OK);
    }

    @PostMapping(value = "/loginAuthentication")
    public ResponseEntity<String> loggedIn(@RequestBody Login login, HttpServletRequest request, HttpServletResponse response) {
        try {
            com.tharang.demo.model.User user = userService.findByUsername(login.getUsername());
            if (user != null && passwordEncoder.matches(login.getPassword(), user.getPassword())) {
                securityService.autologin(login.getUsername(), login.getPassword());
                LOGGER.info("Student Login successful");
                if(userRepository.findByUsername(login.getUsername()).getSubmitted().equals("1"))
                    return new ResponseEntity<>("form_submitted",HttpStatus.OK);
                return new ResponseEntity<>("no_error",HttpStatus.OK);
            }
        } catch (NullPointerException e) {
            LOGGER.error("Username : " + login.getUsername() + " does not exist");
            return new ResponseEntity<>("error",HttpStatus.INTERNAL_SERVER_ERROR);

        }
        return new ResponseEntity<>("error",HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @PostMapping(value = "/adminLoginAuthentication")
    public ResponseEntity<String> adminLoggedIn(@RequestBody Login login, HttpServletRequest request, HttpServletResponse response){
        try{
            Role role = roleRepository.findDistinctByUsername(login.getUsername());
            com.tharang.demo.model.User user = userService.findByUsername(login.getUsername());
            if(user.getActive().equals("INACTIVE") || !role.getRoleName().equals("ADMIN")){
                return new ResponseEntity<>("inactive", HttpStatus.FORBIDDEN);
            }
            if(user!=null && passwordEncoder.matches(login.getPassword(), user.getPassword()))
            {
                securityService.autologin(login.getUsername(),login.getPassword());
                LOGGER.info("Admin Login Successful");
                return new ResponseEntity<>("no_error", HttpStatus.OK);
            }

        }
        catch(NullPointerException e){
            LOGGER.error("Username : " + login.getUsername() + "does not exist");
            return new ResponseEntity<>("unavailable", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch(Exception e){
            LOGGER.error("Exception occured : " + e);
        }
        return new ResponseEntity<>("error",HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping(value = "/applicantList")
    public ResponseEntity<List<StudentName>> entireApplicantList(){
        List<StudentName> list = new ArrayList<StudentName>();
        try{
            for(User user : userRepository.findAll()){
                if(studentNameRepository.existsByUserId(user.getUsername())) {
                    list.add(studentNameRepository.findByUserId(user.getUsername()));
                }
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }
        catch(Exception e){
            LOGGER.error("Exception occured " + e);
            return new ResponseEntity<>(list,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/username")
    public ResponseEntity<String> currentUsername(Authentication authentication){
        String s = authentication.getName();
        return new ResponseEntity<>(s, HttpStatus.OK);
    }

    @PostMapping(value = "/signout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication != null)
                new SecurityContextLogoutHandler().logout(request, response, authentication);
        } catch (Exception e) {
            LOGGER.error("Unable to log out" + e);
            return new ResponseEntity<>("error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("no_error", HttpStatus.OK);
    }

    private void sendEmail(StudentSubmission studentSubmission) throws Exception{
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper_facultyRecommender = new MimeMessageHelper(message, true);
        String facultyRecommenderMessage = "Dear Faculty Recommender,\n" +
                "You are receiving this email because a student of yours has indicated that you will be providing a letter of recommendation in support of their application to the Mathematical and Theoretical Biology Institute (MTBI) summer program.\n"+
                "MTBI is an intensive summer research experience that prepares undergraduate students for the rigors of graduate level research at the interface of mathematics, statistics, and the natural and social sciences. Select students are invited to Arizona State University for eight weeks, where their time is split between classroom instruction on research methods and hands-on research projects. Students conduct their own research project with a group and present their research at different conferences throughout the year.\n" +
                "We will need you to provide the following: \n" +
                "1.\tThe Faculty Letter of Recommendation Form – this form is attached, please complete, sign, and save as a pdf.\n"+
                "2.\tLetter of Recommendation – please provide a letter of recommendation on university/institution letterhead, sign, and save as a pdf. \n"+
                "Please email both documents to Rebecca Perlin at Rebecca.Perlin@asu.edu, no later than January 31. And please feel free to reach out with any questions or concerns. \n"+
                "Sincerely,\n" +
                "\n" +
                "Rebecca Perlin\n" +
                "Arizona State University\n" +
                "Simon A. Levin Mathematical, Computational and Modeling Sciences Center\n" +
                "Mathematical and Theoretical Biology Institute (MTBI)\n" +
                "Joaquin Bustoz Math-Science Honors Program (JBMSHP)\n" +
                "Rebecca.Perlin@asu.edu  │  (480) 727-8525\n" +
                "http://mtbi.asu.edu  │  http://mcmsc.asu.edu/\n" +
                " \n" +
                "ASU #1 in the U.S. for innovation\n" +
                "#1 ASU, #2 Stanford, #3 MIT\n" +
                "-          U.S. News & World Report\n";

        helper_facultyRecommender.setTo(studentSubmission.getStudentFinalWaiver().getRecommenderEmail());
        helper_facultyRecommender.setText(facultyRecommenderMessage);

        FileSystemResource file = new FileSystemResource("/home/beck/mtbi/Faculty_Letter_Of_Recommendation_Form.pdf");
        helper_facultyRecommender.addAttachment("Faculty_Letter_of_Recommendation_form.pdf",file);
        helper_facultyRecommender.setSubject("MTBI summer program faculty recommendation");

        sender.send(message);

        MimeMessage message2 = sender.createMimeMessage();
        MimeMessageHelper helper_applicant = new MimeMessageHelper(message2, true);
        String applicantMessage = "Dear MTBI Applicant,\n" +
                "\n" +
                "Thank you for submitting your application to the Mathematical and Theoretical Biology Institute (MTBI) summer program! Please remember that in addition to the on-line application, there are other supporting materials required to complete the application process. Incomplete applications are not accepted. Other supporting materials are:\n" +
                "•\tA copy of your official transcripts\n" +
                "•\tOne Faculty Letter of Recommendation and the Faculty Letter of Recommendation Form\n" +
                "All supporting documents must be received or postmarked by January 31. Please review the MTBI On-line Application Checklist to be sure your application is complete. You will be notified of your application status by March 20. If you have any questions regarding your application please contact Rebecca Perlin at Rebecca.Perlin@asu.edu. \n" +
                "\n" +
                "Sincerely,\n" +
                "\n" +
                "Rebecca Perlin\n" +
                "Arizona State University\n" +
                "Simon A. Levin Mathematical, Computational and Modeling Sciences Center\n" +
                "Mathematical and Theoretical Biology Institute (MTBI)\n" +
                "Joaquin Bustoz Math-Science Honors Program (JBMSHP)\n" +
                "Rebecca.Perlin@asu.edu  │  (480) 727-8525\n" +
                " \n" +
                "ASU #1 in the U.S. for innovation\n" +
                "#1 ASU, #2 Stanford, #3 MIT\n" +
                "-          U.S. News & World Report\n";
        FileSystemResource file2 = new FileSystemResource("/home/beck/mtbi/mtbi_online_app_checklist.pdf");
        helper_applicant.setTo((userRepository.findByUsername(studentSubmission.getUserId())).getEmail());
        helper_applicant.addAttachment("MTBI_Online_Application_checklist.pdf",file2);
        helper_applicant.setText(applicantMessage);
        helper_applicant.setSubject("MTBI summer program application completed");
        sender.send(message2);
    }

    @PostMapping(value ="/formdata")
    public ResponseEntity<StudentSubmission> formData(@RequestBody Login login, Authentication authentication){

        String userId = authentication.getName();
        StudentSubmission studentData = new StudentSubmission();
        StudentEligibility studentEligibility = null;
        StudentName studentName = null;
        StudentHomeAddressAndPhone studentHomeAddressAndPhone = null;
        StudentAcademicYearAddressAndPhone studentAcademicYearAddressAndPhone = null;
        StudentPersonalInfo studentPersonalInfo = null;
        StudentASUAffiliation studentASUAffiliation = null;
        StudentKnowledgeOfMtbi studentKnowledgeOfMtbi = null;
        StudentEducation studentEducation = null;
        StudentCurrentCollegeOrUniversity studentCurrentCollegeOrUniversity = null;
        StudentPreviousCollegeOrUniversity studentPreviousCollegeOrUniversity = null;
        List<StudentCurrentlyEnrolledCoursework> studentCurrentlyEnrolledCoursework = new ArrayList<StudentCurrentlyEnrolledCoursework>();
        List<StudentMathematicsAndScienceCoursesCompleted> studentMathematicsAndScienceCoursesCompleted = new ArrayList<StudentMathematicsAndScienceCoursesCompleted>();
        StudentPersonalStatementBAO studentPersonalStatementBAO = new StudentPersonalStatementBAO();
        StudentPersonalStatement studentPersonalStatement = null;
        StudentFinalWaiver studentFinalWaiver = null;
        try{
            User testLogin = userService.findByUsername(userId);
        }
        catch(NullPointerException e) {
            LOGGER.error("Cannot find user in Login Table : " + e);
            return new ResponseEntity<>(studentData, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        studentData.setSubmitted(userRepository.findByUsername(userId).getSubmitted());
        if(studentEligibilityRepository.existsByUserId(userId))
            studentEligibility = studentEligibilityRepository.findByUserId(userId);
        if(studentNameRepository.existsByUserId(userId))
            studentName = studentNameRepository.findByUserId(userId);
        if(studentHomeAddressAndPhoneRepository.existsByUserId(userId))
            studentHomeAddressAndPhone = studentHomeAddressAndPhoneRepository.findByUserId(userId);
        if(studentAcademicYearAddressAndPhoneRepository.existsByUserId(userId))
            studentAcademicYearAddressAndPhone = studentAcademicYearAddressAndPhoneRepository.findByUserId(userId);
        if(studentPersonalInfoRepository.existsByUserId(userId))
            studentPersonalInfo = studentPersonalInfoRepository.findByUserId(userId);
        if(studentASUAffiliationRepository.existsByUserId(userId))
            studentPersonalInfo = studentPersonalInfoRepository.findByUserId(userId);
        if(studentKnowledgeOfMtbiRepository.existsByUserId(userId))
            studentKnowledgeOfMtbi = studentKnowledgeOfMtbiRepository.findByUserId(userId);
        if(studentEducationRepository.existsByUserId(userId))
            studentEducation = studentEducationRepository.findByUserId(userId);
        if(studentCurrentCollegeOrUniversityRepository.existsByUserId(userId))
            studentCurrentCollegeOrUniversity = studentCurrentCollegeOrUniversityRepository.findByUserId(userId);
        if(studentPreviousCollegeOrUniversityRepository.existsByUserId(userId))
            studentPreviousCollegeOrUniversity = studentPreviousCollegeOrUniversityRepository.findByUserId(userId);
        if(studentASUAffiliationRepository.existsByUserId(userId))
            studentASUAffiliation = studentASUAffiliationRepository.findByUserId(userId);
        if(studentCurrentlyEnrolledCourseworkRepository.existsByUserId(userId))
            for(StudentCurrentlyEnrolledCoursework c : studentCurrentlyEnrolledCourseworkRepository.findAllByUserId(userId)){
                studentCurrentlyEnrolledCoursework.add(c);
            }

        if(studentMathematicsAndScienceCoursesCompletedRepository.existsByUserId(userId))
            for(StudentMathematicsAndScienceCoursesCompleted c : studentMathematicsAndScienceCoursesCompletedRepository.findAllByUserId(userId)){
                studentMathematicsAndScienceCoursesCompleted.add(c);
            }
        if(studentPersonalStatementRepository.existsByUserId(userId))
            studentPersonalStatement = studentPersonalStatementRepository.findByUserId(userId);

        if(studentFinalWaiverRepository.existsByUserId(userId))
            studentFinalWaiver = studentFinalWaiverRepository.findByUserId(userId);


        studentData.setStudentEligibility(studentEligibility);
        studentData.setStudentName(studentName);
        studentData.setStudentHomeAddressAndPhone(studentHomeAddressAndPhone);
        studentData.setStudentAcademicYearAddressAndPhone(studentAcademicYearAddressAndPhone);
        studentData.setStudentPersonalInfo(studentPersonalInfo);
        studentData.setStudentASUAffiliation(studentASUAffiliation);
        studentData.setStudentKnowledgeOfMtbi(studentKnowledgeOfMtbi);
        studentData.setStudentEducation(studentEducation);
        studentData.setStudentCurrentCollegeOrUniversity(studentCurrentCollegeOrUniversity);
        studentData.setStudentPreviousCollegeOrUniversity(studentPreviousCollegeOrUniversity);
        studentData.setStudentCurrentlyEnrolledCourseworkList(studentCurrentlyEnrolledCoursework);
        studentData.setStudentMathematicsAndScienceCoursesCompletedList(studentMathematicsAndScienceCoursesCompleted);

        // Setting student Personal Statement
        studentPersonalStatementBAO.setUserId(userId);
        try {
            String[] str = studentPersonalStatement.getLocationOfFile().split("/");
            studentPersonalStatementBAO.setFileName(str[str.length - 1]);

        }
        catch(Exception e){
            LOGGER.error("Student Personal Statement is empty");
        }
        studentData.setStudentPersonalStatement(studentPersonalStatementBAO);
        studentData.setStudentFinalWaiver(studentFinalWaiver);

        return new ResponseEntity<>(studentData,HttpStatus.OK);

    }


}

