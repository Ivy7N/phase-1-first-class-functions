const receivesAFunction = (callback) => {
    
    callback();
  };

const returnsANamedFunction = () => {
    function namedFunction() {
        console.log("This is a named function.");
    }
    return namedFunction;
};

const returnsAnAnonymousFunction = () => {
    // Return an anonymous function
    return () => {
      console.log("This is an anonymous function.");
    };
};


module.exports = {
    receiveAFunction,
    returnsANamedFunction,
    returnAnAnonyomousFunction,
};
