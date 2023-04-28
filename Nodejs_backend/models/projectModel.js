const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required : [true, "Please add the project name"]
    },
    faculty: {
        type: String,
        required : [true, "Please add the professor name"]
    },
    university: {
        type: String,
        required : [true, "Please add university name"]
    },
    deadline: {
        type: String,
        required : [true, "Please add the deadline"]
    },
    fields: {
        type: String,
        required : [true, "Please add the fileds"]
    },
    detail: {
        type: String,
        required : [false]
    }
}, {
    timestamp: true
});

module.exports = mongoose.model("Project",projectSchema);