// 

function sum (num2, num1){
    return num1+num2;

}

console.log(sum("this","that"));


let canVote = (age)=>{
    if(age>=18){
        return true;

    }else{
        return false;
    }

}

console.log(canVote(20));
console.log(canVote(16));