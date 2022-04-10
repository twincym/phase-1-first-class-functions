
function returnsANamedFunction(){
    return function callback(){}
}

function returnsAnAnonymousFunction() {
    return function(){}
}

function receivesAFunction(callback){
    returnsANamedFunction();
    callback()
}

