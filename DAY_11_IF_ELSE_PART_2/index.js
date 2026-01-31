// Nested if_Else
let accountbalance = 50000;
let creditScore = 750;
let citizenship = "indian";
if (accountbalance >= 50000) {
  if (creditScore >= 750) {
    if (citizenship === "indian") {
      console.log("eligible for international card with 10% Cashback");
    } else {
      console.log("eligible for standard International Card");
    }
  } else {
    console.log("low credit Score.Card denied");
  }
} else {
  console.log("Insufficient balance to aply");
}
// Switch Case(Project management System)
let projectStatus = "Development";
switch (projectStatus) {
  case "Planning":
    console.log("Document taiyar karo");
    break;
  case "Development":
    console.log("Coding suru karo");
    break;
  case "Testing":
    console.log("Bugs dhoonda aur fix karo");
    break;
  case "Deployed":
    console.log("Project live ho gaya ! party karo");
    break;
  default:
    console.log("status unknown,manager se bat karo");
}
