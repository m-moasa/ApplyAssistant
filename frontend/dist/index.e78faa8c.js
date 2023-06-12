const position = {
    name: "projectName",
    email: "example@gmail.com",
    faculty: "facultyName",
    university: "university",
    deadline: "deadline",
    fields: "fields",
    detail: "detail",
    summary: "Summary",
    requiredDocs: "RequireDocuments",
    isPremium: "isPremium",
    hasReqPremium: "hasReqPremium"
};
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i = 0; i < vars.length; i++){
        var pair = vars[i].split("=");
        if (decodeURIComponent(pair[0]) == variable) return decodeURIComponent(pair[1]);
    }
    console.log("Query variable %s not found", variable);
}
class proObject {
    static projectList1 = [];
    static projectListPremium = [];
    static fieldFilter = [];
    static universityFilter = [];
    static premiumValue = false;
    static allFields = [
        "AI",
        "ML",
        "Software Engineering",
        "Networks",
        "Algorithms",
        "Bioinformatics"
    ];
    constructor(projectList, fieldFilter, universityFilter){
        this.projectList = projectList;
        this.fieldFilter = fieldFilter;
        this.universityFilter = universityFilter;
    }
    async createProjectList() {
        var projectsList;
        this.url = "http://localhost:5001/api/projects/";
        await fetch(this.url).then((res)=>res.json()).then((data)=>{
            projectsList = data;
        });
        projectsList.forEach((project, index)=>{
            if (project.isPremium) proObject.projectListPremium.push(project);
            else proObject.projectList1.push(project);
        });
        // proObject.projectList1 = projectsList;
        this.updateProject();
    }
    updateUniFilter(uniName) {
        var checkbox = document.getElementById(uniName);
        if (checkbox.checked) this.universityFilter.push(uniName);
        else {
            const index = this.universityFilter.indexOf(uniName);
            if (index > -1) // only splice array when item is found
            this.universityFilter.splice(index, 1); // 2nd parameter means remove one item only
        }
        this.updateProject();
    }
    updateFieldFilter(fieldName) {
        console.log("ah", this.fieldFilter);
        var checkbox = document.getElementById(fieldName);
        if (checkbox.checked) this.fieldFilter.push(fieldName);
        else {
            const index = this.fieldFilter.indexOf(fieldName);
            if (index > -1) // only splice array when item is found
            this.fieldFilter.splice(index, 1); // 2nd parameter means remove one item only
        }
        this.updateProject();
        console.log("bah", this.fieldFilter);
    }
    checkTheBoxes() {
        console.log(this.fieldFilter);
        this.fieldFilter = getQueryVariable("fieldsChecked");
        if (this.fieldFilter == undefined) {
            this.fieldFilter = [];
            return;
        }
        if (typeof this.fieldFilter == "string") this.fieldFilter = JSON.parse(this.fieldFilter);
        proObject.allFields.forEach((element, _index)=>{
            // console.log(this.fieldFilter, element);
            if (this.fieldFilter.includes(element)) {
                console.log(element);
                document.getElementById(element).checked = true;
            }
        });
    }
    selectFieldAI() {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // window.location.replace("./index.html");
        // sessionStorage.setItem("reloading", "true");
        // window.location = 'production/produc_order.php';
        window.location.href = './index.html?fieldsChecked=["AI","ML"]#sctiveSection';
    // var reloading = sessionStorage.getItem("reloading");
    // if (reloading == true) {
    //   sessionStorage.removeItem("reloading");
    //   console.log(document.body);
    //   console.log(document.getElementById("AI"));
    //   // document.getElementById("AI").checked = true;
    //   this.fieldFilter.push("AI");
    //   // document.getElementById("ML").checked = true;
    //   this.fieldFilter.push("ML");
    //   this.fieldFilter = ["AI", "ML"];
    //   console.log(this.fieldFilter);
    //   this.updateProject();
    // } // document.location.href = "./index.html";
    // document.location.href = newUrl;
    // document = window;
    }
    selectFieldSystems() {
        window.location.href = './index.html?fieldsChecked=["Networks"]#sctiveSection';
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // window.location.href = "./index.html#sctiveSection";
    // document.getElementById("Networks").checked = true;
    // this.fieldFilter.push("Networks");
    // this.updateProject();
    }
    selectFieldTheory() {
        window.location.href = './index.html?fieldsChecked=["Algorithms"]#sctiveSection';
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // window.location.href = "./index.html#sctiveSection";
    // document.getElementById("Algorithms").checked = true;
    // this.fieldFilter.push("Algorithms");
    // this.updateProject();
    }
    selectFieldInterdisciplinary() {
        window.location.href = './index.html?fieldsChecked=["Bioinformatics"]#sctiveSection';
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // window.location.href = "./index.html#sctiveSection";
    // document.getElementById("Bioinformatics").checked = true;
    // this.fieldFilter.push("Bioinformatics");
    // this.updateProject();
    }
    async sendDefineProjectToBack(position) {
        this.url = "http://localhost:5001/api/projects/";
        fetch(this.url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(position)
        });
        // send the  define project to back
        // console.log(position.hasReqPremium, " hasReqPremium");
        // console.log(position, " new_position");
        // TODO : should uncomment these 2 lines after getting response from the back to update the positions
        // proObject.projectList1 = projectsList;
        // this.updateProject();
        window.location.href = "index.html";
    }
    premium() {
        // console.log("permium changed");
        var EmergencyProject = document.getElementById("EmergencyProject").checked;
        var MoreResumes = document.getElementById("MoreResumes").checked;
        console.log(MoreResumes, "  ", EmergencyProject);
        if (EmergencyProject || MoreResumes) this.premiumValue = true;
        else this.premiumValue = false;
    }
    back() {
        // console.log("AAAqqqqqqqqqqq");
        // this.updateProject();
        window.location.href = "index.html";
    }
    submitProject() {
        // console.log("submitProject");
        var projectTitle = document.getElementById("projectTitle").value;
        var proffessorFullname = document.getElementById("proffessorFullname").value;
        var proffessorField = document.getElementById("proffessorField").value;
        var proffessorUniversity = document.getElementById("proffessorUniversity").value;
        var proffessorDeadline = document.getElementById("proffessordeadline").value;
        var proffessorEmail = document.getElementById("proffessoremail").value;
        var proffessorRequireDocuments = document.getElementById("proffessorRequireDocuments").value;
        var proffessorSummary = document.getElementById("proffessorsummary").value;
        var detaileProf = document.getElementById("proffessorexplanation").value;
        const projectData = Object.create(position);
        projectData.name = projectTitle;
        projectData.faculty = proffessorFullname;
        projectData.university = proffessorUniversity;
        projectData.deadline = proffessorDeadline;
        projectData.fields = proffessorField;
        projectData.detail = detaileProf;
        projectData.email = proffessorEmail;
        projectData.summary = proffessorSummary;
        projectData.requiredDocs = proffessorRequireDocuments;
        projectData.isPremium = false;
        // TODO
        projectData.hasReqPremium = this.premiumValue;
        // console.log(projectData, " position");
        this.sendDefineProjectToBack(projectData);
    }
    addProject(project) {
        // console.log(project);
        proObject.projectList1.push(project);
        this.updateProject();
    }
    partlyIncludes(list, obj) {
        if (list == undefined) return false;
        // console.log(list);
        const newList = list.length == 0 ? [] : list;
        // const newList = [];
        for(let i = 0; i < newList.length; i++){
            const selectedField = newList[i];
            if (obj.includes(selectedField)) // console.log(typeof JSON.parse(list), selectedField, obj);
            return true;
        }
        return false;
    }
    appendList(someProjectList, isPremium) {
        someProjectList.forEach((project, index)=>{
            if ((this.partlyIncludes(this.fieldFilter, project.fields) || this.fieldFilter.length == 0) && (this.universityFilter.includes(project.university) || this.universityFilter.length == 0)) {
                const section = document.createElement("SECTION");
                if (!isPremium) section.classList.add("frame-section");
                else section.classList.add("frame-section-premium");
                const projectNameParent = document.createElement("DIV");
                projectNameParent.classList.add("project-name-parent");
                const projectName = document.createElement("B");
                projectName.classList.add("project-name");
                const projectNameLine2 = document.createElement("P");
                projectNameLine2.classList.add("project");
                projectNameLine2.textContent = project.name;
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
                detailDiv.textContent = project.summary;
                projectNameParent.appendChild(projectName);
                projectNameParent.appendChild(facultyName);
                projectNameParent.appendChild(universityName);
                projectNameParent.appendChild(deadlineDiv);
                projectNameParent.appendChild(fieldsDiv);
                projectNameParent.appendChild(detailDiv);
                const applyButton = document.createElement("BUTTON");
                applyButton.addEventListener("click", function() {
                    var email1 = project.email;
                    var subject1 = "Request for information on project " + project.name;
                    var emailBody = "Dear " + project.faculty + ",\n\nI am interested in learning more about your " + project.name + " project. Can you please provide additional information about the project and the application process?\n\nThank you,\n[Your Name]";
                    var url = "https://mail.google.com/mail/?view=cm&to=" + email1 + "&su=" + encodeURIComponent(subject1) + "&body=" + encodeURIComponent(emailBody);
                    var encodedProjectObject = encodeURIComponent(JSON.stringify(window.projectObject));
                    var encodedProjectname = encodeURIComponent(JSON.stringify(project.name));
                    var encodedProjectdetail = encodeURIComponent(JSON.stringify(project.detail));
                    window.location.href = "./project-info-page.html?data===" + encodedProjectObject + "===" + url + "===" + encodedProjectname + "===" + encodedProjectdetail;
                });
                applyButton.classList.add("apply-wrapper");
                const apply = document.createElement("B");
                apply.classList.add("apply");
                apply.textContent = "Apply";
                applyButton.appendChild(apply);
                section.appendChild(projectNameParent);
                section.appendChild(applyButton);
                this.projectList.appendChild(section);
            }
        });
    }
    updateProject() {
        while(this.projectList.firstChild)this.projectList.removeChild(this.projectList.firstChild);
        this.appendList(proObject.projectListPremium, true);
        this.appendList(proObject.projectList1, false);
    // proObject.projectList1
    }
    connect(url) {
        var applyButton = document.getElementById("connectBTN");
        applyButton.addEventListener("click", function() {
            window.open(url);
        });
    }
    remove(index) {
        proObject.projectList1.splice(index, 1);
        this.updateProject();
    }
}

//# sourceMappingURL=index.e78faa8c.js.map
