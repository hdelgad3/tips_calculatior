// Input display
const bill = document.getElementById('bill');
const percBtns = document.querySelectorAll('.percBtn');
const customTip = document.getElementById('cust');
const people = document.getElementById('people');
// Calc display
const resetBtn = document.querySelector('.resetBtn');
const tip = document.querySelector('.tipCalc');
const total = document.querySelector('.totalCalc');
//Error Labels
const billError = document.querySelector('.errorLabel1');
const peopleError = document.querySelector('.errorLabel2');

// billError.parentNode.removeChild(billError);
// peopleError.parentNode.removeChild(peopleError);

// billError.parentNode.appendChild(billError);

let inputBill = 0;
let inputTip = 0;
let inputPeople = 0;
const billValues = [];


// bill input
bill.addEventListener('input', (e)=>{
    let key = e.target.value;
    key = parseFloat(key);
    key = Math.round((key + Number.EPSILON)*100)/100;
    checkBill(key);
});


// custom tip input
customTip.addEventListener('input',(e)=>{
    console.log(e.target.value);
    console.log(e.target.dataset);
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

// loop through percbtn nodelist and print the value when clicked
for(let i = 0; i < percBtns.length; i++){
    percBtns[i].addEventListener('click',(e)=>{
        console.log(e.currentTarget.value);
        console.log(e.target.dataset);

    })
}

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

const checkBill = bill =>{
    checkArray(billValues, bill);
    //console.log(billValues);
    inputBill= billValues[0];
    // console.log(inputBill);
    if(inputBill === 0){
        console.log('1614564564564');
    }
    
};


