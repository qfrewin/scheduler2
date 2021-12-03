<template>
  <div class="settings-container">
    <div class="page-title">
      <h1>Settings</h1>
    </div>
    <div class="user-inputs">
      <h3>Main Color</h3>
      <input v-model="mainColor" placeholder="Enter hex code"/>

      <h3>First Alternate Color</h3>
      <input v-model="firstAlternate" placeholder="Enter hex code"/>

      <h3>Second Alternate Color</h3>
      <input v-model="secondAlternate" placeholder="Enter hex code"/>

      <p></p>
      <button @click="upload">Save</button>
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
        addSetting: null,
      }
    },
    methods: {
      async upload() {
        console.log("started");
        try {
          let r1 = await axios.post("/api/settings ", {
            mainColor: this.mainColor,
            firstAlternate: this.firstAlternate,
            secondAlternate: this.secondAlternate
          });
          console.log("in try");
          this.addSetting = r1.data;
        } catch (error) {
          console.log(error);
        }
      }

    }
  }

</script>

<style>
  input {
    border: black 1px solid;
  }
</style>
