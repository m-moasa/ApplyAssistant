const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    projName: {
        type: String,
        required : [true, "Please add the project name"]
    },
    profName: {
        type: String,
        required : [true, "Please add the professor name"]
    },
    email: {
        type: String,
        required : [true, "Please add the professor email address"]
    }
}, {
    timestamp: true
});

module.exports = mongoose.model("Project",projectSchema);