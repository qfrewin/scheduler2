<template>

<div class="cell"
  v-bind:style="{backgroundColor: cellBackgroundColor(cellValue)}"
  >
  <input type="text"
    :value='cellValue'
    v-on:keyup.enter="updateValue"
    v-on:blur="updateValue"
    >
  </input>
</div>

</template>

<script>

export default {
  name: 'RotationCell',

  data() {
    return {
      inputText: '',
      bgc: {
        backgroundColor: "transparent"
      }
    }
  },

  props: {
    cellValue: String,
    row: Number,
    col: Number,
    tableColors: Object,
  },

  methods: {
    updateValue(event) {
      console.log("ran updateValue()");
      this.inputText = this.getDisplayValue(event.target.value);
      this.$emit('valueChanged', this.inputText);

    },

    cellBackgroundColor(value) {
      var color = "transparent";
      value = value.toLowerCase();

      if (value != "") {
        var index = this.classes.findIndex(obj => obj.name.toLowerCase() == value);
        if (index < 0) {
          index = this.classes.findIndex(obj => obj.abbreviation.toLowerCase() == value);
        }
        if (index < 0) {
          index = this.classes.findIndex(obj => obj.displayName.toLowerCase() == value);
        }
        if (index != -1) {
          color = this.classes[index].color;
        }
      }
      return color;
    },

    getDisplayValue(value) {
      if (value == "") {
        return value;
      }
      value = value.toLowerCase();
      if (value != "") {
        var index = this.classes.findIndex(obj => obj.name.toLowerCase() == value);
        if (index < 0) {
          index = this.classes.findIndex(obj => obj.abbreviation.toLowerCase() == value);
        }

        if (index != -1) {
          var disName = this.classes[index].displayName;
          if (disName != "") {
            value = disName;
          }
        }
      }

      const words = value.split(" ");
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      value = words.join(" ");

      return value;
    }
  },

  computed: {
    classes() {
      return this.$root.$data.classes;
    },


  }
}

</script>

<style scoped>

input {
  text-align: center;
  margin:0;
  display: block;
  height: 100%;
  font-size: 14px;
  background-color:transparent;
  padding: 2px;
}

input:focus, textarea:focus, select:focus{
  outline: none;
}

</style>
