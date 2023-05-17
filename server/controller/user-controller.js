const Programme = require("../schemas/programSchema");
const Session = require("../schemas/sessionSchema");

// Get all users
exports.checkSchema = (request,response) => {
    console.log(request);
    Programme.find(request.body)
    .then(res => {
        console.log(res);
    })
}
exports.getUserStatus = (request, response) => {
    Programme.find({ coursename: {$eq : request.body.course }} )
    .then((res) => {
        if(res.length !== 0){
            return response.status(200).json({ value: true });
        } else {
            return response.status(200).json({ value: false });
        }
    })
    .catch((error)=>{
        response.status(404).json({ message: error.message })
    })
}

exports.getUsers = (request, response) => {
    console.log(request.body);
    Programme.find({ coursecode: {$eq : request.body.courseCode }} )
    .then((res) => {
        return response.status(200).json(res);
    })
    .catch((error)=>{
        response.status(404).json({ message: error.message })
    })
}

// Save data of the user in database
exports.addUser = (request, response) => {
    const program = request.body;

    const newProgram = new Programme(program);
    console.log(newProgram);
    newProgram.save()
    .then((res) => {
        console.log("data submitted");
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

// Get a user by id
exports.getUserById = (request, response) => {
    Session.findById(request.params.id)
    .then((res) => {
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

// Save data of edited user in the database
exports.editUser = (request, response) => {
    let user = request.body;
    console.log(user);
    const editUser = new Session(user);
    console.log(editUser);
    Session.updateOne({_id: request.params.id}, editUser)
    .then((res) => {
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

// deleting data of user from the database
exports.deleteUser = (request, response) => {
    Session.deleteOne({_id: request.params.id})
    .then((res) => {
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

///stdent Code Outcome functions////

exports.addCOofUsers = (request , response) => {
    const newCO = request.body;

    const newSession = new Session(newCO);
    newSession.save()
    .then((res) => {
        console.log("data submitted");
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}



exports.getCOdata = (request, response) => {
    console.log(request.body);
    Session.find({ year: {$eq : request.body.year }} )
    .then((res) => {
        return response.status(200).json(res);
    })
    .catch((error)=>{
        response.status(404).json({ message: error.message })
    })
}