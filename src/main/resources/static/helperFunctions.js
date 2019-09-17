var username;
function showHomeAddressDiv() {
    var countrySelectElement = document.getElementById("countryHome");
    //var countryCode = countrySelectElement.options[countrySelectElement.selectedIndex].value;
    var countryCode = countrySelectElement.value;
    if (countryCode == "USA") {
        console.log(1);
        $('#USAAddressHome').find('*').attr('disabled', false);
        $("#USAAddressHome").show();
        $("#USAAddressHome").prop('disabled', false);
        $("#USAAddressHome").children().prop('disabled', false);
        $("#ForeignAddressHome").hide();
        $("#ForeignAddressHome").prop('disabled', true);
        $("#ForeignAddressHome").children().prop('disabled', true);
        $('#ForeignAddressHome').find('*').attr('disabled', true);
    }
    else if (countryCode == ""){
        console.log(2);
    }
    else {
        console.log(0);
        $('#ForeignAddressHome').find('*').attr('disabled', false);
        $("#ForeignAddressHome").show();
        $("#ForeignAddressHome").prop('disabled', false);
        $("#ForeignAddressHome").children().prop('disabled', false);
        $("#USAAddressHome").hide();
        $("#USAAddressHome").prop('disabled', true);
        $("#USAAddressHome").children().prop('disabled', true);
        $('#USAAddressHome').find('*').attr('disabled', true);


    }
}

function showAcademicAddressDiv() {
    var countrySelectElement = document.getElementById("countryAcademic");
    //var countryCode = countrySelectElement.options[countrySelectElement.selectedIndex].value;
    var countryCode = countrySelectElement.value;
    if (countryCode == "USA") {
        console.log(1);
        $("#ForeignAddressAcademic").hide();
        $("#ForeignAddressAcademic").prop('disabled', true);
        $("#ForeignAddressAcademic").children().prop('disabled', true);
        $('#ForeignAddressAcademic').find('*').attr('disabled', true);
        $('#USAAddressAcademic').find('*').attr('disabled', false);
        $("#USAAddressAcademic").show();
        $("#USAAddressAcademic").prop('disabled', false);
        $("#USAAddressAcademic").children().prop('disabled', false);

    }
    else if(countryCode == ""){
        console.log(2);
    }
    else {
        console.log(0);
        $("#USAAddressAcademic").hide();
        $("#USAAddressAcademic").prop('disabled', true);
        $("#USAAddressAcademic").children().prop('disabled', true);
        $('#USAAddressAcademic').find('*').attr('disabled', true);
        $('#ForeignAddressAcademic').find('*').attr('disabled', false);
        $("#ForeignAddressAcademic").show();
        $("#ForeignAddressAcademic").prop('disabled', false);
        $("#ForeignAddressAcademic").children().prop('disabled', false);

    }
}

function showUSCitizenshipQuestion() {
    if (document.getElementById("notUsCitizen").checked) {
        $('#currentlyResidingInUs').show();
        $('#currentlyResidingInUs').prop('disabled', false);
        $('#currentlyResidingInUs').children().prop('disabled', false);
    }
    else {
        $('#currentlyResidingInUs').hide();
        $('#currentlyResidingInUs').prop('disabled', true);
        $('#currentlyResidingInUs').children().prop('disabled', true);
    }
}

function showVisaStatusQuestion() {
    if (document.getElementById("residingInUs").checked) {
        $('#visaStatusDiv').show();
        $('#visaStatusDiv').prop('disabled', false);
        $('#visaStatusDiv').children().prop('disabled', false);
    }
    else {
        $('#visaStatusDiv').hide();
        $('#visaStatusDiv').prop('disabled', true);
        $('#visaStatusDiv').children().prop('disabled', true);
    }
}

function MTBIParticipationDivShow() {
    if (document.getElementById("mtbiPreviousParticipation").checked) {
        $('#mtbiParticipationDiv').show();
        $('#mtbiParticipationDiv').prop('disabled', false);
        $('#mtbiParticipationDiv').children().prop('disabled', false);
    }
    else {
        $('#mtbiParticipationDiv').hide();
        $('#mtbiParticipationDiv').prop('disabled', true);
        $('#mtbiParticipationDiv').children().prop('disabled', true);
    }
}

function JBMSHPParticipationDivShow() {
    if (document.getElementById("JBMSHPPreviousParticipation").checked) {
        $('#JBMSHPParticipationDiv').show();
        $('#JBMSHPParticipationDiv').prop('disabled', false);
        $('#JBMSHPParticipationDiv').children().prop('disabled', false);
    }
    else {
        $('#JBMSHPParticipationDiv').hide();
        $('#JBMSHPParticipationDiv').prop('disabled', true);
        $('#JBMSHPParticipationDiv').children().prop('disabled', true);
    }
}

function graduateProgramApplicationDivShow() {
    if (document.getElementById("graduateProgramApplication").checked) {
        $('#graduateProgramApplicationDiv').show();
        $('#graduateProgramApplicationDiv').prop('disabled', false);
        $('#graduateProgramApplicationDiv').children().prop('disabled', false);
    }
    else {
        $('#graduateProgramApplicationDiv').hide();
        $('#graduateProgramApplicationDiv').prop('disabled', true);
        $('#graduateProgramApplicationDiv').children().prop('disabled', true);
    }
}

function facultyMemberNameApplicationDivShow() {
    if (document.getElementById("referral").checked) {
        $('#facultyMemberNameApplicationDiv').show();
        $('#facultyMemberNameApplicationDiv').prop('disabled', false);
        $('#facultyMemberNameApplicationDiv').children().prop('disabled', false);
    }
    else {
        $('#facultyMemberNameApplicationDiv').hide();
        $('#facultyMemberNameApplicationDiv').prop('disabled', true);
        $('#facultyMemberNameApplicationDiv').children().prop('disabled', true);

    }
}

function revealExtraDegrees() {
    if (document.getElementById("extraDegreesYes").checked) {
        $("#extraDegreesDiv").show();
        $("#extraDegreesDiv").prop('disabled', false);
        $("#extraDegreesDiv").children().prop('disabled', false);
    }
    else {
        $('#extraDegreesDiv').hide();
        $('#extraDegreesDiv').prop('disabled', true);
        $('#extraDegreesDiv').children().prop('disabled', true);
    }
}
function getTemplateRow(templateRow) {
    var x = document.getElementById(templateRow).cloneNode(true);

    x.id = "";
    x.style.display = "";
    return x;
}
function addRow(tableName) {
    var templateRow = ""
    var rowLimit = 0
    if (tableName === "currentlyEnrolledCoursesTable") {
        templateRow = "templateRowMathSciCurrentlyEnrolled";
        rowLimit = 7;
    }
    if (tableName === "mathCoursesCompletedTable") {
        templateRow = "templateRowMathCoursesCompleted";
        rowLimit = 16;
    }
    if (tableName === "sciCoursesCompletedTable") {
        templateRow = "templateRowSciCoursesCompleted";
        rowLimit = 16;
    }

    if (tableName == "currentlyEnrolledCoursesTableReview"){
        console.log("template row is test table");
        templateRow = "templateRowMathSciCurrentlyEnrolledReview";
        rowLimit = 100;
    }

    if (tableName == "mathCoursesCompletedTableReview"){
        templateRow = "templateRowMathCoursesCompletedReview";
        rowLimit = 100;
    }

    if (tableName == "sciCoursesCompletedTableReview"){
        templateRow = "templateRowSciCoursesCompletedReview";
        rowLimit = 100;
    }

    var t = document.getElementById(tableName);
    var rows = t.getElementsByTagName("tr");
    var r = rows[rows.length - 1];
    if (rows.length < rowLimit) {
        console.log(getTemplateRow(templateRow))
        r.parentNode.insertBefore(getTemplateRow(templateRow), r.nextSibling);

    }

    emptyLastAddedRow(t);
}

function deleteRow(tableName, row) {
    var i = row.parentNode.parentNode.rowIndex;
    console.log("deleteRowHere");
    console.log(i);
    if(i!= 1){
        var t = document.getElementById(tableName);
        t.deleteRow(i);
        //changeRowNumbers(t);
    }
}

function emptyLastAddedRow(t) {
    console.log("enters");
    var rows = t.getElementsByTagName("tr");
    if(rows.length > 1){
        var lastrow = rows[rows.length -1];
        for (var i = 0; i < lastrow.cells.length; i++) {
            console.log(i);
            lastrow.cells[i].children[0].value = "";
            console.log(lastrow.cells[i].children[0].value);
        }
    }


}

var x = document.getElementsByTagName("label");
var i = 0;
for(i=0;i<x.length;i++){
    x[i].className = "control-label";
}

var fullfile;
var openfile = function(event){
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function(){
        fullfile = reader.result;

    }
    reader.readAsDataURL(input.files[0]);
}

var currentTab = 0; // Current tab is set to be the first tab (0)
//; // Display the current tab

