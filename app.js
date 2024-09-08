var _a;
// listing elements
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var instituteElement = document.getElementById("institute");
    var degreeElement = document.getElementById("degree");
    var completionElement = document.getElementById("completion");
    var jobTitleElement = document.getElementById("jobTitle");
    var companyElement = document.getElementById("company");
    var workDatesElement = document.getElementById("workDates");
    var jobDescriptionElement = document.getElementById("jobDescription");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement
        && instituteElement && degreeElement && completionElement
        && jobTitleElement && companyElement && workDatesElement && jobDescriptionElement
        && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var institute = instituteElement.value;
        var degree = degreeElement.value;
        var completion = completionElement.value;
        var jobTitle = jobTitleElement.value;
        var company = companyElement.value;
        var workDates = workDatesElement.value;
        var jobDescription = jobDescriptionElement.value;
        var skills = skillsElement.value;
        // picture elements...
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // creating resume output with contenteditable attribute
        var resumeOutput = "\n            <h2>Resume</h2>\n          ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> <span id=\"editName\" contenteditable=\"true\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"editEmail\" contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span id=\"editPhone\" contenteditable=\"true\">").concat(phone, "</span></p>\n            <p><strong>Address:</strong> <span id=\"editAddress\" contenteditable=\"true\">").concat(address, "</span></p>\n            \n            <h3>Education</h3>\n            <p><strong>Institute:</strong> <span id=\"editInstitute\" contenteditable=\"true\">").concat(institute, "</span></p>\n            <p><strong>Degree:</strong> <span id=\"editDegree\" contenteditable=\"true\">").concat(degree, "</span></p>\n            <p><strong>Completion:</strong> <span id=\"editCompletion\" contenteditable=\"true\">").concat(completion, "</span></p>\n            \n            <h3>Experience</h3>\n            <p><strong>Job-Title:</strong> <span id=\"editJobTitle\" contenteditable=\"true\">").concat(jobTitle, "</span></p>\n            <p><strong>Company:</strong> <span id=\"editCompany\" contenteditable=\"true\">").concat(company, "</span></p>\n            <p><strong>WorkDates:</strong> <span id=\"editWorkDates\" contenteditable=\"true\">").concat(workDates, "</span></p>\n            <p><strong>Job-Description:</strong> <span id=\"editJobDescription\" contenteditable=\"true\">").concat(jobDescription, "</span></p>\n            \n            <h3>Skills</h3>\n            <p><strong>Skills:</strong> <span id=\"editSkills\" contenteditable=\"true\">").concat(skills, "</span></p>\n        ");
        var resumeOutputElement = document.getElementById('resume-Output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Adding event listeners for each editable field
            addEditableEventListeners();
        }
        else {
            console.error("resumeOutputElement not found");
        }
    }
    else {
        console.error("One or more elements not found");
    }
});
// Function to add event listeners to all editable fields
function addEditableEventListeners() {
    var editableFields = [
        "editName",
        "editEmail",
        "editPhone",
        "editAddress",
        "editInstitute",
        "editDegree",
        "editCompletion",
        "editJobTitle",
        "editCompany",
        "editWorkDates",
        "editJobDescription",
        "editSkills"
    ];
    editableFields.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener("input", function () {
                console.log("".concat(id, " updated to: "), element.innerText);
                // Optionally, update localStorage or a variable to persist changes dynamically.
            });
        }
    });
}
