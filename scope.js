// function scope 

function Say(){
    let name="Javascript"
    console.log("Hai Global Scope");
    console.log("Within the func "+name);
}
Say();
console.log("Outside the func"+name);

// Block scope
// The block scope of a variable means that variable is assesible
// Within the block that is between the variable
    
function Voting(){
    if(age>=18){
        var isCloudy=true;
        var israining=true;
        console.log("Eligible")
        console.log(isCloudy);
        }
      console.log(israining);
      console.log(isCloudy);// throw err
}
Voting(18)
// Local scope

function text(){
    console.log("Message");
}
text();
function send(callback){
    console.log("message sended");
    setInterval(callback,2000);
}
send(text);

let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count<5){
        Interval();
    }
}
Interval();