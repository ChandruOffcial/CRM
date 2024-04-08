const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Leave subdocument schema
const LeaveSchema = new Schema({
	leaveDate: Date,
	from: {
		hours: Number,
		min: Number,
	},
	to: {
		hours: Number,
		min: Number,
	},
	action: String,
});

// Define the Attendance subdocument schema
const AttendanceSchema = new Schema({
	timeIn: {
		hours: Number,
		min: Number,
	},
	timeOut: {
		hours: Number,
		min: Number,
	},
	permission: String,
});

// Define the Duration subdocument schema
const DurationSchema = new Schema({
	day: Number,
	hours: Number,
	min: Number,
});

// Define the Project subdocument schema
const ProjectSchema = new Schema({
	projectName: String,
	task: String,
	completedBy: String,
	duration: DurationSchema,
});

// Define the Employee schema
const EmployeeSchema = new Schema({
	userId: String,
	userName: String,
	emailId: String,
	designation: String,
	salary: Number,
	photo: String,
	certificate: String,
	leave: [LeaveSchema],
	attendance: [AttendanceSchema],
	project: [ProjectSchema],
});

// Create and export the Employee model
const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
