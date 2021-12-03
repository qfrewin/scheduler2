let startTime = "8:00 AM";
let endTime = "8:30 PM";
let block = 15;

let settings = {
  startTime: startTime,
  endTime: endTime,
  block: block,
  timeBlocks: generateTimeBlocks(startTime, endTime, block),
  tableColors: {
    head: "#0abab4",
    odd: "#ffffff",
    even: "#def4f4"
  }
}

function generateTimeBlocks(startTime, endTime, block) {
  startTime = TimeToInt(startTime);
  endTime = TimeToInt(endTime);
  var newTimes = [];

  var totalTimeDif = endTime - startTime;
  var size = (totalTimeDif / block) + 1;

  if (size % 1 != 0)  {
    console.log("Invalid block entry!");
    return -1;
  }

  for (let i = 0; i < size - 1; i++)  {
    newTimes.push(startTime + (i * block));
  }

  for (let i = 0; i < size - 1; i++)  {
    newTimes[i] = IntToTime(newTimes[i]);
  }

  return newTimes;
}

// Converts a time string to integer minutes
function TimeToInt(time)  {
  var timeArray = time.split(":");
  var indicatorArray = time.split(" ");
  var indicator = indicatorArray[1];
  var hour = parseInt(timeArray[0], 10);
  var minute = parseInt(timeArray[1], 10);
  var newTime = (hour * 60) + minute;

  if ((indicator == "PM") || (indicator == "pm") || (indicator == "Pm"))  {
    if (newTime < 720)  {
      newTime = newTime + 720;
    }
  }

  return newTime;
}

function IntToTime(minute)  {
  var indicator = "AM";

  if (minute >= 720 + 60)  {
    minute = minute - 720;
    indicator = "PM";
  } else if (minute >= 720)  {
    indicator = "PM";
  }
  var hour = Math.floor(minute / 60);
  var min = minute % 60;

  hour = hour.toString();
  min = min.toString();

  if (min.length < 2)  {
    min = "0" + min;
  }
  var newTime = hour + ":" + min + " " + indicator;

  return newTime;
}

export default settings;
