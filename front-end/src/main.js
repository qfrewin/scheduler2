import Vue from 'vue'
import App from './App.vue'
import router from './router'

import classInfo from './class-info.js'
import locationInfo from './location-info.js'
import employeeInfo from './employee-info.js'
import settings from './general-settings.js'

let data = {
  classes: classInfo,
  locations: locationInfo,
  employees: employeeInfo,
  startTime: settings.startTime,
  endTime: settings.endTime,
  block: settings.block,
  timeBlocks: settings.timeBlocks,
  tableColors: settings.tableColors,
  tables: {
    rotationTable: createTable(locationInfo),
    assignmentTable: createTable(classInfo),
    scheduleTable: createTable(employeeInfo, 1),
  }
}



function createTable(array, spacer = 0) {
  var result = [];

  var head = [];
  head.push({name: ""});
  for (let i = 0; i < array.length; i++) {
    head.push(array[i]);
    for (let j = 0; j < spacer; j++) {
      head.push({name: ""});
    }
  }
  result.push(head);

  for (let i = 0; i < settings.timeBlocks.length; i++) {
    var row = [];
    for (let j = 0; j < array.length + 1; j++) {
      if (j == 0) {
        //var id = "r" + i.toString() + "c" + j.toString();
        row.push({name: settings.timeBlocks[i]})
      }
      else {
        row.push({name: ""});
        for (var k = 0; k < spacer; k++) {
          row.push({name: ""});
        }
      }
    }
    result.push(row);
  }
  return result;
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

/*
let item = settings.findone();
let var2 = item.array//name of the actual Array
modify
item.array = var2
item.save
*/
