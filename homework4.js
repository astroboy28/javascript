const men = true;


function mortal(){
  if (men){
    return true;
  } else {
    return false;
  }
}

console.log(mortal());

const cakeFlavor = ["vanilla", "chocolate"];
const chocolate = true;
const message1 = "This is chocolate cake."
const message2 = "This is vanilla cake."

function thisCake(){
  if (cakeFlavor[1] && chocolate === false){
    return message1;
  } else {
    return message2;
  }
}


console.log(thisCake());