function highlightTabNumber(tabNumber){

    var id = "tab" + tabNumber;
    console.log(id);

    for(var i=0;i<8;i++){
        var iit = "tab" + tabNumber;
        if( (i + 1) != tabNumber){
            document.getElementById(String(iit)).style.color = "black";
        }
    }
    document.getElementById(String(id)).style.color = "red";
}
function showTab(tabnumber) {
    // This function will display the specified tab of the form ...

    if(tabnumber == 7) {
        showReview();
    }
    var x = document.getElementsByClassName("tab");
    console.log(x.item(6));
    x[tabnumber].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (tabnumber == 0) {
        console.log("prev btn set to none");
        document.getElementById("prevBtn").style.display = "none";
        console.log("submit btn set to none");
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("nextBtn").innerText = "Start Application";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("nextBtn").innerText = "Save and Continue";
    }
    if (tabnumber == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("saveAndExit").style.display = "none";
        document.getElementById("submitBtn").style.display = "inline";
    } else {

        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("saveAndExit").style.display = "inline";
        document.getElementById("submitBtn").style.display = "none";
    }

    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(tabnumber)
}


function nextPrev(n) {
    saveform();
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    //if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
    $("body").scrollTop(0);
}

/*

$.fn.serializeObject = function() {d
    var o = Object.create(null),
        elementMapper = function(element) {
            element.name = $.camelCase(element.name);
            return element;
        },
        appendToResult = function(i, element) {
            var node = o[element.name];

            if ('undefined' != typeof node && node !== null) {
                o[element.name] = node.push ? node.push(element.value) : [node, element.value];
            } else {
                o[element.name] = element.value;
            }
        };

    $.each($.map(this.serializeArray(), elementMapper), appendToResult);
    return o;
};

*/



function saveform(){

    var eligibility1 = "no";
    var eligibility2 = "no";
    var eligibility3 = "no";
    if(document.getElementById("eligibility1").checked){
        eligibility1 = "yes";
    }
    if(document.getElementById("eligibility2").checked){
        eligibility2 = "yes";
    }
    if(document.getElementById("eligibility3").checked){
        eligibility3 = "yes";
    }
    var studentEligibility = {
        "userId" : username,
        "eligibility1" : eligibility1,
        "eligibility2" : eligibility2,
        "eligibility3" : eligibility3
    };

    var studentName = {
        "userId" : username,
        "firstName" : document.getElementById("firstName").value,
        "middleName" : document.getElementById("middleName").value,
        "lastName" : document.getElementById("lastName").value,
        "suffix" : document.getElementById("suffix").value
    };

    var studentHomeAddressAndPhone = {
        "userId" : username,
        "country" : document.getElementById("countryHome").value,
        "addressLine1": document.getElementById("address1Home").value,
        "addressLine2": document.getElementById("address2Home").value,
        "city" : document.getElementById("cityHome").value,
        "state" : document.getElementById("stateHome").value,
        "zip" : document.getElementById("zipHome").value,
        "mailReceivable" : document.getElementById("mailAddressCheckHome").value,
        "homePhone" : document.getElementById("homePhoneHome").value,
        "mobilePhone" : document.getElementById("mobilePhoneHome").value
    };


    var studentAcademicYearAddressAndPhone = {
        "userId" : username,
        "country": document.getElementById("countryAcademic").value,
        "addressLine1" : document.getElementById("address1Academic").value,
        "addressLine2" : document.getElementById("address2Academic").value,
        "city"  : document.getElementById("cityAcademic").value,
        "state" : document.getElementById("stateAcademic").value,
        "zip" : document.getElementById("zipAcademic").value,
        "mailReceivable" : document.getElementById("mailAddressCheckAcademic").value,
        "homePhone" : document.getElementById("homePhoneAcademic").value,
        "mobilePhone" : document.getElementById("mobilePhoneAcademic").value
    };


    var gender = "";
    if(document.getElementById("male").checked){
        gender="male";
    }
    if(document.getElementById("female").checked){
        gender="female";
    }

    var Race = [];
    var elements = document.getElementsByName("race[]");
    console.log(elements);
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked){
            console.log(elements[i].value);
            Race.push(elements[i].value);
        }
    }

    var race = Race.join();

    var usCitizenship = "yes";
    if(document.getElementById("notUsCitizen").checked){
        usCitizenship = "no";
    }

    var residingInUs = "yes";
    if(document.getElementById("notResidingInUs").checked){
        residingInUs = "no";
    }

    var firstGenerationToAttendCollege = "no";
    if(document.getElementById("firstGeneration").checked){
        firstGenerationToAttendCollege = "yes";
    }



    var studentPersonalInfo = {
        "userId" : username,
        "dateOfBirth" : document.getElementById("dob").value,
        "cityOfBirth" : document.getElementById("cityDob").value,
        "stateOfBirth": document.getElementById("stateDob").value,
        "countryOfBirth" : document.getElementById("countryDob").value,
        "gender" : gender,
        "race" : race,
        "usCitizenship" : usCitizenship,
        "residingInUS" : residingInUs,
        "visaStatus" : document.getElementById("visaStatus").value,
        "firstGenerationToAttendCollege" : firstGenerationToAttendCollege
    };


    var MTBI = "no";
    if(document.getElementById("mtbiPreviousParticipation").checked){
        MTBI = "yes";
    }

    var JBMSHP = "no";
    if(document.getElementById("JBMSHPPreviousParticipation").checked){
        JBMSHP = "yes";
    }


    var graduateProgramApplication = "no";
    if(document.getElementById("graduateProgramApplication").checked){
        graduateProgramApplication = "yes";
    }

    var referral = "no";
    if(document.getElementById("referral").checked){
        referral = "yes";
    }

    var studentASUAffiliation = {
        "userId" : username,
        "mtbiPreviousParticipation" : MTBI,
        "mtbiParticipationDate" : document.getElementById("mtbiParticipationDate").value,
        "jbmshpPreviousParticipation" : JBMSHP,
        "jbmshpParticipationDate" : document.getElementById("JBMSHPParticipationDate").value,
        "graduateProgramApplication" : graduateProgramApplication,
        "nameOfGraduateProgram" : document.getElementById("nameOfGraduateProgramAppliedTo").value,
        "facultyReferral" : referral,
        "referrerName" : document.getElementById("ASUFacultyMemberName").value
    };

    var studentKnowledgeOfMtbi = {
        "userId" : username,
        "knowledgeOfMtbi" : document.getElementById("heardOfMtbi").value
    };

    var currentOrMostRecentCollegeOrUniversity = {
        "userId" : username,
        "country" : document.getElementById("countryCollege").value,
        "state" : document.getElementById("collegeState").value,
        "city" : document.getElementById("collegeCity").value,
        "collegeOrUniversity" : document.getElementById("collegeName").value,
        "graduationDate" : document.getElementById("collegeGraduationDate").value
    };

    var previousCollegeOrUniversity = {
        "userId" : username,
        "country" : document.getElementById("prevcountryCollege").value,
        "state" : document.getElementById("prevcollegeState").value,
        "city" : document.getElementById("prevcollegeCity").value,
        "collegeOrUniversity" : document.getElementById("prevcollegeName").value,
        "graduationDate" : document.getElementById("prevcollegeGraduationDate").value
    };

    var extraDegrees = "no";
    if(document.getElementById("extraDegreesYes").checked){
        extraDegrees = "yes";
    }
    var extraDegreesList = "";
    if(extraDegrees){
        extraDegreesList = document.getElementById("extraDegreesList").value;
    }
    var education = {
        "userId" : username,
        "major" : document.getElementById("major").value,
        "minor" : document.getElementById("minor").value,
        "lastDateOfClass" : document.getElementById("lastDayOfClass").value,
        "unweightedGPA" : document.getElementById("unweightedGPA").value,
        "gpaScale" : document.getElementById("GPAScale").value,
        "currentEnrolledYear" : document.getElementById("currentYear").value,
        "extraDegrees" : extraDegrees,
        "awards" : document.getElementById("awards").value,
        "mathOrSciExperiences" : document.getElementById("experiences").value,
        "extraDegreesList" : extraDegreesList

    };


    // todo : adding coursework
    var studentCurrentlyEnrolledCourseworkList = [];
    var currentlyEnrolledCoursesTable = document.getElementById("currentlyEnrolledCoursesTable");
    for(var i=1, row ; row = currentlyEnrolledCoursesTable.rows[i]; i++){
        var tableRow = {};
        tableRow["userId"] = username;
        tableRow["courseNumber"] = row.cells[0].children[0].value;
        tableRow["semester"] = row.cells[1].children[0].value;
        tableRow["year"] = row.cells[2].children[0].value;
        tableRow["courseTitle"] = row.cells[3].children[0].value;
        tableRow["collegeOrUniversity"] = row.cells[4].children[0].value;
        studentCurrentlyEnrolledCourseworkList.push(tableRow);
    }



    var studentMathematicsAndScienceCoursesCompletedList = [];

    var mathCoursesCompletedTable = document.getElementById("mathCoursesCompletedTable");
    for(var i=1, row ; row = mathCoursesCompletedTable.rows[i]; i++){
        var tableRow = {};
        tableRow["userId"] = username;
        tableRow["courseNumber"] = row.cells[0].children[0].value;
        tableRow["semester"] = row.cells[1].children[0].value;
        tableRow["year"] = row.cells[2].children[0].value;
        tableRow["courseTitle"] = row.cells[3].children[0].value + "_MAT";
        tableRow["grade"] = row.cells[4].children[0].value;
        tableRow["collegeOrUniversity"] = row.cells[5].children[0].value;
        studentMathematicsAndScienceCoursesCompletedList.push(tableRow);

    }

    var sciCoursesCompletedTable = document.getElementById("sciCoursesCompletedTable");
    for(var i=1, row ; row = sciCoursesCompletedTable.rows[i]; i++){
        var tableRow = {};
        tableRow["userId"] = username;
        tableRow["courseNumber"] = row.cells[0].children[0].value;
        tableRow["semester"] = row.cells[1].children[0].value;
        tableRow["year"] = row.cells[2].children[0].value;
        tableRow["courseTitle"] = row.cells[3].children[0].value + "_SCI";
        tableRow["grade"] = row.cells[4].children[0].value;
        tableRow["collegeOrUniversity"] = row.cells[5].children[0].value;
        studentMathematicsAndScienceCoursesCompletedList.push(tableRow);
    }


    var studentPersonalStatementBAO = {};

    studentPersonalStatementBAO["userId"] = username;
    if(document.getElementById("personalStatement").files.length >0) {
        studentPersonalStatementBAO["fileName"] = document.getElementById("personalStatement").files[0].name;
        studentPersonalStatementBAO["bytes"] = fullfile;
    }
    var waiveOrNot = "yes";
    if(document.getElementById("notWaived").checked){
        waiveOrNot = "no";
    }
    var acknowledgement1 = "no";
    var acknowledgement2 = "no";
    var acknowledgement3 = "no";
    if(document.getElementById("acknowledgement1").checked){
        acknowledgement1 = "yes";
    }
    if(document.getElementById("acknowledgement2").checked){
        acknowledgement2 = "yes";
    }
    if(document.getElementById("acknowledgement3").checked){
        acknowledgement3 = "yes";
    }

    var studentFinalWaiver = {
        "userId" : username,
        "name" : document.getElementById("nameOfApplicant").value,
        "waiveOrNot" : waiveOrNot,
        "recommenderName" : document.getElementById("recommenderFullName").value,
        "recommenderPosition" : document.getElementById("recommenderPosition").value,
        "recommenderCompany" : document.getElementById("recommenderCompany").value,
        "recommenderAddress" : document.getElementById("recommenderAddress").value,
        "recommenderEmail" : document.getElementById("recommenderEmail").value,
        "recommenderPhone" : document.getElementById("recommenderNumber").value,
        "recommenderFax" : document.getElementById("recommenderFax").value,
        "acknowledgement1" : acknowledgement1,
        "acknowledgement2" : acknowledgement2,
        "acknowledgement3" : acknowledgement3

    }


    var formData = {
        "userId" : username,
        "studentName" : studentName,
        "studentEligibility" : studentEligibility,
        "studentHomeAddressAndPhone" : studentHomeAddressAndPhone,
        "studentAcademicYearAddressAndPhone" : studentAcademicYearAddressAndPhone,
        "studentPersonalInfo" : studentPersonalInfo,
        "studentASUAffiliation" : studentASUAffiliation,
        "studentKnowledgeOfMtbi" : studentKnowledgeOfMtbi,
        "studentEducation" : education,
        "studentCurrentCollegeOrUniversity" : currentOrMostRecentCollegeOrUniversity,
        "studentPreviousCollegeOrUniversity" : previousCollegeOrUniversity,
        "studentCurrentlyEnrolledCourseworkList" : studentCurrentlyEnrolledCourseworkList,
        "studentMathematicsAndScienceCoursesCompletedList" : studentMathematicsAndScienceCoursesCompletedList,
        "studentPersonalStatementBAO" : studentPersonalStatementBAO,
        "studentFinalWaiver" : studentFinalWaiver

    };

    console.log(formData);

        $.ajax({
            url: '/save',
            type: 'post',
            data: JSON.stringify(formData),
            datatype: 'json',
            contentType: 'application/json',
            success: function () {
                alert("Successfully saved changes");
            }
        });

}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

