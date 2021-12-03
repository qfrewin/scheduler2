<template>

<div class="cell"
  v-bind:style="{backgroundColor: cellBackgroundColor(col)}"
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
  name: 'AssignmentCell',

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
      this.inputText = this.getDisplayValue(event.target.value);
      this.$emit('valueChanged', this.inputText);

    },

    cellBackgroundColor(number) {
      var color = "transparent";
      if (this.cellValue != "") {
        var index = number - 1;
        color = this.classes[index].color;
      }
      return color;
    },

    getDisplayValue(value) {
      if (value != "") {
        const words = value.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        value = words.join(" ");
      }

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
