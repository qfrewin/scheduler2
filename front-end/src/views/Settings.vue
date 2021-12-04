<template>
<div class="page">
<div class="settings-container">

  <div class="page-title">
    <h1>Settings</h1>
  </div>
  <br>
<!--
  <div class="general-container">
    <h2>General Settings</h2>
    <div class="user-inputs">
      <h3>Main Color</h3>
      <div class="user-fields">
        <input v-model="mainColor" placeholder="Enter hex code"/>
      </div>
      <h3>First Alternate</h3>
      <div class="user-fields">
        <input v-model="firstAlternate" placeholder="Enter hex code"/>
      </div>
      <h3>Second Alternate</h3>
      <div class="user-fields">
        <input v-model="secondAlternate" placeholder="Enter hex code"/>
      </div>
      <button @click="updateTableColors">Save</button>
    </div>
  </div>
  <br>
-->
  <div class="rotations-container">
    <h2>Rotations Settings</h2>
    <div class="user-inputs">
      <h3>Rotation Names</h3>
      <div class="user-fields">
        <input v-model="rotationName" placeholder="Enter rotation name"/>
        <p></p>
        <button @click="uploadRotation">Add</button>
      </div>
    </div>
    <div class="display-list">
      <div class="list-title">
        <p>Current Rotations</p>
      </div>
      <div class="item" v-for="rotation in rotations" :key="rotation.id">
        <input v-model="rotation.rotationName"></input>
        <div>
          <button @click="editRotation(rotation, rotation.rotationName)">Update</button>
          <button @click="deleteRotation(rotation)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="assignments-container">
    <h2>Assignments Settings</h2>
    <div class="user-inputs">
      <h3>Assignment Names</h3>
      <div class="user-fields">
        <input v-model="assignmentName" placeholder="Enter assignment name"/>
        <p></p>
        <button @click="uploadAssignment">Add</button>
      </div>
    </div>
    <div class="display-list">
      <div class="list-title">
        <p>Current Assignments</p>
      </div>
      <div class="item" v-for="assignment in assignments" :key="assignment.id">
      <input v-model="assignment.assignmentName"></input>
        <div>
          <button @click="editAssignment(assignment, assignment.assignmentName)">Update</button>
          <button @click="deleteAssignment(assignment)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="schedules-container">
    <h2>Schedule Settings</h2>
    <div class="user-inputs">
      <h3>Employee Names</h3>
      <div class="user-fields">
        <input v-model="employeeName" placeholder="Enter employee name"/>
        <p></p>
        <button @click="uploadEmployee">Add</button>
      </div>
    </div>
    <div class="display-list">
      <div class="list-title">
        <p>Current Employees</p>
      </div>
      <div class="item" v-for="employee in employees" :key="employee.id">
      <input v-model="employee.employeeName"></input>
      <div>
        <button @click="editEmployee(employee, employee.employeeName)">Update</button>
        <button @click="deleteEmployee(employee)">Delete</button>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Settings',
    data() {
      return {
        mainColor: "", //"#0abab4",
        firstAlternate: "", //"white",
        secondAlternate: "", //"#def4f4",
        rotationName: "",
        assignmentName: "",
        employeeName: "",
        addSetting: null,
        addRotation: null,
        addAssignment: null,
        addEmployee: null,
        settings: [],
        rotations: [],
        assignments: [],
        employees: [],
        color: null,
      }
    },
    methods: {
    /*
      defaultColors() {
        if (this.mainColor == "") {
          this.mainColor = "#0abab4";
        }
        if (this.firstAlternate == "") {
          this.firstAlternate = "white";
        }
        if (this.secondAlternate == "") {
          this.secondAlternate = "#def4f4";
        }
      },
      */
      async updateTableColors() {
        try {
          await axios.put("/api/settings", {
            mainColor: this.mainColor,
            firstAlternate: this.firstAlternate,
            secondAlternate: this.secondAlternate
          });
          this.getColor();
          console.log(this.color);
        } catch (error) {
          console.log(error);
        }
      },

      async upload() {
        try {
          let r1 = await axios.post("/api/settings ", {
            mainColor: this.mainColor,
            firstAlternate: this.firstAlternate,
            secondAlternate: this.secondAlternate
          });
          this.addSetting = r1.data;
          this.getSettings();
        } catch (error) {
          console.log(error);
        }
      },
      async uploadRotation() {
        try {
          let r1 = await axios.post("/api/rotations ", {
            rotationName: this.rotationName,
          });
          this.addRotation = r1.data;
          this.getRotations();
        } catch (error) {
          console.log(error);
        }
      },
      async uploadAssignment() {
        try {
          let r1 = await axios.post("/api/assignments ", {
            assignmentName: this.assignmentName,
          });
          this.addAssignment = r1.data;
          this.getAssignments();
        } catch (error) {
          console.log(error);
        }
      },
      async uploadEmployee() {
        try {
          let r1 = await axios.post("/api/employees ", {
            employeeName: this.employeeName,
          });
          this.addEmployee = r1.data;
          this.getEmployees();
        } catch (error) {
          console.log(error);
        }
      },

      async deleteSetting(setting) {
        try {
          await axios.delete("/api/settings/" + setting._id);
          this.getSettings();
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteRotation(rotation) {
        try {
          await axios.delete("/api/rotations/" + rotation._id);
          this.getRotations();
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteAssignment(assignment) {
        try {
          await axios.delete("/api/assignments/" + assignment._id);
          this.getAssignments();
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      async deleteEmployee(employee) {
        try {
          await axios.delete("/api/employees/" + employee._id);
          this.getEmployees();
          return true;
        } catch (error) {
          console.log(error);
        }
      },

      async getSettings() {
        try {
          let response = await axios.get("/api/settings");
          this.settings = response.data;
          return true
        } catch (error) {
          console.log(error);
        }
      },
      async getRotations() {
        try {
          let response = await axios.get("/api/rotations");
          this.rotations = response.data;
          return true
        } catch (error) {
          console.log(error);
        }
      },
      async getAssignments() {
        try {
          let response = await axios.get("/api/assignments");
          this.assignments = response.data;
          return true
        } catch (error) {
          console.log(error);
        }
      },
      async getEmployees() {
        try {
          let response = await axios.get("/api/employees");
          this.employees = response.data;
          return true
        } catch (error) {
          console.log(error);
        }
      },
      async getColor() {
        try {
          let response = await axios.get("/api/settings");
          this.color = response.data;
          //this.mainColor = response.data.mainColor;
          //this.firstAlternate = response.data.firstAlternate;
          //this.secondAlternate = response.data.secondAlternate;
          return true;
        } catch(error) {
          console.log(error);
        }
      },


      async editRotation(rotation, value) {
        try {
          await axios.put("/api/rotations/" + rotation._id, {
            rotationName: value
          });
          this.getRotations();
        } catch (error) {
          console.log(error);
        }
      },
      async editAssignment(assignment, value) {
        try {
          await axios.put("/api/assignments/" + assignment._id, {
            assignmentName: value
          });
          this.getAssignments();
        } catch (error) {
          console.log(error);
        }
      },
      async editEmployee(employee, value) {
        try {
          await axios.put("/api/employees/" + employee._id, {
            employeeName: value
          });
          this.getEmployees();
        } catch (error) {
          console.log(error);
        }
      },

    },

    created() {
      this.getSettings();
      this.getRotations();
      this.getAssignments();
      this.getEmployees();
      this.getColor();
    }
  }

</script>

<style scoped>
@media only screen and (max-width: 650px) {
  input {
    border: black 1px solid;
    font-size: .8em;
    margin: 3px;
    padding: 2px;
    border-radius: 4px;
  }

  .page {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 20px;
    line-height: 1.8em;
  }

  .settings-container {
    background-color: #daf5f4;
    width: 95%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 5%;
  }

  .display-list {
    border: 1px #737373 solid;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: #a9e7e5;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-top: 15px;
  }

  .user-inputs {

  }

  .user-fields {
    display: flex;
    display-direction: row;
    margin-bottom: 5px;
  }

  button {
    padding: 3px;
    background-color: #0abab4;
    font-size: .8em;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    padding: 4px;
  }

  button:hover {
    background-color: #00dede;
  }

  h2 {
    margin-bottom: 5px;
  }
  h3 {
    margin-bottom: -4px;
  }

  .list-title {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media only screen and (min-width: 651px) {
  input {
    border: black 1px solid;
    font-size: .8em;
    margin: 3px;
    padding: 2px;
    border-radius: 4px;
  }

  .general-container,
  .rotations-container,
  .assignments-container,
  .schedules-container {
    padding: 30px;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .page-title {
    width: 100%;
    text-align: center;

  }

  .page {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 20px;
    line-height: 1.8em;
  }

  .settings-container {
    background-color: #daf5f4;
    width: 95%;
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 2%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .display-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px #737373 solid;
    border-radius: 10px;
    background-color: #a9e7e5;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-top: 15px;
  }

  .display-list-title {
    display: flex;
    width: 100%;
  }

  .user-inputs {

  }

  .user-fields {
    display: flex;
    display-direction: row;
    margin-bottom: 5px;
  }

  button {
    padding: 3px;
    background-color: #0abab4;
    font-size: .8em;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    padding: 4px;
  }

  button:hover {
    background-color: #00dede;
  }

  h2 {
    margin-bottom: 5px;
  }
  h3 {
    margin-bottom: -4px;
  }

  .list-title {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .item {

  }
}

@media only screen and (min-width: 1001px) {
  input {
    border: black 1px solid;
    font-size: .8em;
    margin: 3px;
    padding: 2px;
    border-radius: 4px;
  }

  .general-container,
  .rotations-container,
  .assignments-container,
  .schedules-container {
    padding: 30px;
    width: 33%;
    display: flex;
    flex-direction: column;
  }

  .page-title {
    width: 100%;
    text-align: center;

  }

  .page {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 20px;
    line-height: 1.8em;
  }

  .settings-container {
    background-color: #daf5f4;
    width: 95%;
    display: flex;
    flex-direction: row;
    text-align: left;
    padding: 2%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .display-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    border: 1px #737373 solid;
    border-radius: 10px;
    background-color: #a9e7e5;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-top: 15px;
    justify-content: space-between;
  }

  .display-list-title {
    display: flex;
    width: 100%;
  }

  .user-inputs {

  }

  .user-fields {
    display: flex;
    display-direction: row;
    margin-bottom: 5px;
  }

  button {
    padding: 3px;
    background-color: #0abab4;
    font-size: .8em;
    font-weight: bold;
    border-radius: 5px;
    margin: 5px;
    padding: 4px;
  }

  button:hover {
    background-color: #00dede;
  }

  h2 {
    margin-bottom: 5px;
  }
  h3 {
    margin-bottom: -4px;
  }

  .list-title {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .item {

  }
}
</style>