function checkRequired(list){

    for(var i=0;i<list.length;i++) {
        if(document.getElementById(list[i]).value == ""){
            console.log(document.getElementById(list[i]).value);
            return true;
        }
    }

    return false;
}

function checkRequiredForAddress(list){
    for(var i=0;i<list.length;i++) {
        if(document.getElementById(list[i]).innerText == ""){
            console.log(document.getElementById(list[i]).innerText);
            return true;
        }
    }
    return false;
}

function submitform(){
    var flags = [];
    var flag = "";
    var eligibility1 = "no";
    var eligibility2 = "no";
    var eligibility3 = "no";
    if(document.getElementById("eligibility1").checked){
        eligibility1 = "yes";
    }

    if(document.getElementById("eligibility2").checked){
        eligibility2 = "yes";
    }

    if(document.getElementById("eligibility3").checked){
        eligibility3 = "yes";
    }

    var studentEligibility = {
        "userId" : username,
        "eligibility1" : eligibility1,
        "eligibility2" : eligibility2,
        "eligibility3" : eligibility3
    };
    var requiredlistStudentName = ["firstName","lastName"];
    if(checkRequired(requiredlistStudentName)){
        flag = "Student Name section incomplete";
        console.log(flag);
    }
    var studentName = {
        "userId" : username,
        "firstName" : document.getElementById("firstName").value,
        "middleName" : document.getElementById("middleName").value,
        "lastName" : document.getElementById("lastName").value,
        "suffix" : document.getElementById("suffix").value
    };

    var requiredlistStudentHomeAddressAndPhone = ["countryHomeReview","address1HomeReview","cityHomeReview","stateHomeReview","zipHomeReview"];
    if(checkRequiredForAddress(requiredlistStudentHomeAddressAndPhone)){
        flag = "Home Address and Phone section incomplete";
        console.log(flag);
    }
    var studentHomeAddressAndPhone = {
        "userId" : username,
        "country" : document.getElementById("countryHomeReview").innerText,
        "addressLine1": document.getElementById("address1HomeReview").innerText,
        "addressLine2": document.getElementById("address2HomeReview").innerText,
        "city" : document.getElementById("cityHomeReview").innerText,
        "state" : document.getElementById("stateHomeReview").innerText,
        "zip" : document.getElementById("zipHomeReview").innerText,
        "mailReceivable" : document.getElementById("mailAddressCheckHome").innerText,
        "homePhone" : document.getElementById("homePhoneHome").innerText,
        "mobilePhone" : document.getElementById("mobilePhoneHome").innerText
    };

    var requiredListStudentAcademicYearAddressAndPhone = ["countryAcademicReview","address1AcademicReview","cityAcademicReview","stateAcademicReview","zipAcademicReview"];
    //flags.push(checkRequired(requiredListStudentAcademicYearAddressAndPhone,"Academic Address and Phone section incomplete"));
    if(checkRequiredForAddress(requiredListStudentAcademicYearAddressAndPhone)){
        flag = "Academic Address and Phone section incomplete";
        console.log(flag);
    }
    var studentAcademicYearAddressAndPhone = {
        "userId" : username,
        "country": document.getElementById("countryAcademic").value,
        "addressLine1" : document.getElementById("address1Academic").value,
        "addressLine2" : document.getElementById("address2Academic").value,
        "city"  : document.getElementById("cityAcademic").value,
        "state" : document.getElementById("stateAcademic").value,
        "zip" : document.getElementById("zipAcademic").value,
        "mailReceivable" : document.getElementById("mailAddressCheckAcademic").value,
        "homePhone" : document.getElementById("homePhoneAcademic").value,
        "mobilePhone" : document.getElementById("mobilePhoneAcademic").value
    };


    var gender = "";
    if(document.getElementById("male").checked){
        gender="male";
    }
    else if(document.getElementById("female").checked){
        gender="female";
    }
    else{
        flag = "Please select gender under Personal Information";
    }

    var Race = [];
    var elements = document.getElementsByName("race[]");
    console.log(elements);
    var myflag = true;
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked){
            console.log(elements[i].value);
            Race.push(elements[i].value);
            myflag = false;
        }
    }
    if(myflag)
    {
        flag = "Please select your race under Personal Information";
    }

    var race = Race.join();

    var requiredListUsCitizenship = ["usCitizen","notUsCitizen"];

    var usCitizenship = "yes";
    if(document.getElementById("notUsCitizen").checked){
        usCitizenship = "no";
    }
    else if(document.getElementById("usCitizen").checked){

    }
    else{
        flag = "Please indicate citizenship under Personal Information";
    }
    var residingInUs = "yes";
    if(document.getElementById("notResidingInUs").checked){
        residingInUs = "no";
    }

    var firstGenerationToAttendCollege = "no";
    if(document.getElementById("firstGeneration").checked){
        firstGenerationToAttendCollege = "yes";
    }
    else if (document.getElementById("notFirstGeneration").checked){

    }
    else{
        flag = "Please indicate if you are the first generation in your family to attend college.";
    }

    var requiredListStudentPersonalInfo = ["dob","cityDob","stateDob","countryDob"];
    //flags.push(checkRequired(requiredListStudentPersonalInfo,"Personal Information section incomplete"));
    if(checkRequired(requiredListStudentPersonalInfo)){
        flag = "Personal Information section incomplete";
        console.log(flag);
    }
    var studentPersonalInfo = {
        "userId" : username,
        "dateOfBirth" : document.getElementById("dob").value,
        "cityOfBirth" : document.getElementById("cityDob").value,
        "stateOfBirth": document.getElementById("stateDob").value,
        "countryOfBirth" : document.getElementById("countryDob").value,
        "gender" : gender,
        "race" : race,
        "usCitizenship" : usCitizenship,
        "residingInUS" : residingInUs,
        "visaStatus" : document.getElementById("visaStatus").value,
        "firstGenerationToAttendCollege" : firstGenerationToAttendCollege
    };


    var MTBI = "no";
    if(document.getElementById("mtbiPreviousParticipation").checked){
        MTBI = "yes";
    }

    var JBMSHP = "no";
    if(document.getElementById("JBMSHPPreviousParticipation").checked){
        JBMSHP = "yes";
    }


    var graduateProgramApplication = "no";
    if(document.getElementById("graduateProgramApplication").checked){
        graduateProgramApplication = "yes";
    }

    var referral = "no";
    if(document.getElementById("referral").checked){
        referral = "yes";
    }

    var studentASUAffiliation = {
        "userId" : username,
        "mtbiPreviousParticipation" : MTBI,
        "mtbiParticipationDate" : document.getElementById("mtbiParticipationDate").value,
        "jbmshpPreviousParticipation" : JBMSHP,
        "jbmshpParticipationDate" : document.getElementById("JBMSHPParticipationDate").value,
        "graduateProgramApplication" : graduateProgramApplication,
        "nameOfGraduateProgram" : document.getElementById("nameOfGraduateProgramAppliedTo").value,
        "facultyReferral" : referral,
        "referrerName" : document.getElementById("ASUFacultyMemberName").value
    };

    var requiredKnowledgeOfMtbiList = ["heardOfMtbi"];
    //flags.push(checkRequired(requiredKnowledgeOfMtbiList,"Knowledge of MTBI section incomplete"));
    if(checkRequired(requiredKnowledgeOfMtbiList)){
        flag = "Knowledge of MTBI section incomplete";
        console.log(flag);
    }
    var studentKnowledgeOfMtbi = {
        "userId" : username,
        "knowledgeOfMtbi" : document.getElementById("heardOfMtbi").value
    };


    var currentOrMostRecentCollegeOrUniversity = {
        "userId" : username,
        "country" : document.getElementById("countryCollege").value,
        "state" : document.getElementById("collegeState").value,
        "city" : document.getElementById("collegeCity").value,
        "collegeOrUniversity" : document.getElementById("collegeName").value,
        "graduationDate" : document.getElementById("collegeGraduationDate").value
    };

    var previousCollegeOrUniversity = {
        "userId" : username,
        "country" : document.getElementById("prevcountryCollege").value,
        "state" : document.getElementById("prevcollegeState").value,
        "city" : document.getElementById("prevcollegeCity").value,
        "collegeOrUniversity" : document.getElementById("prevcollegeName").value,
        "graduationDate" : document.getElementById("prevcollegeGraduationDate").value
    };

    var extraDegrees = "no";
    if(document.getElementById("extraDegreesYes").checked){
        extraDegrees = "yes";
    }
    else if(document.getElementById("extraDegreesNo").checked){

    }
    else{
        flag = "Please indicate if you have any extra degrees under Education.";
    }
    var extraDegreesList = "";
    if(extraDegrees){
        extraDegreesList = document.getElementById("extraDegreesList").value;
    }

    var requiredListEducation = ["major","minor","lastDayOfClass","unweightedGPA","GPAScale","currentYear","awards","experiences"];
    ///flags.push(checkRequired(requiredListEducation,"Student Education section incomplete"));
    if(checkRequired(requiredListEducation)){
        flag = "Education section incomplete";
        console.log(flag);
    }
    var education = {
        "userId" : username,
        "major" : document.getElementById("major").value,
        "minor" : document.getElementById("minor").value,
        "lastDateOfClass" : document.getElementById("lastDayOfClass").value,
        "unweightedGPA" : document.getElementById("unweightedGPA").value,
        "gpaScale" : document.getElementById("GPAScale").value,
        "currentEnrolledYear" : document.getElementById("currentYear").value,
        "extraDegrees" : extraDegrees,
        "awards" : document.getElementById("awards").value,
        "mathOrSciExperiences" : document.getElementById("experiences").value,
        "extraDegreesList" : extraDegreesList

    };


    // todo : adding coursework
    var studentCurrentlyEnrolledCourseworkList = [];
    var currentlyEnrolledCoursesTable = document.getElementById("currentlyEnrolledCoursesTable");
    for(var i=1, row ; row = currentlyEnrolledCoursesTable.rows[i]; i++){
        var tableRow = {};
        tableRow["userId"] = username;
        tableRow["courseNumber"] = row.cells[0].children[0].value;
        tableRow["semester"] = row.cells[1].children[0].value;
        tableRow["year"] = row.cells[2].children[0].value;
        tableRow["courseTitle"] = row.cells[3].children[0].value;
        tableRow["collegeOrUniversity"] = row.cells[4].children[0].value;
        studentCurrentlyEnrolledCourseworkList.push(tableRow);
    }



    var studentMathematicsAndScienceCoursesCompletedList = [];

    var mathCoursesCompletedTable = document.getElementById("mathCoursesCompletedTable");
    for(var i=1, row ; row = mathCoursesCompletedTable.rows[i]; i++){
        var tableRow = {};
        tableRow["userId"] = username;
        tableRow["courseNumber"] = row.cells[0].children[0].value;
        tableRow["semester"] = row.cells[1].children[0].value;
        tableRow["year"] = row.cells[2].children[0].value;
        tableRow["courseTitle"] = row.cells[3].children[0].value + "_MAT";
        tableRow["grade"] = row.cells[4].children[0].value;
        tableRow["collegeOrUniversity"] = row.cells[5].children[0].value;
        studentMathematicsAndScienceCoursesCompletedList.push(tableRow);

    }

    var sciCoursesCompletedTable = document.getElementById("sciCoursesCompletedTable");
    for(var i=1, row ; row = sciCoursesCompletedTable.rows[i]; i++){
        var tableRow = {};
        tableRow["userId"] = username;
        tableRow["courseNumber"] = row.cells[0].children[0].value;
        tableRow["semester"] = row.cells[1].children[0].value;
        tableRow["year"] = row.cells[2].children[0].value;
        tableRow["courseTitle"] = row.cells[3].children[0].value + "_SCI";
        tableRow["grade"] = row.cells[4].children[0].value;
        tableRow["collegeOrUniversity"] = row.cells[5].children[0].value;
        studentMathematicsAndScienceCoursesCompletedList.push(tableRow);
    }


    var studentPersonalStatementBAO = {};

    studentPersonalStatementBAO["userId"] = username;
    if(document.getElementById("personalStatement").files.length >0) {
        studentPersonalStatementBAO["fileName"] = document.getElementById("personalStatement").files[0].name;
        studentPersonalStatementBAO["bytes"] = fullfile;
    }


    var waiveOrNot = "yes";
    if(document.getElementById("notWaived").checked){
        waiveOrNot = "no";
    }
    var acknowledgement1 = "no";
    var acknowledgement2 = "no";
    var acknowledgement3 = "no";
    if(document.getElementById("acknowledgement1").checked){
        acknowledgement1 = "yes";
    }

    if(document.getElementById("acknowledgement2").checked){
        acknowledgement2 = "yes";
    }

    if(document.getElementById("acknowledgement3").checked){
        acknowledgement3 = "yes";
    }
    if(acknowledgement1 !="yes" || acknowledgement2 != "yes" || acknowledgement3 !="yes"){
        flag = "Please check the final acknowledgements!";
    }

    var facultyRecommendationList = ["recommenderFullName","recommenderPosition","recommenderEmail","recommenderAddress","recommenderNumber"]
    if(checkRequired(facultyRecommendationList)){
        flag = "Faculty Recommendation details incomplete";
        console.log(flag);
    }
    var studentFinalWaiver = {
        "userId" : username,
        "name" : document.getElementById("nameOfApplicant").value,
        "waiveOrNot" : waiveOrNot,
        "recommenderName" : document.getElementById("recommenderFullName").value,
        "recommenderPosition" : document.getElementById("recommenderPosition").value,
        "recommenderCompany" : document.getElementById("recommenderCompany").value,
        "recommenderAddress" : document.getElementById("recommenderAddress").value,
        "recommenderEmail" : document.getElementById("recommenderEmail").value,
        "recommenderPhone" : document.getElementById("recommenderNumber").value,
        "recommenderFax" : document.getElementById("recommenderFax").value,
        "acknowledgement1" : acknowledgement1,
        "acknowledgement2" : acknowledgement2,
        "acknowledgement3" : acknowledgement3

    }


    var formData = {
        "userId" : username,
        "studentName" : studentName,
        "studentEligibility" : studentEligibility,
        "studentHomeAddressAndPhone" : studentHomeAddressAndPhone,
        "studentAcademicYearAddressAndPhone" : studentAcademicYearAddressAndPhone,
        "studentPersonalInfo" : studentPersonalInfo,
        "studentASUAffiliation" : studentASUAffiliation,
        "studentKnowledgeOfMtbi" : studentKnowledgeOfMtbi,
        "studentEducation" : education,
        "studentCurrentCollegeOrUniversity" : currentOrMostRecentCollegeOrUniversity,
        "studentPreviousCollegeOrUniversity" : previousCollegeOrUniversity,
        "studentCurrentlyEnrolledCourseworkList" : studentCurrentlyEnrolledCourseworkList,
        "studentMathematicsAndScienceCoursesCompletedList" : studentMathematicsAndScienceCoursesCompletedList,
        "studentPersonalStatementBAO" : studentPersonalStatementBAO,
        "studentFinalWaiver" : studentFinalWaiver

    };

    console.log(formData);
    if(flag == "" && flags.length == 0) {
        console.log(flag);
        $.ajax({
            url: '/submit',
            type: 'post',
            data: JSON.stringify(formData),
            datatype: 'json',
            contentType: 'application/json',
            success: function () {
                alert("successfully submitted the form. You may now logout");
                window.location.href="/form_submitted";
            },
            error : function () {
                alert("Error occured. Please try again later. If the problem persists, please contact Rebecca Perlin at rebecca.perlin@asu.edu");
            }

        });
    }
    else{
        if(flag != "")
        alert(flag);
        if(flags.length != 0){
            alert(flag[0]);
        }
    }
}
function saveAndExit(){
    saveform();
    logout();
}
function logout(){
    $.ajax({
        url : '/signout',
        type : 'post',
        success : function(data){
            if(data == "no_error") {
                alert("Logged out successfully");
                window.location.href = "/welcome";
            }
        },
        error : function(data){
            alert("Error Occured Internally. Please try again");
        }
    })
}
var formDataRetrieved;
function retrieveUserData(username){
    var login = {
        "username" : username,
        "password" : ""
    }
    $.ajax({
        url : '/formdata',
        type : 'post',
        data : JSON.stringify(login),
        datatype : 'json',
        contentType : 'application/json',
        success : function(data) {
            console.log("internal 1");
            formDataRetrieved = data;
            console.log(formDataRetrieved);
            populate(formDataRetrieved);
            console.log("All data received");
        },
        error : function(data){
            alert("Error Occured Internally. Please try again");
        }

    });


}

