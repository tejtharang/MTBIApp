<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<style>
    .container{
        padding-top: 30px;
    }

    .pad{
        padding-top: 30px;
        padding-bottom : 30px;
    }
</style>

<body>
<div class="container">
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Student Name
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    First Name
                </div>
                <div class="col-md-4">
                ${(name.firstName)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Last Name
                </div>
                <div class="col-md-4">
                ${(name.lastName)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Middle Name
                </div>
                <div class="col-md-4">
                ${(name.middleName)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Suffix
                </div>
                <div class="col-md-4">
                ${(name.suffix)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Student Eligibility
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    I am currently an undergraduate student enrolled in my sophomore or junior year
                </div>
                <div class="col-md-4">
                ${(eligibility.eligibility1)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    I am majoring in Mathematics, Biology, or related STEM field
                </div>
                <div class="col-md-4">
                ${(eligibility.eligibility2)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    I have completed at least two courses in calculus
                </div>
                <div class="col-md-4">
                ${(eligibility.eligibility3)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>

    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Home Address and Phone
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Country
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.country)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Address line 1
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.addressLine1)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Address Line 2
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.addressLine2)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    City
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.city)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    State
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.state)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Zip
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.zip)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Mail Receivable at this address
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.mailReceivable)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Home Phone
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.homePhone)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Mobile Phone
                </div>
                <div class="col-md-4">
                ${(studentHomeAddressAndPhone.mobilePhone)!""}
                </div>
            </div>

        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Academic Address and Phone
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Country
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.country)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Address line 1
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.addressLine1)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Address Line 2
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.addressLine2)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    City
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.city)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    State
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.state)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Zip
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.zip)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Mail Receivable at this address
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.mailReceivable)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Home Phone
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.homePhone)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Mobile Phone
                </div>
                <div class="col-md-4">
                ${(studentAcademicYearAddressAndPhone.mobilePhone)!""}
                </div>
            </div>

        </div>
    </div>

    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Personal Information
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Date of Birth
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.dateOfBirth)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    City of Birth
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.cityOfBirth)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    State of Birth
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.stateOfBirth)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Country of Birth
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.countryOfBirth)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Gender
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.gender)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Race
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.race)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    U.S. Citizenship
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.usCitizenship)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Residing in the U.S.
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.residingInUS)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Visa status
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.visaStatus)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    First Generation to attend college
                </div>
                <div class="col-md-4">
                ${(studentPersonalInfo.firstGenerationToAttendCollege)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Student's affiliation with ASU
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    MTBI previous participation
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.mtbiPreviousParticipation)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    MTBI previous participation date
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.mtbiParticipationDate)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    JBMSHP previous participation
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.jbmshpPreviousParticipation)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    JBMSHP previous participation date
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.jbmshpParticipationDate)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Has the student applied to any other graduate programs
                </div>
                <div class="col-md-4">
                    ${(studentASUAffiliation.graduateProgramApplication)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Name of the graduate program applied to
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.nameOfGraduateProgram)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Does the student have a faculty referral
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.facultyReferral)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Referrer's name
                </div>
                <div class="col-md-4">
                ${(studentASUAffiliation.referrerName)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Student's Knowledge of MTBI
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    How does the student know of MTBI?
                </div>
                <div class="col-md-4">
                ${(studentKnowledgeOfMtbi.knowledgeOfMtbi)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Education
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Major
                </div>
                <div class="col-md-4">
                ${(studentEducation.major)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Minor
                </div>
                <div class="col-md-4">
                ${(studentEducation.minor)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Minor
                </div>
                <div class="col-md-4">
                ${(studentEducation.minor)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Last date of class
                </div>
                <div class="col-md-4">
                ${(studentEducation.lastDateOfClass)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Unweighted GPA
                </div>
                <div class="col-md-4">
                ${(studentEducation.unweightedGPA)!""}
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    GPA scale
                </div>
                <div class="col-md-4">
                ${(studentEducation.gpaScale)!""}
                </div>
            </div>


            <div class="row">
                <div class="col-md-6">
                    Current year of education
                </div>
                <div class="col-md-4">
                ${(studentEducation.currentEnrolledYear)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Estimated graduation date
                </div>
                <div class="col-md-4">
                ${(studentEducation.estimatedGraduationDate)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Does the student possess any extra degrees
                </div>
                <div class="col-md-4">
                ${(studentEducation.extraDegrees)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Extra degrees list
                </div>
                <div class="col-md-4">
                ${(studentEducation.extraDegreesList)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Awards
                </div>
                <div class="col-md-4">
                ${(studentEducation.awards)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recent Math or Science experiences
                </div>
                <div class="col-md-4">
                ${(studentEducation.mathOrSciExperiences)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Current college or university
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Name of College/University
                </div>
                <div class="col-md-4">
                ${(studentCurrentCollegeOrUniversity.collegeOrUniversity)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    City
                </div>
                <div class="col-md-4">
                ${(studentCurrentCollegeOrUniversity.city)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    State/Province
                </div>
                <div class="col-md-4">
                ${(studentCurrentCollegeOrUniversity.state)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Country
                </div>
                <div class="col-md-4">
                ${(studentCurrentCollegeOrUniversity.country)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Graduation date
                </div>
                <div class="col-md-4">
                ${(studentCurrentCollegeOrUniversity.graduationDate)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Previous college or university
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Name of College/University
                </div>
                <div class="col-md-4">
                ${(studentPreviousCollegeOrUniversity.collegeOrUniversity)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    City
                </div>
                <div class="col-md-4">
                ${(studentPreviousCollegeOrUniversity.city)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    State/Province
                </div>
                <div class="col-md-4">
                ${(studentPreviousCollegeOrUniversity.state)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Country
                </div>
                <div class="col-md-4">
                ${(studentPreviousCollegeOrUniversity.country)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Graduation date
                </div>
                <div class="col-md-4">
                ${(studentPreviousCollegeOrUniversity.graduationDate)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Currently Enrolled Courses
                </div>
            </div>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Year</th>
                    <th scope="col">Course title</th>
                    <th scope="col">College or University</th>
                </tr>
                </thead>
                <tbody>
                <#list studentCurrentlyEnrolledCoursework as course>
                <tr>
                    <th scope="row">${(course?index + 1)!""}</th>

                    <td>${(course.semester)!""}</td>
                    <td>${(course.year)!""}</td>
                    <td>${(course.courseTitle)!""}</td>
                    <td>${(course.collegeOrUniversity)!""}</td>

                </tr>
                </#list>

                </tbody>
            </table>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Mathematics and Science courses completed
                </div>
            </div>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Semester</th>
                    <th scope="col">Year</th>
                    <th scope="col">Course title</th>
                    <th scope="col">Grade</th>
                    <th scope="col">College or University</th>
                </tr>
                </thead>
                <tbody>
                <#list studentMathematicsAndScienceCoursesCompleted as course>
                <tr>
                    <th scope="row">${(course?index + 1)!""}</th>

                    <td>${(course.semester)!""}</td>
                    <td>${(course.year)!""}</td>
                    <td>${(course.courseTitle)!""}</td>
                    <td>${(course.grade)!""}</td>
                    <td>${(course.collegeOrUniversity)!""}</td>

                </tr>
                </#list>

                </tbody>
            </table>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Personal Statement
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    The student's personal statement is available for download at this link
                </div>
                <div class="col-md-4">
                    <a href="/personalStatement/${(name.getUserId())!""}" target="_blank">Download</a>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="panel panel-info pad">
        <div class="panel-body">
            <div class="row">
                <div class="h3">
                    Waivers and Faculty Recommendation
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    The student waives his/her right of access to this recommendation form under the family educational rights and privacy act of 1974, 20 U.S.C.A par 1232(G)(1). I understand that this form will be used by the institute solely in its procedures relating to acceptance.

                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.waiveOrNot)!""}
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    Recommender name
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderName)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recommender Position
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderPosition)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recommender Title
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderTitle)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recommender Company
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderCompany)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recommender Address
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderAddress)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recommender Email
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderEmail)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    Recommender Phone
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderPhone)!""}
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    Recommender Fax
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.recommenderFax)!""}
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <b>Acknowledgement 1</b> -
                    I understand that upon submission of this application, my faculty recommender will be sent an automated email requesting the submission of a Letter of Recommendation form and a Letter of Recommendation on the applicant's behalf.

                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.acknowledgement1)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <b>Acknowledgement 2 </b>-
                    I understand that it is my responsibility to inform my Faculty Recommender that he/she will receiving an automated email with instructions, once I submit my application
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.acknowledgement2)!""}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <b>Acknowledgement 3 </b>-
                    I understand that it is my responsibility to ensure that my Faculty Recommender has indeed received the automated email mentioned above and if not, I understand that it is my responsibility to provide my faculty recommender with instructions and the faculty letter of recommendation form
                </div>
                <div class="col-md-4">
                ${(studentFinalWaiver.acknowledgement3)!""}
                </div>
            </div>
        </div>
    </div>
    <hr>


</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script>
    function openStudentPersonalStatement(){
        $.ajax({
            url
        })
    ${(username)!""}
    }
</script>
</body>

</html>