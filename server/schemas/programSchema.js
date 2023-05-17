const mongoose = require("mongoose")
// const autoIncrement = require('mongoose-auto-increment')


const programmeSchema = mongoose.Schema({
    _id: String,
    programme: String,
    coursename: String,
    branchname: String,
    courseinstructorname: String,
    semester: Number,
    coursecode: String,
});

// autoIncrement.initialize(mongoose.connection);
// programmeSchema.plugin(autoIncrement.plugin, 'program');

const Programme = mongoose.model('program', programmeSchema);

module.exports = Programme;
