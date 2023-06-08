const mongoose = require("mongoose");
const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the project name"],
    },
    faculty: {
      type: String,
      required: [true, "Please add the professor name"],
    },
    university: {
      type: String,
      required: [true, "Please add university name"],
    },
    deadline: {
      type: String,
      required: [true, "Please add the deadline"],
    },
    fields: {
      type: String,
      required: [true, "Please add the fileds"],
    },
    detail: {
      type: String,
      required: [false],
    },
    email: {
      type: String,
      required: [true, "Please add your email address"],
    },
    summary: {
      type: String,
      required: [false],
    },
    requiredDocs: {
      type: String,
      required: [false],
    },
    isPremium: {
      type: Boolean,
      required: [false],
    },
    hasReqPremium: {
      type: Boolean,
      required: [false],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
