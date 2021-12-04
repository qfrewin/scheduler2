const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/scheduler', {
  useNewUrlParser: true
});

// SCHEMAS
const settingSchema = new mongoose.Schema({
  mainColor: String,
  firstAlternate: String,
  secondAlternate: String,
});

const rotationSchema = new mongoose.Schema({
  rotationName: String,
})

const assignmentSchema = new mongoose.Schema({
  assignmentName: String,
})

const employeeSchema = new mongoose.Schema({
  employeeName: String,
})


const Setting = mongoose.model('Setting', settingSchema);
const Rotation = mongoose.model('Rotation', rotationSchema);
const Assignment = mongoose.model('Assignment', assignmentSchema);
const Employee = mongoose.model('Employee', employeeSchema);

// Post a new setting
/*
app.post("/api/settings ", async (req, res) => {
  console.log("running post");
  const setting = new Setting({
    mainColor: req.body.mainColor,
    //firstAlternate: req.body.firstAlternate,
    //secondAlternate: req.body.secondAlternate,
  });
  try {
    await setting.save();
    res.send(setting);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});*/

// Gets a list of all settings
app.get('/api/settings', async (req, res) => {
  try {
    let settings = await Setting.find();
    res.send(settings);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a setting
app.delete('/api/settings/:id', async (req, res) => {
  try {
    await Setting.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// posts to settings db
app.post("/api/settings", async (req, res) => {
  const setting = new Setting({
    mainColor: req.body.mainColor,
    firstAlternate: req.body.firstAlternate,
    secondAlternate: req.body.secondAlternate
  });
  setting.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST request to /api/settings",
    createdSetting: setting
  });
});

app.put('/api/settings/', async (req, res) => {
  try {
    let setting = await Setting.findOne();
    setting.mainColor = req.body.mainColor;
    setting.firstAlternate = req.body.firstAlternate;
    setting.secondAlternate = req.body.secondAlternate;
    setting.save();
    res.send(setting);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Gets a list of all rotations
app.get('/api/rotations', async (req, res) => {
  try {
    let rotations = await Rotation.find();
    res.send(rotations);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a rotation
app.delete('/api/rotations/:id', async (req, res) => {
  try {
    await Rotation.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// posts to rotations db
app.post("/api/rotations", async (req, res) => {
  const rotation = new Rotation({
    rotationName: req.body.rotationName,
  });
  rotation.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST request to /api/rotations",
    createdRotation: rotation
  });
});

// edits a rotation
app.put('/api/rotations/:id', async (req, res) => {
  try {
    let rotation = await Rotation.findOne({ _id: req.params.id });
    rotation.rotationName = req.body.rotationName;
    rotation.save();
    res.send(rotation);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Gets a list of all assignments
app.get('/api/assignments', async (req, res) => {
  try {
    let assignments = await Assignment.find();
    res.send(assignments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an assignment
app.delete('/api/assignments/:id', async (req, res) => {
  try {
    await Assignment.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// posts to assignments db
app.post("/api/assignments", async (req, res) => {
  const assignment = new Assignment({
    assignmentName: req.body.assignmentName,
  });
  assignment.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST request to /api/assignments",
    createdAssignment: assignment
  });
});

// edits a assignment
app.put('/api/assignments/:id', async (req, res) => {
  try {
    let assignment = await Assignment.findOne({ _id: req.params.id });
    assignment.assignmentName = req.body.assignmentName;
    assignment.save();
    res.send(assignment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Gets a list of all employees
app.get('/api/employees', async (req, res) => {
  try {
    let employees = await Employee.find();
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete an employee
app.delete('/api/employees/:id', async (req, res) => {
  try {
    await Employee.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// posts to employees db
app.post("/api/employees", async (req, res) => {
  const employee = new Employee({
    employeeName: req.body.employeeName,
  });
  employee.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST request to /api/employees",
    createdEmployee: employee
  });
});

// edits an employee
app.put('/api/employees/:id', async (req, res) => {
  try {
    let employee = await Employee.findOne({ _id: req.params.id });
    employee.employeeName = req.body.employeeName;
    employee.save();
    res.send(employee);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3300, () => console.log('Server listening on port 3300!'));
