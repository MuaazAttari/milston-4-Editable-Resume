// listing elements.......

document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion......

    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;

    const instituteElement = document.getElementById("institute") as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const completionElement = document.getElementById("completion") as HTMLInputElement;

    const jobTitleElement = document.getElementById("jobTitle") as HTMLInputElement;
    const companyElement = document.getElementById("company") as HTMLInputElement;
    const workDatesElement = document.getElementById("workDates") as HTMLInputElement;
    const jobDescriptionElement = document.getElementById("jobDescription") as HTMLTextAreaElement;

    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    // if statement...

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement
        && instituteElement && degreeElement && completionElement
        && jobTitleElement && companyElement && workDatesElement && jobDescriptionElement
        && skillsElement) {
        
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const institute = instituteElement.value;
        const degree = degreeElement.value;
        const completion = completionElement.value;
        const jobTitle = jobTitleElement.value;
        const company = companyElement.value;
        const workDates = workDatesElement.value;
        const jobDescription = jobDescriptionElement.value;
        const skills = skillsElement.value;

        // picture elements...

            const profilePictureFile = profilePictureInput.files?.[0];
            const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // creating resume output with contenteditable attribute....

        const resumeOutput = `
            <h2>Resume</h2>
          ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture">` : ""}
            <p><strong>Name:</strong> <span id="editName" contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span id="editEmail" contenteditable="true">${email}</span></p>
            <p><strong>Phone:</strong> <span id="editPhone" contenteditable="true">${phone}</span></p>
            <p><strong>Address:</strong> <span id="editAddress" contenteditable="true">${address}</span></p>
            
            <h3>Education</h3>
            <p><strong>Institute:</strong> <span id="editInstitute" contenteditable="true">${institute}</span></p>
            <p><strong>Degree:</strong> <span id="editDegree" contenteditable="true">${degree}</span></p>
            <p><strong>Completion:</strong> <span id="editCompletion" contenteditable="true">${completion}</span></p>
            
            <h3>Experience</h3>
            <p><strong>Job-Title:</strong> <span id="editJobTitle" contenteditable="true">${jobTitle}</span></p>
            <p><strong>Company:</strong> <span id="editCompany" contenteditable="true">${company}</span></p>
            <p><strong>WorkDates:</strong> <span id="editWorkDates" contenteditable="true">${workDates}</span></p>
            <p><strong>Job-Description:</strong> <span id="editJobDescription" contenteditable="true">${jobDescription}</span></p>
            
            <h3>Skills</h3>
            <p><strong>Skills:</strong> <span id="editSkills" contenteditable="true">${skills}</span></p>
        `;

        const resumeOutputElement = document.getElementById('resume-Output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            // Adding event listeners for each editable field
            addEditableEventListeners();
        } else {
            console.error("resumeOutputElement not found");
        }
    } else {
        console.error("One or more elements not found");
    }
});

// Function to add event listeners to all editable fields

function addEditableEventListeners() {
    const editableFields = [
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

    editableFields.forEach(id => {
        const element = document.getElementById(id) as HTMLSpanElement;
        if (element) {
            element.addEventListener("input", function () {
                console.log(`${id} updated to: `, element.innerText);
                // Optionally, update localStorage or a variable to persist changes dynamically.
            });
        }
    });
}
