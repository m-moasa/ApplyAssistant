const position = {
  name:"projectName",
  email:"example@gmail.com",
  faculty :"facultyName",
  university:"university",
  deadline : "deadline",
  fields:"fields",
  detail:"detail" 
}
class proObject {
static projectList1=[];
static fieldFilter={ };
static  universityFilter={};
constructor(projectList,fieldFilter,universityFilter) {
  this.projectList = projectList;
  this.fieldFilter=fieldFilter;
  this.universityFilter=universityFilter;
  
}

async createProjectList(){
    var projectsList;
    this.url = "http://localhost:5001/api/projects/";
      await fetch(this.url)
      .then(res => res.json())
      .then(data => {
        projectsList = data;
      });
     
    proObject.projectList1 = projectsList;
    this.updateProject();

}

async sendFilterListsToBack(){
 // send the list to the back here this is the hash map to send : this.fieldFilter , this.universityFilter
  console.log(this.fieldFilter," fieldFilter");
  console.log(this.universityFilter," universityFilter");
}

CMU(){
  var checkbox = document.getElementById("CMUCheckbox");
  if (checkbox.checked) {
    this.universityFilter["CMU"]="true";
    console.log("CMU is checked.");
  } else {
    this.universityFilter["CMU"]="false";
    console.log("CMU is unchecked.");
    }
  
  this.sendFilterListsToBack()
}


Sharif(){
  var checkbox = document.getElementById("SharifCheckbox");
  if (checkbox.checked) {
    this.universityFilter["Sharif"]="true";
    console.log("Sharif is checked.");
  } else {
    this.universityFilter["Sharif"]="false";
    console.log("Sharif is unchecked.");
    }
  
  this.sendFilterListsToBack()
}

MIT(){
  var checkbox = document.getElementById("MITCheckbox");
  if (checkbox.checked) {
    this.universityFilter["MIT"]="true";
    console.log("CMITMU is checked.");
  } else {
    this.universityFilter["MIT"]="false";
    console.log("MIT is unchecked.");
    }
  
  this.sendFilterListsToBack()
}

WU(){
  var checkbox = document.getElementById("WUCheckbox");
  if (checkbox.checked) {
    this.universityFilter["WU"]="true";
    console.log("WU is checked.");
  } else {
    this.universityFilter["WU"]="false";
    console.log("WU is unchecked.");
    }
  
  this.sendFilterListsToBack()
}

Stanford(){
  var checkbox = document.getElementById("StanfordCheckbox");
  if (checkbox.checked) {
    this.universityFilter["Stanford"]="true";
    console.log("Stanford is checked.");
  } else {
    this.universityFilter["Stanford"]="false";
    console.log("Stanford is unchecked.");
    }
  
  this.sendFilterListsToBack()
}

Penn(){
  var checkbox = document.getElementById("PennCheckbox");
  if (checkbox.checked) {
    this.universityFilter["Penn"]="true";
    console.log("Penn is checked.");
  } else {
    this.universityFilter["Penn"]="false";
    console.log("Penn is unchecked.");
    }
  
  this.sendFilterListsToBack()
}

AI() {
  var checkbox = document.getElementById("AICheckbox");
  if (checkbox.checked) {
    this.fieldFilter["AI"]="true";
    console.log("ai is checked.");
  } else {
    this.fieldFilter["AI"]="false";
    console.log("ai is unchecked.");
    }
  
  this.sendFilterListsToBack()
  
}
SoftwareEngineering() {
  var checkbox = document.getElementById("SoftwareEngineeringCheckbox");
  if (checkbox.checked) {
    this.fieldFilter["SoftwareEngineering"]="true";
    console.log("SoftwareEngineering is checked.");
  } else {
    this.fieldFilter["SoftwareEngineering"]="false";
    console.log("SoftwareEngineering is unchecked.");
    }
  
  this.sendFilterListsToBack()

}
ML() {
  var checkbox = document.getElementById("MLCheckbox");
  if (checkbox.checked) {
    this.fieldFilter["ML"]="true";
    console.log("ML is checked.");
  } else {
    this.fieldFilter["ML"]="false";
    console.log("ML is unchecked.");
    }
  
  this.sendFilterListsToBack()

}
networks() {
  var checkbox = document.getElementById("networksCheckbox");
  if (checkbox.checked) {
    this.fieldFilter["networks"]="true";
    console.log("networks is checked.");
  } else {
    this.fieldFilter["networks"]="false";
    console.log("networks is unchecked.");
    }
  
  this.sendFilterListsToBack()

}
algorithms() {
  var checkbox = document.getElementById("algorithmsCheckbox");
  if (checkbox.checked) {
    this.fieldFilter["algorithms"]="true";
    console.log("algorithms is checked.");
  } else {
    this.fieldFilter["algorithms"]="false";
    console.log("algorithms is unchecked.");
    }
  
  this.sendFilterListsToBack()

}
Bioinformatics() {
  var checkbox = document.getElementById("BioinformaticsCheckbox");
  if (checkbox.checked) {
    this.fieldFilter["Bioinformatics"]="true";
    console.log("Bioinformatics is checked.");
  } else {
    this.fieldFilter["Bioinformatics"]="false";
    console.log("Bioinformatics is unchecked.");
    }
  
  this.sendFilterListsToBack()

}


addProject(project){
  console.log(project)
  proObject.projectList1.push(project);
  this.updateProject();
}

updateProject() {
  while(this.projectList.firstChild){
    this.projectList.removeChild(this.projectList.firstChild);
  }
    proObject.projectList1.forEach((project,index) => {
      const section = document.createElement("SECTION");
      section.classList.add("frame-section");

  
      const projectNameParent = document.createElement("DIV");
      projectNameParent.classList.add("project-name-parent");

      const projectName = document.createElement("B");
      projectName.classList.add("project-name");

      // const projectNameLine1 = document.createElement("P");
      // projectNameLine1.classList.add("project");
      // projectNameLine1.textContent = "Project";

      const projectNameLine2 = document.createElement("P");
      projectNameLine2.classList.add("project");
      projectNameLine2.textContent = project.name;

      // projectName.appendChild(projectNameLine1);
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

      project.detail.split('\n').forEach((line) => {
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
      applyButton.addEventListener("click", function () {
        var email1 = project.email;
        var subject1 = "Request for information on project " + project.name;
        var emailBody = "Dear " + project.faculty + ",\n\nI am interested in learning more about your " + project.name + " project. Can you please provide additional information about the project and the application process?\n\nThank you,\n[Your Name]";
        var url = "https://mail.google.com/mail/?view=cm&to=" + email1 + "&su=" + encodeURIComponent(subject1)+ "&body=" + encodeURIComponent(emailBody);
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

remove(index){
    proObject.projectList1.splice(index,1);
    this.updateProject();
}

}
