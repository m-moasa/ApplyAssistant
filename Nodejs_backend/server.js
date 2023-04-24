const express = require("express");
const connectDb = require("./config/dbConnections");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const path = '/api/projects';
connectDb();
const app = express();

app.use(express.json());

app.use('/api/projects',require('./routes/projectRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});


// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if (req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }
// });

// server.listen(3000);
// console.log('Listening on port 3000...'); 