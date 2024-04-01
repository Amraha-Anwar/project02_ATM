#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\tWELCOME TO THE ATM 'AMRAHA'\t\n");

let myAcc_balance = 50000;
let myAcc_pincode = 2301;

let ans_pincode = await inquirer.prompt(
    [
        {
            name : "pincode",
            type : "number" ,
            message : "Enter you Pin Code.."         
        }
    ]
);
    if (ans_pincode.pincode === myAcc_pincode){                 //checking if the pin code is correct or not
        console.log("CORRECT pin code!");
let ans_operation = await inquirer.prompt(
    [
        {
            name : "Operation",
            type : "list",                                     //it will run only if you enter correct pin
            message : "Select an option...",
            choices : ["WITHDRAW" , "CHECK BALANCE" ]
        }
    ]
); 

//    IF USER WITHDRAW THE AMOUNT:
    if (ans_operation.Operation === "WITHDRAW"){
    console.log ("you can only withdraw 50,000 at a time");              //WITHDRAWAL LIMIT

let ans_amount = await inquirer.prompt(                     
        [
            {
                name : "Amount",
                type : "list",
                message : "Select an option",
                choices : ["10000" , "25000" , "35000" , "45000", "other"]   //(upto you)
            }
        ]
);
   
   if(ans_amount.Amount === "10000"){
    myAcc_balance -= ans_amount.Amount;       
     console.log(`Your remaining balance is ${myAcc_balance}`);}

   else if(ans_amount.Amount === "25000"){
    myAcc_balance -= ans_amount.Amount;
        console.log(`Your remaining balance is ${myAcc_balance}`);}

   else if(ans_amount.Amount === "35000"){
    myAcc_balance -= ans_amount.Amount;
        console.log(`Your remaining balance is ${myAcc_balance}`);}

   else if(ans_amount.Amount === "45000"){
    myAcc_balance -= ans_amount.Amount;
        console.log(`Your remaining balance is ${myAcc_balance}`);}
   else if (ans_amount.Amount === "other"){ 

let amountToEnter = await inquirer.prompt(
    [
        { 
            name : "Amount_to_enter",
            type : "number",
            message : "Enter your Amount"
        }
    ]
)
    if (amountToEnter.Amount_to_enter <= myAcc_balance ) {
        myAcc_balance -= amountToEnter.Amount_to_enter;
        console.log(`Withdrawal Succesfull, Your remaining balance is ${myAcc_balance}`)
}   else{
        console.log("Insufficient Balance");
}
}
};
    if (ans_operation.Operation === "CHECK BALANCE"){
        console.log(`Your current balance is ${myAcc_balance}`)
    }
   
}

    else{ 
        console.log("INCORRECT pin code!");
};