function populate(data){
    // Eligibility
    var studentEligibility = data["studentEligibility"];
    if(studentEligibility["eligibility1"] != undefined && studentEligibility["eligibility1"] == "yes"){
        document.getElementById("eligibility1").click();
    }
    if(studentEligibility["eligibility2"] != undefined && studentEligibility["eligibility2"] == "yes"){
        document.getElementById("eligibility2").click();
    }
    if(studentEligibility["eligibility3"] != undefined && studentEligibility["eligibility3"] == "yes"){
        document.getElementById("eligibility3").click();
    }

    // Name
    var studentName = data["studentName"];
    document.getElementById("firstName").value = studentName["firstName"];
    document.getElementById("middleName").value = studentName["middleName"];
    document.getElementById("lastName").value = studentName["lastName"];
    document.getElementById("suffix").value = studentName["suffix"];

    // Home Address and Phone
    var studentHomeAddressAndPhone = data["studentHomeAddressAndPhone"];
    document.getElementById("countryHome").value = studentHomeAddressAndPhone["country"];
    document.getElementById("address1Home").value = studentHomeAddressAndPhone["addressLine1"];
    document.getElementById("address2Home").value = studentHomeAddressAndPhone["addressLine2"];
    document.getElementById("cityHome").value = studentHomeAddressAndPhone["city"];
    document.getElementById("stateHome").value = studentHomeAddressAndPhone["state"];
    document.getElementById("zipHome").value = studentHomeAddressAndPhone["zip"];
    document.getElementById("mailAddressCheckHome").value = studentHomeAddressAndPhone["mailReceivable"];
    document.getElementById("homePhoneHome").value = studentHomeAddressAndPhone["homePhone"];
    document.getElementById("mobilePhoneHome").value = studentHomeAddressAndPhone["mobilePhone"];

    // Academic year address and phone
    var studentAcademicYearAddressAndPhone = data["studentAcademicYearAddressAndPhone"];
    document.getElementById("countryAcademic").value = studentAcademicYearAddressAndPhone["country"];
    document.getElementById("address1Academic").value = studentAcademicYearAddressAndPhone["addressLine1"];
    document.getElementById("address2Academic").value = studentAcademicYearAddressAndPhone["addressLine2"];
    document.getElementById("cityAcademic").value = studentAcademicYearAddressAndPhone["city"];
    document.getElementById("stateAcademic").value = studentAcademicYearAddressAndPhone["state"];
    document.getElementById("zipAcademic").value = studentAcademicYearAddressAndPhone["zip"];
    document.getElementById("mailAddressCheckAcademic").value = studentAcademicYearAddressAndPhone["mailReceivable"];
    document.getElementById("homePhoneAcademic").value = studentAcademicYearAddressAndPhone["homePhone"];
    document.getElementById("mobilePhoneAcademic").value = studentAcademicYearAddressAndPhone["mobilePhone"];

    revealAddress(studentHomeAddressAndPhone["country"], studentAcademicYearAddressAndPhone["country"]);
    // Gender
    var studentPersonalInfo = data["studentPersonalInfo"];
    document.getElementById("dob").value = studentPersonalInfo["dateOfBirth"];
    document.getElementById("cityDob").value = studentPersonalInfo["cityOfBirth"];
    document.getElementById("stateDob").value = studentPersonalInfo["stateOfBirth"];
    document.getElementById("countryDob").value = studentPersonalInfo["countryOfBirth"];
    if(studentPersonalInfo["gender"] == "male") {
        document.getElementById("male").checked = true;
        document.getElementById("male").click();
    }
    if(studentPersonalInfo["gender"] == "female") {
        document.getElementById("female").checked = true;
        document.getElementById("female").click();
    }

    var races = studentPersonalInfo["race"].split(',');
    console.log("races is ");
    console.log(races.length);
    for(var i=0;i<races.length && races[i] != "";i++){
        //console.log(races[i]);
        //document.getElementById(String(races[i])).checked = true;

        if(races[i] == "American Indian / Alaska Native") {
            races[i] = "americanIndian";
        }
        if(races[i] == "Asian / Asian American") {
            races[i] = "asian";
        }
        if(races[i] == "Black / African American") {
            races[i] = "africanAmerican";
        }
        if(races[i] == "Hispanic / Latino(a) / Chicano(a)") {
            races[i] = "hispanic";
        }
        if(races[i] == "Native American or Other Pacific Islander") {
            races[i] = "hawaiian";
        }
        if(races[i] == "White Or Caucasian") {
            races[i] = "caucasian";
        }


        console.log("races :  " + races[i]);
        document.getElementById(String(races[i])).click();
        console.log(document.getElementById(races[i]));
    }

    // US Citizenship within personalInfo
    if(studentPersonalInfo["usCitizenship"] == "yes"){
        document.getElementById("usCitizen").checked = true;
        document.getElementById("usCitizen").click();
    }
    if(studentPersonalInfo["usCitizenship"] == "no"){
        document.getElementById("notUsCitizen").checked = true;
        document.getElementById("notUsCitizen").click();
    }

    // Residence in US within personal Info
    if(studentPersonalInfo["residingInUs"] == "yes"){
        document.getElementById("residingInUs").checked = true;
        document.getElementById("residingInUs").click();
    }
    else{
        document.getElementById("notResidingInUs").checked = true;
        document.getElementById("notResidingInUs").click();
    }

    // visa status within personal Info
    document.getElementById("visaStatus").value = studentPersonalInfo["visaStatus"];
    // first generation to attend college or university within student personal info
    if(studentPersonalInfo["firstGenerationToAttendCollege"] == "yes"){
        document.getElementById("firstGeneration").checked = true;
        document.getElementById("firstGeneration").click();
    }
    if(studentPersonalInfo["firstGenerationToAttendCollege"] == "no"){
        document.getElementById("notFirstGeneration").checked = true;
        document.getElementById("notFirstGeneration").click();
    }

    // STUDENT ASU Affiliation
    var studentASUAffiliation = data["studentASUAffiliation"];
    if(studentASUAffiliation != null) {
        if (studentASUAffiliation["mtbiPreviousParticipation"] == "yes") {
            console.log("MTBI Previous Participation Yes");
            document.getElementById("mtbiPreviousParticipation").click();
        }
        document.getElementById("mtbiParticipationDate").value = studentASUAffiliation["mtbiParticipationDate"];

        if (studentASUAffiliation["jbmshpPreviousParticipation"] == "yes") {
            document.getElementById("JBMSHPPreviousParticipation").click();
        }
        document.getElementById("JBMSHPParticipationDate").value = studentASUAffiliation["jbmshpParticipationDate"];
        if (studentASUAffiliation["graduateProgramApplication"] == "yes") {
            document.getElementById("graduateProgramApplication").click();
        }
        document.getElementById("nameOfGraduateProgramAppliedTo").value = studentASUAffiliation["nameOfGraduateProgram"];

        if (studentASUAffiliation["facultyReferral"] == "yes") {
            document.getElementById("referral").click();
        }
        document.getElementById("ASUFacultyMemberName").value = studentASUAffiliation["referrerName"];
    }
    // Knowledge of MTBI
    var studentKnowledgeOfMtbi = data["studentKnowledgeOfMtbi"];
    document.getElementById("heardOfMtbi").value = studentKnowledgeOfMtbi["knowledgeOfMtbi"];

    // Current Or Most Recent College Or University
    var currentOrMostRecentCollegeOrUniversity = data["studentCurrentCollegeOrUniversity"];
    if(currentOrMostRecentCollegeOrUniversity != null) {
        document.getElementById("countryCollege").value = currentOrMostRecentCollegeOrUniversity["country"];
        document.getElementById("collegeState").value = currentOrMostRecentCollegeOrUniversity["state"];
        document.getElementById("collegeCity").value = currentOrMostRecentCollegeOrUniversity["city"];
        document.getElementById("collegeName").value = currentOrMostRecentCollegeOrUniversity["collegeOrUniversity"];
        document.getElementById("collegeGraduationDate").value = currentOrMostRecentCollegeOrUniversity["graduationDate"];

    }
    // Previous College or university
    var previousCollegeOrUniversity = data["studentPreviousCollegeOrUniversity"];
    if(previousCollegeOrUniversity != null) {
        document.getElementById("prevcountryCollege").value = currentOrMostRecentCollegeOrUniversity["country"];
        document.getElementById("prevcollegeState").value = currentOrMostRecentCollegeOrUniversity["state"];
        document.getElementById("prevcollegeCity").value = currentOrMostRecentCollegeOrUniversity["city"];
        document.getElementById("prevcollegeName").value = currentOrMostRecentCollegeOrUniversity["collegeOrUniversity"];
        document.getElementById("prevcollegeGraduationDate").value = currentOrMostRecentCollegeOrUniversity["graduationDate"];
    }
    // Education
    var education = data["studentEducation"];
    if(education != null) {
        document.getElementById("major").value = education["major"];
        document.getElementById("minor").value = education["minor"];
        document.getElementById("lastDayOfClass").value = education["lastDateOfClass"];
        document.getElementById("unweightedGPA").value = education["unweightedGPA"];
        document.getElementById("GPAScale").value = education["GPAScale"];
        document.getElementById("currentYear").value = education["currentEnrolledYear"];

        if (education["extraDegrees"] == "yes") {
            document.getElementById("extraDegreesYes").click();
        }
        else {
            document.getElementById("extraDegreesYes").click();
        }
        document.getElementById("extraDegreesList").value = education["extraDegreesList"];
        document.getElementById("awards").value = education["awards"];
        document.getElementById("experiences").value = education["mathOrSciExperiences"];
    }
    // Student currently enrolled coursework list
    var studentCurrentlyEnrolledCourseworkList = data["studentCurrentlyEnrolledCourseworkList"];
    for(var i=1;i<=studentCurrentlyEnrolledCourseworkList.length;i++){
        if(studentCurrentlyEnrolledCourseworkList[i-1] != null) {
            if(i!= 1) {
                addRow("currentlyEnrolledCoursesTable");
            }
        }
    }

    var currentlyEnrolledCoursesTable = document.getElementById("currentlyEnrolledCoursesTable");
    for(var i=1, row ;row = currentlyEnrolledCoursesTable.rows[i]; i++){
        if(studentCurrentlyEnrolledCourseworkList[i-1] != null) {
            row.cells[0].children[0].value = studentCurrentlyEnrolledCourseworkList[i-1]["courseNumber"];
            row.cells[1].children[0].value = studentCurrentlyEnrolledCourseworkList[i - 1]["semester"];
            row.cells[2].children[0].value = studentCurrentlyEnrolledCourseworkList[i - 1]["year"];
            row.cells[3].children[0].value = studentCurrentlyEnrolledCourseworkList[i - 1]["courseTitle"];
            row.cells[4].children[0].value = studentCurrentlyEnrolledCourseworkList[i - 1]["collegeOrUniversity"];
        }
    }

    var mathCoursesCompletedTable = document.getElementById("mathCoursesCompletedTable");
    var sciCoursesCompletedTable = document.getElementById("sciCoursesCompletedTable");
    var studentMathematicsAndScienceCoursesCompletedList = data["studentMathematicsAndScienceCoursesCompletedList"];
    var studentMathCoursesCompletedList = [];
    var studentSciCoursesCompletedList = [];
    var flag1 = 0;
    var flag2 = 0;
    for(var i=1;i<=studentMathematicsAndScienceCoursesCompletedList.length;i++){
        if(studentMathematicsAndScienceCoursesCompletedList[i-1] != null) {
            if (studentMathematicsAndScienceCoursesCompletedList[i - 1]["courseTitle"].endsWith("_MAT")) {
                if(flag1 == 1) {
                    addRow("mathCoursesCompletedTable");
                }
                flag1 = 1;
                studentMathCoursesCompletedList.push(studentMathematicsAndScienceCoursesCompletedList[i - 1]);
            }
            else {
                if(flag2 == 1) {
                    addRow("sciCoursesCompletedTable");
                }
                flag2 = 1;
                studentSciCoursesCompletedList.push(studentMathematicsAndScienceCoursesCompletedList[i - 1]);
            }
        }
    }

    for(var i=1, row ;row = mathCoursesCompletedTable.rows[i]; i++){
        if(studentMathCoursesCompletedList[i-1] != null) {
            row.cells[0].children[0].value = studentMathCoursesCompletedList[i - 1]["courseNumber"];
            row.cells[1].children[0].value = studentMathCoursesCompletedList[i - 1]["semester"];
            row.cells[2].children[0].value = studentMathCoursesCompletedList[i - 1]["year"];
            row.cells[3].children[0].value = studentMathCoursesCompletedList[i - 1]["courseTitle"].substring(0,studentMathCoursesCompletedList[i - 1]["courseTitle"].length - 4);
            row.cells[4].children[0].value = studentMathCoursesCompletedList[i - 1]["grade"];
            row.cells[5].children[0].value = studentMathCoursesCompletedList[i - 1]["collegeOrUniversity"];
        }
    }

    for(var i=1, row ;row = sciCoursesCompletedTable.rows[i]; i++){

        if(studentSciCoursesCompletedList[i-1] != null) {
            row.cells[0].children[0].value = studentSciCoursesCompletedList[i - 1]["courseNumber"];
            row.cells[1].children[0].value = studentSciCoursesCompletedList[i - 1]["semester"];
            row.cells[2].children[0].value = studentSciCoursesCompletedList[i - 1]["year"];
            row.cells[3].children[0].value = studentSciCoursesCompletedList[i - 1]["courseTitle"].substring(0,studentSciCoursesCompletedList[i - 1]["courseTitle"].length - 4);
            row.cells[4].children[0].value = studentSciCoursesCompletedList[i - 1]["grade"];
            row.cells[5].children[0].value = studentSciCoursesCompletedList[i - 1]["collegeOrUniversity"];

        }
    }
    studentPersonalStatementBAO = data["studentPersonalStatementBAO"];
    if(studentPersonalStatementBAO != null) {
        document.getElementById("fileName").innerHTML = "file uploaded : " + studentPersonalStatementBAO["fileName"];
        document.getElementById("fileName").style.display = "block";
    }

    studentFinalWaiver = data["studentFinalWaiver"];
    if(studentFinalWaiver != null){
        document.getElementById("nameOfApplicant").value =studentFinalWaiver["name"];
        if(studentFinalWaiver["waiveOrNot"] == "yes") {
            console.log("waiver yes");
            document.getElementById("waived").click();
        }
        if(studentFinalWaiver["waiveOrNot"] == "no"){
            console.log("waiver no");
            document.getElementById("notWaived").click();
        }
        document.getElementById("recommenderFullName").value = studentFinalWaiver["recommenderName"];
        document.getElementById("recommenderPosition").value = studentFinalWaiver["recommenderPosition"];
        document.getElementById("recommenderCompany").value = studentFinalWaiver["recommenderCompany"];
        document.getElementById("recommenderAddress").value = studentFinalWaiver["recommenderAddress"];
        document.getElementById("recommenderEmail").value = studentFinalWaiver["recommenderEmail"];
        document.getElementById("recommenderNumber").value = studentFinalWaiver["recommenderPhone"];
        document.getElementById("recommenderFax").value = studentFinalWaiver["recommenderFax"];
        if(studentFinalWaiver["acknowledgement1"] == "yes"){
            console.log("ack1 yes");
            document.getElementById("acknowledgement1").click();
        }
        if(studentFinalWaiver["acknowledgement2"] == "yes"){
            console.log("ack2 yes");
            document.getElementById("acknowledgement2").click();
        }
        if(studentFinalWaiver["acknowledgement3"] == "yes"){
            console.log("ack3 yes");
            document.getElementById("acknowledgement3").click();
        }
    }
}

