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

const settingSchema = new mongoose.Schema({
  mainColor: String,
  firstAlternate: String,
  secondAlternate: String,
});

const Setting = mongoose.model('Setting', settingSchema);

app.post("/api/settings ", async (req, res) => {
  console.log("running post");
  const setting = new Setting({
    mainColor: req.body.mainColor,
    firstAlternate: req.body.firstAlternate,
    secondAlternate: req.body.secondAlternate,
  });
  try {
    await setting.save();
    res.send(setting);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3300, () => console.log('Server listening on port 3300!'));
