# AA http request links and formats for connecting to server

GET : send an empty request to http://localhost:5001/api/projects/

POST : send a request json with following format to http://localhost:5001/api/projects/

{
"name": "Name of the new project",
"faculty": "Name of the proffesot of the project",
"university": "University of origin",
"deadline" : "deadline of project",
"fields" : "fields of the project, as a string. for example: Bio, AI, NLP",
"detail" : "Any more detail on the project",
"email" : "Contact email address of professor",
"summary" : "Brief summary of project details",
"requiredDocs" : "Required documents for applying"
}

DELETE: send an empty request to http://localhost:5001/api/projects/:id , where id is the id of the project you want to delete
