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
const btnForm = document.querySelector('.btnForm');

//Error Labels
const billError = document.querySelector('.errorLabel1');
const peopleError = document.querySelector('.errorLabel2');


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
};
// custom tip input
customTip.addEventListener('input',(e)=>{
    let custom = e.target.value;
    custom = parseFloat(custom/100);
    if(custom > 100 || custom <= 0) {
        customTip.style.border = '2px solid red';
    }
    else{
        customTip.style.border = '2px solid var(--primary-color)'
        calculateTip(custom);
    }
    
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


resetBtn.addEventListener('click', ()=>{
    billForm.reset();
    btnForm.reset();
    peopleForm.reset();
    tip.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    bill.style.border = 'none';
    billError.style.visibility = 'hidden';
    people.style.border = 'none';
    peopleError.style.visibility = 'hidden';
    customTip.style.border = 'none';
});


// -----------------------------------------------------FUNCTIONS-------------------------------------------
const calculateAmount = givenBill =>{
    
    return calculateTip = givenTip =>{
        
        return calculatePeople = (givenPeople = 1) =>{

            if(isNaN(givenPeople)){
                tip.innerHTML = '$0.00';
                total.innerHTML = '$0.00';
            }
            else {
                let tipAmountPerPerson = Math.round((((givenBill*givenTip) / givenPeople)+Number.EPSILON)*100)/100;
                // console.log(tipAmountPerPerson);

                let totalPerPerson = Math.round((((givenBill/givenPeople) + tipAmountPerPerson)+Number.EPSILON)*100)/100;
                // console.log(totalPerPerson);

                if(!isNaN(tipAmountPerPerson) && !isNaN(totalPerPerson)){
                    displayCalc(tipAmountPerPerson, totalPerPerson);
                }
            }
        }
    }
}

const displayCalc = (tipC, totC) =>{
    tip.innerHTML = '$' + tipC;
    total.innerHTML = '$' +  totC;
};





