function receivesAFunction(callback) {
    callback();
}
function callback() {
    console.log("Anything");
  }  
  receivesAFunction();
    
  function returnsANamedFunction() {
    
    function namedFunction() {
      
    }
    return namedFunction;
  }
  
function returnsAnAnonymousFunction(){
    return function(){
    }
}
    
 
  