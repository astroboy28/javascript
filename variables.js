
/*
Hoisting is when variables defined with "let" or "const" (or var) are hoisted to the top
of the block, but not initialized until they are declared.
*/
console.log(userName);
let userName = "Mary";
//Although declared below the console.log(), let userName is undefined.

/*
 A variable is function-scoped and its value can be 
 re-assigned. It is accessible 
 anywhere inside a function, which can be problematic at times
 because it can be accessed or accidentaly re-assign a value
 even if it shouldn't be the case.
*/

function greet(){
    var greetUser = true;
    
    if (greetUser) {
      var userName = "Del";
      console.log("Welcome" + " " + userName);  
    }
    //console.log("Welcome" + " " + userName); 
  // userName variable can be accessed even here.
  }  
  
  greet();
  
  /*
   A const is just like a let. It is accessible only
   inside the block of code in a function. But it cannot be
   re-assigned and it should be given a value once declared.
  */
  
  function greet(){
    const USERNAME = "Takeshi";
    //USERNAME = "Shingo";  
    //reassigning a value to the const, this function will not work.
    if (true) {
      const USERNAME = "Riki";
      console.log("Welcome" + " " + USERNAME);  
    }
    console.log("Welcome" + " " + USERNAME); 
  // This function will output two instances of USERNAME const.
  }  
  
  greet();
  
  
  
  /*
   A let acts like a variable but unlike a variable, it is
   block-scoped, which means it cannot be accessed outside 
   the block of code inside a function. 
   */
  
  function greet(){
    let greetUser = true;
    
    if (greetUser) {
      let userName = "Del";
      console.log("Welcome" + " " + userName);  
    }
    //console.log("Welcome" + " " + userName); 
  // userName let at this point is "undefined" which will give an error.
  }  
  
  greet();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  