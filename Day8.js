let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours);
let minits=currenttime.getMinutes();
console.log(minits);
let Day=currenttime.getDay();
console.log(Day)

class EXam{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}

let result=new EXam("John");

class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    set balance(amountdeposit){
        if(amountdeposit>0){
            this.balance += amountdeposit;
        }
    }
}

let add=new 