<template>
<div>
  <div class="table-title">
    <h1>Assignments Page</h1>
  </div>
  <div class="current-table-container">
    <div class="current-table">
      <AssignmentsPage :classes="classes" :tableColors="tableColors" :table="table"/>
    </div>
  </div>
</div>

</template>

<script>
  import AssignmentsPage from "../components/AssignmentsPage.vue";

  export default {
    name: 'Assignments',

    components: {
      AssignmentsPage
    },

    computed: {
      classes() {
        return this.$root.$data.classes;
      },
      tableColors() {
        return this.$root.$data.tableColors;
      },
      table() {
        return this.$root.$data.tables.assignmentTable;
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
