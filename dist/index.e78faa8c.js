const position = {
    name: "projectName",
    faculty: "facultyName",
    university: "university",
    deadline: "deadline",
    fields: "fields",
    detail: "detail"
};
class proObject {
    static projectList1 = [];
    constructor(projectList){
        this.projectList = projectList;
    }
    createProjectList(projectsList) {
        // console.log("oh oh oh");
        // this.url = "http://localhost:5001/api/projects/";
        if (projectsList == null) {
            // console.log("oh oh");
            // projectsList=fetch(url, {
            //   method: "GET" // default, so we can ignore
            // });
            // console.log(projectsList);
            projectsList = [];
            const myPosition2 = Object.create(position);
            myPosition2.name = "ML project";
            myPosition2.faculty = "pro. John Smith";
            myPosition2.university = "University of MIT";
            myPosition2.deadline = "20 june 2025";
            myPosition2.fields = "AT";
            myPosition2.detail = "Contact me";
            projectsList.push(myPosition2);
            const myPosition3 = Object.create(position);
            myPosition3.name = "IOT project";
            myPosition3.faculty = "pro. Fei-Fei whith";
            myPosition3.university = "University of Stanford";
            myPosition3.deadline = "13 march 2025";
            myPosition3.fields = "CS";
            myPosition3.detail = "for master students";
            projectsList.push(myPosition3);
            const myPosition4 = Object.create(position);
            myPosition4.name = "BIO project";
            myPosition4.faculty = "pro. Justin";
            myPosition4.university = "University of Berkeley";
            myPosition4.deadline = "11 Oct 2024";
            myPosition4.fields = "CS";
            myPosition4.detail = "PHD";
            projectsList.push(myPosition4);
            const myPosition5 = Object.create(position);
            myPosition5.name = "Mathmatic project";
            myPosition5.faculty = "pro. Mary";
            myPosition5.university = "University of Waterloo";
            myPosition5.deadline = "1 Nov. 2024";
            myPosition5.fields = "Math";
            myPosition5.detail = "Need work experience";
            projectsList.push(myPosition5);
            const myPosition6 = Object.create(position);
            myPosition6.name = "Psychology project";
            myPosition6.faculty = "pro. Jack";
            myPosition6.university = "University of Harvard";
            myPosition6.deadline = "18 june 2026";
            myPosition6.fields = "Science";
            myPosition6.detail = "At least 3 recommendation";
            projectsList.push(myPosition6);
            const myPosition1 = Object.create(position);
            myPosition1.name = "Project X";
            myPosition1.faculty = "Dr. John Doe";
            myPosition1.university = "University of XYZ";
            myPosition1.deadline = "2023-12-31";
            myPosition1.fields = "Science";
            myPosition1.detail = "Description of project X";
            projectsList.push(myPosition1);
            const myPosition7 = Object.create(position);
            myPosition7.name = "Network project";
            myPosition7.faculty = "Dr. walter Doe";
            myPosition7.university = "University of MIT";
            myPosition7.deadline = "5 Feb. 2024";
            myPosition7.fields = "CS";
            myPosition7.detail = "Feel free to contact me";
            projectsList.push(myPosition7);
            const myPosition8 = Object.create(position);
            myPosition8.name = "Network project";
            myPosition8.faculty = "Dr. walter Doe";
            myPosition8.university = "University of MIT";
            myPosition8.deadline = "5 Feb. 2024";
            myPosition8.fields = "CS";
            myPosition8.detail = "Feel free to contact me";
            projectsList.push(myPosition8);
            const myPosition9 = Object.create(position);
            myPosition9.name = "Network project";
            myPosition9.faculty = "Dr. walter Doe";
            myPosition9.university = "University of MIT";
            myPosition9.deadline = "5 Feb. 2024";
            myPosition9.fields = "CS";
            myPosition9.detail = "Feel free to contact me";
            projectsList.push(myPosition9);
            const myPosition10 = Object.create(position);
            myPosition10.name = "Network project";
            myPosition10.faculty = "Dr. walter Doe";
            myPosition10.university = "University of MIT";
            myPosition10.deadline = "5 Feb. 2024";
            myPosition10.fields = "CS";
            myPosition10.detail = "Feel free to contact me";
            projectsList.push(myPosition10);
            const myPosition11 = Object.create(position);
            myPosition11.name = "Network project";
            myPosition11.faculty = "Dr. walter Doe";
            myPosition11.university = "University of MIT";
            myPosition11.deadline = "5 Feb. 2024";
            myPosition11.fields = "CS";
            myPosition11.detail = "Feel free to contact me";
            projectsList.push(myPosition11);
            const myPosition12 = Object.create(position);
            myPosition12.name = "Network project";
            myPosition12.faculty = "Dr. walter Doe";
            myPosition12.university = "University of MIT";
            myPosition12.deadline = "5 Feb. 2024";
            myPosition12.fields = "CS";
            myPosition12.detail = "Feel free to contact me";
            projectsList.push(myPosition12);
            const myPosition13 = Object.create(position);
            myPosition13.name = "Network project";
            myPosition13.faculty = "Dr. walter Doe";
            myPosition13.university = "University of MIT";
            myPosition13.deadline = "5 Feb. 2024";
            myPosition13.fields = "CS";
            myPosition13.detail = "Feel free to contact me";
            projectsList.push(myPosition13);
            const myPosition14 = Object.create(position);
            myPosition14.name = "Network project";
            myPosition14.faculty = "Dr. walter Doe";
            myPosition14.university = "University of MIT";
            myPosition14.deadline = "5 Feb. 2024";
            myPosition14.fields = "CS";
            myPosition14.detail = "Feel free to contact me";
            projectsList.push(myPosition14);
            const myPosition15 = Object.create(position);
            myPosition15.name = "Network project";
            myPosition15.faculty = "Dr. walter Doe";
            myPosition15.university = "University of MIT";
            myPosition15.deadline = "5 Feb. 2024";
            myPosition15.fields = "CS";
            myPosition15.detail = "Feel free to contact me";
            projectsList.push(myPosition15);
        }
        proObject.projectList1 = projectsList;
        this.updateProject();
    }
    addProject(project) {
        console.log(project);
        proObject.projectList1.push(project);
        this.updateProject();
    }
    updateProject() {
        while(this.projectList.firstChild)this.projectList.removeChild(this.projectList.firstChild);
        proObject.projectList1.forEach((project, index)=>{
            const section = document.createElement("SECTION");
            section.classList.add("frame-section");
            const projectNameParent = document.createElement("DIV");
            projectNameParent.classList.add("project-name-parent");
            const projectName = document.createElement("B");
            projectName.classList.add("project-name");
            const projectNameLine1 = document.createElement("P");
            projectNameLine1.classList.add("project");
            projectNameLine1.textContent = "Project";
            const projectNameLine2 = document.createElement("P");
            projectNameLine2.classList.add("project");
            projectNameLine2.textContent = project.name;
            projectName.appendChild(projectNameLine1);
            projectName.appendChild(projectNameLine2);
            const facultyName = document.createElement("DIV");
            facultyName.classList.add("faculty-name");
            facultyName.textContent = project.faculty;
            const universityName = document.createElement("DIV");
            universityName.classList.add("faculty-name");
            universityName.textContent = project.university;
            const deadlineDiv = document.createElement("DIV");
            deadlineDiv.classList.add("faculty-name");
            deadlineDiv.textContent = project.deadline;
            const fieldsDiv = document.createElement("DIV");
            fieldsDiv.classList.add("faculty-name");
            fieldsDiv.textContent = project.fields;
            const detailDiv = document.createElement("DIV");
            detailDiv.classList.add("detaildetaildetaildetaildetail");
            project.detail.split("\n").forEach((line)=>{
                const p = document.createElement("P");
                p.classList.add("project");
                p.textContent = line;
                detailDiv.appendChild(p);
            });
            projectNameParent.appendChild(projectName);
            projectNameParent.appendChild(facultyName);
            projectNameParent.appendChild(universityName);
            projectNameParent.appendChild(deadlineDiv);
            projectNameParent.appendChild(fieldsDiv);
            projectNameParent.appendChild(detailDiv);
            const applyButton = document.createElement("BUTTON");
            applyButton.addEventListener("click", function() {
                var email1 = "example@gmail.com";
                var subject1 = "Request for information on project " + project.name;
                var emailBody = "Dear " + project.faculty + ",\n\nI am interested in learning more about your " + project.name + " project. Can you please provide additional information about the project and the application process?\n\nThank you,\n[Your Name]";
                var url = "https://mail.google.com/mail/?view=cm&to=" + email1 + "&su=" + encodeURIComponent(subject1) + "&body=" + encodeURIComponent(emailBody);
                window.open(url);
            });
            applyButton.classList.add("apply-wrapper");
            const apply = document.createElement("B");
            apply.classList.add("apply");
            apply.textContent = "Apply";
            applyButton.appendChild(apply);
            section.appendChild(projectNameParent);
            section.appendChild(applyButton);
            this.projectList.appendChild(section);
        });
    }
    remove(index) {
        proObject.projectList1.splice(index, 1);
        this.updateProject();
    }
}

//# sourceMappingURL=index.e78faa8c.js.map
