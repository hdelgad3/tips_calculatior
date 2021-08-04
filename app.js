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

// // console.log(billForm.childNodes);
// billForm.removeChild(billError);
// // console.log(billForm.childNodes);
// // billForm.insertBefore(billError, bill);
// // console.log(billForm.childNodes);
// peopleForm.removeChild(peopleError);

billError.style.visibility = 'hidden';
peopleError.style.visibility = 'hidden';


// bill input
bill.addEventListener('input', (e)=>{
    let key = e.target.value;
    key = parseFloat(key);
    key = Math.round((key + Number.EPSILON)*100)/100;
    if(key === 0){
        billError.style.visibility = 'visible';
        bill.style.border = '2px solid red';
    }
    else{
        billError.style.visibility = 'hidden';
        bill.style.border = '2px solid var(--primary-color)';
        calculateAmount(key);
    }
});


// loop through percbtn nodelist and print the value when clicked
for(let i = 0; i < percBtns.length; i++){
    percBtns[i].addEventListener('click',(e)=>{
        let perc = e.target.dataset.id;
        perc = parseFloat(perc);
        calculateTip(perc);
    })
}
// custom tip input
customTip.addEventListener('input',(e)=>{
    let custom = e.target.value;
    custom = parseFloat(custom/100);
    calculateTip(custom);
    
});

// amount of people
people.addEventListener('input',(e)=>{
    let key = e.target.value;
    key = parseInt(key);
    if(key === 0){
        peopleError.style.visibility = 'visible';
        people.style.border = '2px solid red';
    }
    else{
        peopleError.style.visibility = 'hidden';
        people.style.border = '2px solid var(--primary-color)';
        calculatePeople(key);
    }
});


// -----------------------------------------------------FUNCTIONS-------------------------------------------
const calculateAmount = givenBill =>{
    console.log(givenBill);
    return calculateTip = givenTip =>{
        console.log(givenTip);
        return calculatePeople = (givenPeople = 1) =>{
            console.log(givenPeople);
            console.log('all three params given!');
            
        }
    }
}






