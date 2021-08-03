const bill = document.getElementById('bill');
const percBtns = document.querySelectorAll('.percBtn');
const customTip = document.getElementById('cust');
const people = document.getElementById('people');
const resetBtn = document.querySelector('.resetBtn');
const tip = document.querySelector('.tipCalc');
const total = document.querySelector('.totalCalc');




bill.addEventListener('input', (e)=>{
    // console.log(e.data);
    console.log(e.target.value);

    
});

customTip.addEventListener('input',(e)=>{
    console.log(e.target.value);
    console.log(e.target.dataset);
});

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