function revealAddress(home, academic){
    if(home == "USA"){
        console.log(1);
        $('#USAAddressHome').find('*').attr('disabled', false);
        $("#USAAddressHome").show();
        $("#USAAddressHome").prop('disabled', false);
        $("#USAAddressHome").children().prop('disabled', false);
        $("#ForeignAddressHome").hide();
        $("#ForeignAddressHome").prop('disabled', true);
        $("#ForeignAddressHome").children().prop('disabled', true);
        $('#ForeignAddressHome').find('*').attr('disabled', true);
    }
    else if(home == ""){
        console.log(2);
    }
    else{
        console.log(0);
        $('#ForeignAddressHome').find('*').attr('disabled', false);
        $("#ForeignAddressHome").show();
        $("#ForeignAddressHome").prop('disabled', false);
        $("#ForeignAddressHome").children().prop('disabled', false);
        $("#USAAddressHome").hide();
        $("#USAAddressHome").prop('disabled', true);
        $("#USAAddressHome").children().prop('disabled', true);
        $('#USAAddressHome').find('*').attr('disabled', true);
    }

    if (academic == "USA") {
        console.log(1);
        $('#USAAddressAcademic').find('*').attr('disabled', false);
        $("#USAAddressAcademic").show();
        $("#USAAddressAcademic").prop('disabled', false);
        $("#USAAddressAcademic").children().prop('disabled', false);
        $("#ForeignAddressAcademic").hide();
        $("#ForeignAddressAcademic").prop('disabled', true);
        $("#ForeignAddressAcademic").children().prop('disabled', true);
        $('#ForeignAddressAcademic').find('*').attr('disabled', true);
    }
    else if(academic == ""){
        console.log(2);
    }
    else {
        console.log(0);
        $('#ForeignAddressAcademic').find('*').attr('disabled', false);
        $("#ForeignAddressAcademic").show();
        $("#ForeignAddressAcademic").prop('disabled', false);
        $("#ForeignAddressAcademic").children().prop('disabled', false);
        $("#USAAddressAcademic").hide();
        $("#USAAddressAcademic").prop('disabled', true);
        $("#USAAddressAcademic").children().prop('disabled', true);
        $('#USAAddressAcademic').find('*').attr('disabled', true);

    }
}
function onloadFunction(){

    $.ajax({
        url : '/username',
        type : 'post',
        success : function(data){
            username = data;
            console.log("username is :" + username);
            console.log("okay this is the end step");
        },
        error : function(data){
            alert("Error in retrieving user data.");
        }
    });

    console.log("1111");
    retrieveUserData(username);
    console.log("2222");
    showTab(currentTab);
    console.log(formDataRetrieved);


}

