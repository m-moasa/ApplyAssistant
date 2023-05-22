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
constructor(projectList) {
  this.projectList = projectList;

  
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
