const mongoose = require("mongoose");
// const autoIncrement = require('mongoose-auto-increment')

const sessionSchema = mongoose.Schema({
  _id: String,
  year: String,
  coursecode: String,
  name: String,
  rollno: String,
  test1: {
    CO1: Number,
    CO2: Number,
    CO3: Number,
    CO4: Number,
    CO5: Number,
  },
  test2: {
    CO1: Number,
    CO2: Number,
    CO3: Number,
    CO4: Number,
    CO5: Number,
  },
  test3: {
    CO1: Number,
    CO2: Number,
    CO3: Number,
    CO4: Number,
    CO5: Number,
  },
  test4: {
    CO1: Number,
    CO2: Number,
    CO3: Number,
    CO4: Number,
    CO5: Number,
  },
});

// autoIncrement.initialize(mongoose.connection);
// sessionSchema.plugin(autoIncrement.plugin, 'session');
// we need to turn it into a model
const Session = mongoose.model("session", sessionSchema);

module.exports = Session;
