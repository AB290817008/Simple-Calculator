// function shahzal(a,b){

//     a=10;
//     b=20;
//     return b-b-a;

// }

// alert(shahzal());


// var eq =prompt("Enter eq");
// var ab1;

// for(var i=0; i<eq.length;i++){
//     if(eq.slice(i,i+1) ==="+"){
//         eq = +(eq.slice(0,i)) + +(eq.slice(i+1)) 
//         alert(eq);

//     }

//     else if(eq.slice(i,i+1) ==="-"){
//         eq = +(eq.slice(0,i)) - +(eq.slice(i+1)) 
//         alert(eq);

//     }

// }


// function foo(a){

//     return a;


// }

// alert(foo(2));



function getNumber(num){

    var result = document.getElementById("result")
    
    result.value += num;    

}

function clearScreen(){

    var result = document.getElementById('result');

    result.value ="";

}


function getResult(){

    var result=document.getElementById('result');

    
    
    
    result.value = eval(result.value);



}