function showReview(){
    console.log("came to show Review");
    // eligibility
    if(document.getElementById("eligibility1").checked){
        document.getElementById("eligibility1Value").innerText = "yes";
    }
    else{
        document.getElementById("eligibility1Value").innerText = "no";
    }
    if(document.getElementById("eligibility2").checked){
        document.getElementById("eligibility2Value").innerText = "yes";
    }
    else{
        document.getElementById("eligibility2Value").innerText = "no";
    }
    if(document.getElementById("eligibility3").checked){
        document.getElementById("eligibility3Value").innerText = "yes";
    }
    else{
        document.getElementById("eligibility3Value").innerText = "no";
    }

    // My Information
    // Legal Name
    document.getElementById("firstNameReview").innerText = document.getElementById("firstName").value;
    document.getElementById("middleNameReview").innerText = document.getElementById("middleName").value;
    document.getElementById("lastNameReview").innerText = document.getElementById("lastName").value;
    document.getElementById("suffixReview").innerText = document.getElementById("suffix").value;


    // Home and Phone Address Review


    var address1HomeList = document.getElementsByName("address1Home");
    var address2HomeList = document.getElementsByName("address2Home");
    var cityHomeList = document.getElementsByName("cityHome");
    var stateHomeList = document.getElementsByName("stateHome");
    var zipHomeList = document.getElementsByName("zipHome");
    var mailAddressCheckHomeList = document.getElementsByName("mailAddressCheckHome");
    var homePhoneHomeList = document.getElementsByName("homePhoneHome");
    var mobilePhoneHomeList = document.getElementsByName("mobilePhoneHome");
    for (var i=0;i<address1HomeList.length;i++){
        if(!address1HomeList[i].disabled && !address2HomeList[i].disabled && !cityHomeList[i].disabled &&
        !stateHomeList[i].disabled && !zipHomeList[i].disabled && !mailAddressCheckHomeList[i].disabled
        && !homePhoneHomeList[i].disabled && !mobilePhoneHomeList[i].disabled){
            document.getElementById("countryHomeReview").innerText = document.getElementById("countryHome").value;
            document.getElementById("address1HomeReview").innerText = address1HomeList[i].value;
            document.getElementById("address2HomeReview").innerText = address2HomeList[i].value;
            document.getElementById("cityHomeReview").innerText = cityHomeList[i].value;
            document.getElementById("stateHomeReview").innerText = stateHomeList[i].value;
            document.getElementById("zipHomeReview").innerText = zipHomeList[i].value;
            document.getElementById("zipHomeReview").innerText = zipHomeList[i].value;
            document.getElementById("mailAddressCheckHomeReview").innerText = mailAddressCheckHomeList[i].value;
            document.getElementById("homePhoneHomeReview").innerText = homePhoneHomeList[i].value;
            document.getElementById("mobilePhoneHomeReview").innerText = mobilePhoneHomeList[i].value;
            if(document.getElementById("countryHome").value == "USA")
                break;
        }
    }

    // Academic Address and Phone Review

    var address1AcademicList = document.getElementsByName("address1Academic");
    var address2AcademicList = document.getElementsByName("address2Academic");
    var cityAcademicList = document.getElementsByName("cityAcademic");
    var stateAcademicList = document.getElementsByName("stateAcademic");
    var zipAcademicList = document.getElementsByName("zipAcademic");
    var mailAddressCheckAcademicList = document.getElementsByName("mailAddressCheckAcademic");
    var homePhoneAcademicList = document.getElementsByName("homePhoneAcademic");
    var mobilePhoneAcademicList = document.getElementsByName("mobilePhoneAcademic");
    for (var i=0;i<address1AcademicList.length;i++){
        if(!address1AcademicList[i].disabled){
            console.log("what a man! country!");
            document.getElementById("countryAcademicReview").innerText = document.getElementById("countryAcademic").value;
            document.getElementById("address1AcademicReview").innerText = address1AcademicList[i].value;
            document.getElementById("address2AcademicReview").innerText = address2AcademicList[i].value;
            document.getElementById("cityAcademicReview").innerText = cityAcademicList[i].value;
            document.getElementById("stateAcademicReview").innerText = stateAcademicList[i].value;
            document.getElementById("zipAcademicReview").innerText = zipAcademicList[i].value;
            document.getElementById("mailAddressCheckAcademicReview").innerText = mailAddressCheckAcademicList[i].value;
            document.getElementById("homePhoneAcademicReview").innerText = homePhoneAcademicList[i].value;
            document.getElementById("mobilePhoneAcademicReview").innerText = mobilePhoneAcademicList[i].value;
            if(document.getElementById("countryAcademic").value == "USA")
                break;
        }
    }


    // Personal Information
    document.getElementById("dobReview").innerText = document.getElementById("dob").value;
    document.getElementById("cityDobReview").innerText = document.getElementById("cityDob").value;
    document.getElementById("stateDobReview").innerText = document.getElementById("stateDob").value;
    document.getElementById("countryDobReview").innerText = document.getElementById("countryDob").value;
    if(document.getElementById("male").checked){
        document.getElementById("genderReview").innerText = "Male";
    }
    if(document.getElementById("female").checked){
        document.getElementById("genderReview").innerText = "Female";
    }

    // Ethnic Background
    var Race = [];
    var elements = document.getElementsByName("race[]");
    console.log(elements);
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked){
            console.log(elements[i].value);
            Race.push(elements[i].value);
        }
    }

    // US citizenship
    document.getElementById("raceReview").innerText = Race.join();
    if(document.getElementById("usCitizen").checked) {
        document.getElementById("usCitizenshipReview").innerText = "yes";

    }
    if(document.getElementById("notUsCitizen").checked){
        document.getElementById("usCitizenshipReview").innerText = "no";

    }

    if(document.getElementById("residingInUs").checked){
        document.getElementById("residingInUsReview").innerText = "yes";
    }

    if(document.getElementById("notResidingInUs").checked){
        document.getElementById("residingInUsReview").innerText = "no";
    }

    // Visa Status
    document.getElementById("visaStatusReview").innerText = document.getElementById("visaStatus").value;

    // first Generation Review
    if(document.getElementById("firstGeneration").checked) {
        document.getElementById("firstGenerationReview").innerText = "yes";
    }
    if(document.getElementById("notFirstGeneration").checked){
        document.getElementById("firstGenerationReview").innerText = "no";
    }

    // ASU Affiliation
    if(document.getElementById("mtbiPreviousParticipation").checked){
        document.getElementById("MTBIPreviousParticipationReview").innerText = "yes";
        document.getElementById("mtbiParticipationDateReview").innerText = document.getElementById("mtbiParticipationDate").value;
    }
    else{
        document.getElementById("MTBIPreviousParticipationReview").innerText = "no";
    }
    if(document.getElementById("JBMSHPPreviousParticipation").checked){
        document.getElementById("JBMSHPPreviousParticipationReview").innerText = "yes";
        document.getElementById("JBMSHPParticipationDateReview").innerText = document.getElementById("JBMSHPParticipationDate").value;
    }
    else{
        document.getElementById("JBMSHPPreviousParticipationReview").innerText = "no";
    }
    if(document.getElementById("graduateProgramApplication").checked){
        document.getElementById("graduateProgramApplicationReview").innerText = "yes";
        document.getElementById("nameOfGraduateProgramAppliedToReview").innerText = document.getElementById("nameOfGraduateProgramAppliedTo").value;
    }
    else{
        document.getElementById("graduateProgramApplicationReview").innerText = "no";
    }

    // Knowledge of MTBI

    if(document.getElementById("referral").checked){
        document.getElementById("referralReview").innerText = "yes";
        document.getElementById("ASUFacultyMemberNameReview").innerText = document.getElementById("ASUFacultyMemberName").value;
    }
    else{
        document.getElementById("referralReview").innerText = "no";
    }

    document.getElementById("heardOfMtbiReview").innerText = document.getElementById("heardOfMtbi").value;

    //Education Review
    document.getElementById("countryCollegeReview").innerText = document.getElementById("countryCollege").value;
    document.getElementById("collegeStateReview").innerText = document.getElementById("collegeState").value;
    document.getElementById("collegeCityReview").innerText = document.getElementById("collegeCity").value;
    document.getElementById("collegeNameReview").innerText = document.getElementById("collegeName").value;
    document.getElementById("collegeGraduationDateReview").innerText = document.getElementById("collegeGraduationDate").value;

    document.getElementById("prevcountryCollegeReview").innerText = document.getElementById("prevcountryCollege").value;
    document.getElementById("prevcollegeStateReview").innerText = document.getElementById("prevcollegeState").value;
    document.getElementById("prevcollegeCityReview").innerText = document.getElementById("prevcollegeCity").value;
    document.getElementById("prevcollegeNameReview").innerText = document.getElementById("prevcollegeName").value;
    document.getElementById("prevcollegeGraduationDateReview").innerText = document.getElementById("prevcollegeGraduationDate").value;

    document.getElementById("majorReview").innerText = document.getElementById("major").value;
    document.getElementById("minorReview").innerText = document.getElementById("minor").value;
    document.getElementById("lastDayOfClassReview").innerText = document.getElementById("lastDayOfClass").value;
    document.getElementById("unweightedGPAReview").innerText = document.getElementById("unweightedGPA").value;
    document.getElementById("GPAScaleReview").innerText = document.getElementById("GPAScale").value;
    document.getElementById("currentYearReview").innerText = document.getElementById("currentYear").value;


    if(document.getElementById("extraDegreesYes").checked){
        document.getElementById("extraDegreesReview").innerText = "yes";
    }
    if(document.getElementById("extraDegreesNo").checked){
        document.getElementById("extraDegreesReview").innerText = "no";
    }
    document.getElementById("extraDegreesListReview").innerText = document.getElementById("extraDegreesList").value;
    document.getElementById("awardsReview").innerText = document.getElementById("awards").value;
    document.getElementById("experiencesReview").innerText = document.getElementById("experiences").value;

    // copying table
    var x = document.getElementById("currentlyEnrolledCoursesTable").rows.length;
    //document.getElementById("currentlyEnrolledCoursesTableReview").innerHTML = document.getElementById("currentlyEnrolledCoursesTable").innerHTML;

    var currentlyEnrolledCoursesTable = document.getElementById("currentlyEnrolledCoursesTable");
    var currentlyEnrolledCoursesTableReview = document.getElementById("currentlyEnrolledCoursesTableReview");
    for(var i=1, row ; row = currentlyEnrolledCoursesTable.rows[i]; i++){
        if(i != 1) {
            addRow("currentlyEnrolledCoursesTableReview");
        }
        r = currentlyEnrolledCoursesTableReview.rows[i];
        r.cells[0].children[0].innerHTML = row.cells[0].children[0].value;
        r.cells[1].children[0].innerHTML = row.cells[1].children[0].value;
        r.cells[2].children[0].innerHTML = row.cells[2].children[0].value;
        r.cells[3].children[0].innerHTML = row.cells[3].children[0].value;
        r.cells[4].children[0].innerHTML = row.cells[4].children[0].value;

    }

    var mathCoursesCompletedTable = document.getElementById("mathCoursesCompletedTable");
    var mathCoursesCompletedTableReview = document.getElementById("mathCoursesCompletedTableReview");
    for(var i=1, row ; row = mathCoursesCompletedTable.rows[i]; i++){
        if(i != 1) {
            addRow("mathCoursesCompletedTableReview");
        }
        r = mathCoursesCompletedTableReview.rows[i];
        r.cells[0].children[0].innerHTML = row.cells[0].children[0].value;
        r.cells[1].children[0].innerHTML = row.cells[1].children[0].value;
        r.cells[2].children[0].innerHTML = row.cells[2].children[0].value;
        r.cells[3].children[0].innerHTML = row.cells[3].children[0].value;
        r.cells[4].children[0].innerHTML = row.cells[4].children[0].value;
        r.cells[5].children[0].innerHTML = row.cells[5].children[0].value;
    }

    var sciCoursesCompletedTable = document.getElementById("sciCoursesCompletedTable");
    var sciCoursesCompletedTableReview = document.getElementById("sciCoursesCompletedTableReview");
    for(var i=1, row ; row = sciCoursesCompletedTable.rows[i]; i++){
        if(i!= 1) {
            addRow("sciCoursesCompletedTableReview");
        }
        r = sciCoursesCompletedTableReview.rows[i];
        r.cells[0].children[0].innerHTML = row.cells[0].children[0].value;
        r.cells[1].children[0].innerHTML = row.cells[1].children[0].value;
        r.cells[2].children[0].innerHTML = row.cells[2].children[0].value;
        r.cells[3].children[0].innerHTML = row.cells[3].children[0].value;
        r.cells[4].children[0].innerHTML = row.cells[4].children[0].value;
        r.cells[5].children[0].innerHTML = row.cells[5].children[0].value;
    }

    //if(document.getElementById("personalStatement").files.length != 0){
    if(document.getElementById("fileName").innerHTML != ""){
        document.getElementById("personalStatementUploadedReview").innerText = "yes";
    }
    else{
        document.getElementById("personalStatementUploadedReview").innerText = "no";
    }

    document.getElementById("nameOfApplicantReview").innerText = document.getElementById("nameOfApplicant").value;
    if(document.getElementById("waived").checked){
        document.getElementById("waiverReview").innerText = " : waived";
    }
    if(document.getElementById("notWaived").checked){
        document.getElementById("waiverReview").innerText = " : not waived";
    }

    document.getElementById("recommenderFullNameReview").innerText = document.getElementById("recommenderFullName").value;
    document.getElementById("recommenderPositionReview").innerText = document.getElementById("recommenderPosition").value;
    document.getElementById("recommenderCompanyReview").innerText = document.getElementById("recommenderCompany").value;
    document.getElementById("recommenderAddressReview").innerText = document.getElementById("recommenderAddress").value;
    document.getElementById("recommenderEmailReview").innerText = document.getElementById("recommenderEmail").value;
    document.getElementById("recommenderNumberReview").innerText = document.getElementById("recommenderNumber").value;
    document.getElementById("recommenderFaxReview").innerText = document.getElementById("recommenderFax").value;

    if(document.getElementById("acknowledgement1").checked){
        document.getElementById("acknowledgement1Review").innerText = "Yes";
    }
    if(document.getElementById("acknowledgement2").checked){
        document.getElementById("acknowledgement2Review").innerText = "Yes";
    }
    if(document.getElementById("acknowledgement3").checked){
        document.getElementById("acknowledgement3Review").innerText = "Yes";
    }
}








