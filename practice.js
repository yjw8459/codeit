

var a = 1;

function outer(){
    console.log(a);
    function inner(){
        console.log(a);
        var a = 3;
    }
    var a = 2;
}

outer();