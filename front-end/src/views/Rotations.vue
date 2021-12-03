<template>
<div>
  <div class="table-title">
    <h1>Rotations Page</h1>
  </div>
  <div class="current-table-container">
    <div class="current-table">
      <RotationsPage :classes="classes" :tableColors="tableColors" :table="table"/>
    </div>
  </div>
</div>

</template>

<script>
  import RotationsPage from "../components/RotationsPage.vue";

  export default {
    name: 'Rotations',

    components: {
      RotationsPage
    },

    computed: {
      classes() {
        return this.$root.$data.classes;
      },
      tableColors() {
        return this.$root.$data.tableColors;
      },
      table() {
        return this.$root.$data.tables.rotationTable;
      }
    }
  }

</script>

<style>

.current-table-container {
  display: flex;
  overflow: hidden;
  width: 100vw;
}

.table-title {
  width: 100vw;
  padding: 10px;
  color: #2c3e50;
}

</style>
