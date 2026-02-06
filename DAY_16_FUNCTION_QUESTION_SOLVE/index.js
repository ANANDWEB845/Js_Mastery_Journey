// Q = 1
// THE SMART ATM
function atmWithdrow(balance,requestAmount){
  if(requestAmount >balance){
    return "insuficient Funds"
  }else if(requestAmount < 500){
    return "Minimum Withdrawal is 500"
  }else{
    return balance - requestAmount;
  }
}

let result = atmWithdrow(2000,500);




console.log(result);

// Q = 2
// THE GRADE CALCULATATOR
function getGrade(marks){
 if(marks >=90){
 return "A";
 }else if(marks >=80 && marks <= 89){
  return "B";
 }else if(marks >=70 && marks <= 79){
 return "C";
}else if(marks < 70){
return "F";
 } 

  }
console.log(getGrade(82));


// Q = 3
// THE PASSWORD VALIDATOR
function checkPassword(pass){
if(pass.length >= 8 && pass.includes("123") === false ){
  return "Strong Password"
}else{
  return "Weak password"
}
}

console.log(checkPassword(""));