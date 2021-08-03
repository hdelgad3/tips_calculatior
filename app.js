// const inputTag = document.querySelectorAll('input[name="billInput"]');
// console.log(inputTag);
// Input display
const bill = document.getElementById('bill');
const percBtns = document.querySelectorAll('.percBtn');
const customTip = document.getElementById('cust');
const people = document.getElementById('people');
// Calc display
const resetBtn = document.querySelector('.resetBtn');
const tip = document.querySelector('.tipCalc');
const total = document.querySelector('.totalCalc');

//forms
const billForm = document.querySelector('.billForm');
const peopleForm = document.querySelector('.peopleForm');

//Error Labels
const billError = document.querySelector('.errorLabel1');
const peopleError = document.querySelector('.errorLabel2');

// console.log(billForm.childNodes);
billForm.removeChild(billError);
// console.log(billForm.childNodes);
// billForm.insertBefore(billError, bill);
// console.log(billForm.childNodes);

let inputBill = 0;
let inputTip = 0;
let inputPeople = 0;
const billValues = [];
const tipValues = [];


// bill input
bill.addEventListener('input', (e)=>{
    let key = e.target.value;
    key = parseFloat(key);
    key = Math.round((key + Number.EPSILON)*100)/100;
    checkBill(key);
});

// loop through percbtn nodelist and print the value when clicked
for(let i = 0; i < percBtns.length; i++){
    percBtns[i].addEventListener('click',(e)=>{
        // console.log(e.currentTarget.value);
        let perc = e.target.dataset.id;
        console.log(perc);
    })
}

// custom tip input
customTip.addEventListener('input',(e)=>{
    let custom = e.target.value;
    custom = parseFloat(custom/100);
    // console.log(custom);
    checkTip(custom);
    // console.log(e.target.dataset);
});

// amount of people
people.addEventListener('input',(e)=>{
    let key = e.target.value;
    console.log(key);
    console.log(e.target.dataset);
    if(key === 0){
       people.setCustomValidity("Can't be zero");
    }
});


// Functions

const checkArray = (arr,val) =>{
    if(arr.length === 0){
        arr.push(val);
    }
    else{
        arr.pop();
        arr.push(val);
    }
    return arr;
}

const checkBill = val =>{
    checkArray(billValues, val);
    //console.log(billValues);
    inputBill= billValues[0];
    // console.log(inputBill);
    if(inputBill === 0){
        billForm.insertBefore(billError, bill);
        
    }
    else{
        billForm.removeChild(billError);
    }  
};

const checkTip = val =>{
    checkArray(tipValues, val);
    inputTip = val;
    console.log(inputTip);
    console.log(tipValues);
};


