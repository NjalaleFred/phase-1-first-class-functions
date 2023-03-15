function receivesAFunction(callback){
    callback("Hi");
}
receivesAFunction();

function returnsANamedFunction(){
   return function named(){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}