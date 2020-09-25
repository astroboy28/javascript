// Function to check validity of parameters

function checkParamsValidity(time1, unit1, time2, unit2) {
  
    function checkTypeof(value, type){
      return typeof(value) === type;
    }
    // Return false if the type of parameters is wrong
    if ((checkTypeof(time1, "number") &&
         checkTypeof(unit1, "string") &&
         checkTypeof(time2, "number") &&
         checkTypeof(unit2, "string")) === false){
           
         console.log("Parameters are of wrong type.");
         return false;
         }
    
    // Check if the units are correct
    if ((checkUnits(unit1) &&
         checkUnits(unit2)) === false){
      
         console.log("Labels are invalid.");
         return false;
    }
    
    // Check if values are positive integers
    if (time1 < 0 ||
        time2 < 0 ||
       Number.isInteger(time1) === false ||
       Number.isInteger(time2) === false){
      
      console.log("Values are not a positive integer");
      return false;
    }
    
    // Check plurality
    if ((checkPlurality(time1, unit1) &&
         checkPlurality(time2, unit2)) === false){
      
      console.log("Value and label mismatch");
      return false;
    }
    
    return true;
  }
  
  // const value1 = 60;
  // const label1 = "minutes";
  // const value2 = 160;
  // const label2 = "seconds";
  // console.log(checkParamsValidity(time1, unit1, time2, unit2));
  
  function checkTypeof(value, type){
    return typeof(value) === type;
  }
  
  function checkUnits(unit){
    switch(unit.toLowerCase()){
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
        case "second":
        case "minute":
        case "hour":
        case "day":
            return true;
            break;
          default:
            return false;
            break;
    }
    return false;
  }
  
  
  function checkPlurality(value, unit){
    switch(unit.toLowerCase()){ 
       case "seconds":
       case "minutes":
       case "hours":
       case "days":
        if (value !== 1){
          return true;
        }
        break;
       
       case "second":
       case "minute":
       case "hour":
       case "day":
        if (value === 1){
          return true;
        }
        break;
        
      default:
        break;
    }
    return false;
  }
  
  // Function to convert Days or Hours or Minutes to Seconds
  
  function convertToSeconds(time, unit){
    switch(unit.toLowerCase()){
      case "seconds":
      case "second":
        return true;
        break;
        
      case "minutes":
      case "minute":
        return time * 60;
        break;
        
      case "hours":
      case "hour":
        return time * 3600;
        break;
        
      case "days":
      case "day":
        return time * 86400;
        break;
        
      default:
        return 0;
        break;
        
    }
    return 0;
  }
  
  //console.log(convertToSeconds(3.5, "hour"));
  
  
  function convertSecondsToUnits(seconds, unit){
    switch(unit.toLowerCase()){
      case "seconds":
      case "second":
        return seconds;
        break;
        
      case "minutes":
      case "minute":
        return Math.floor(seconds / 60);
        break;
        
      case "hours":
      case "hour":
        return Math.floor(seconds / 3600);
        break;
        
      case "days":
      case "day":
        return Math.floor(seconds / 86400);
        break;
        
      default:
        return 0;
        break;
        
    }
    return 0;
  }
  
  //console.log(convertSecondsToUnits(3600, "minutes"));
  
  // Convert seconds to days, hours, minutes and seconds
  // The result is stored in a Time object
  
  function convertSecondsToAllUnits(seconds, unit, time){
    switch(unit.toLowerCase()){
      case "seconds":
      case "second":
        time.seconds = seconds;
        break;
        
      case "minutes":
      case "minute":
        time.minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        convertSecondsToAllUnits(seconds, "seconds", time);
        break;
        
      case "hours":
      case "hour":
        time.hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;
        convertSecondsToAllUnits(seconds, "minutes", time);
        break;
        
      case "days":
      case "day":
        time.days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;
        convertSecondsToAllUnits(seconds, "hours", time);
        break;
        
      default:
        break;
        
    }
  }
  
  
  
  function Time(){
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    
    this.checkLargestLabel = () => {
      if(this.seconds !== 0){
        return "seconds";
      } else if(this.minutes !== 0){
        return "minutes;"
      } else if(this.hours !== 0){
        return "hours";
      } else {
        return "days";
      }
      return "seconds";
    }
    
    this.reset = () => {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
    
    this.display = () => {
      console.log("Days: " + this.days);
      console.log("Hours: " + this.hours);
      console.log("Minutes: " + this.minutes);
      console.log("Seconds: " + this.seconds);
    }
  }
  
  //const value1 = 60;
  //const label1 = "Minutes";
  //const value2 = 3;
  //const label2 = "Hours";
  
  //var timeObject = new Time();
  //const seconds = convertToSeconds(value1, label1) + convertToSeconds(value2, label2);
  //convertSecondsToAllUnits(seconds, "days", timeObject);
  //timeObject.display();
  //console.log(timeObject.checkLargestLabel());
  
  function assignUnit(time, unit){
    
    if(time === 1){
      switch(unit.toLowerCase()){
        case "seconds":
        case "second":
          return "second";
          break;
          
        case "minutes":
        case "minute":
          return "minute";
          break;
          
        case "hours":
        case "hour":
          return "hour";
          break;
          
        case "days":
        case "day":
          return "day";
          break;
          
        default:
          break;
      }
    } else {
      
        switch(unit.toLowerCase()){
        case "seconds":
        case "second":
          return "seconds";
          break;
          
        case "minutes":
        case "minute":
          return "minutes";
          break;
          
        case "hours":
        case "hour":
          return "hours";
          break;
          
        case "days":
        case "day":
          return "days";
          break;
          
        default:
          break;
      }
    } 
    return "";
  }
  
  //console.log(assignUnit(10, "second"));
  
  
  function timeAdder(value1, label1, value2, label2) {
    // Check errors in parameters
    if (checkParamsValidity(value1, label1, value2, label2) === false){
      console.log("Errors in input");
      return false;
    }
    
    // Convert time into seconds and add them
    const totalSeconds = convertToSeconds(value1, label1) + convertToSeconds(value2, label2);
    console.log(totalSeconds);
    
    //Extra credits
    //Check the final time and use the largest label
    let time = new Time();
    convertSecondsToAllUnits(totalSeconds, "days", time);
    const largestLabel = time.checkLargestLabel();
    
    // Calculate the final time and the units
    const finalTime = convertSecondsToUnits(totalSeconds, largestLabel);
    const finalUnit = assignUnit(finalTime, largestLabel);
    
    return[finalTime, finalUnit];
  }
  
  ////////////////////////////////
  
  const value1 = 24;
  const label1 = "hours";
  const value2 = 24;
  const label2 = "hours";
  console.log(timeAdder(value1, label1, value2, label2));
  
  
  
  
  
  
  
  
  
  
  
  