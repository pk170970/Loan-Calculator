// emi formula: (p*r*Math.pow((1+r),n))/(Math.pow((1+r),n)-1)



//1. As we change the range, the value in input changes.
let button= document.querySelector(".calculate");
let rangeAmount = document.getElementById("amount-range");
let amount = document.getElementById("amount");

let rangeRate = document.getElementById("rate-range");
let rate = document.getElementById("rate");

let rangeMonths = document.getElementById("month-range");
let months = document.getElementById("months");

rangeAmount.addEventListener("input", (e) => {
    amount.value = e.target.value;
});

rangeRate.addEventListener("input", (e) => {
    rate.value = e.target.value;
});

rangeMonths.addEventListener("input", (e) => {
    months.value = e.target.value;
})

amount.addEventListener("input",(e)=>{
    rangeAmount.value= e.target.value;
});

rate.addEventListener("input",(e)=>{
    rangeRate.value= e.target.value;
});

months.addEventListener("input",(e)=>{
    rangeMonths.value= e.target.value;
});


//2. calculating emi

button.addEventListener("click",()=>{
    let userAmount= (rangeAmount.value)*100000;
    let interestRate= (rangeRate.value/12/100);
    let months= rangeMonths.value*12;

    // console.log(userAmount,interestRate,months);
    let emi= userAmount*interestRate*
    Math.pow((1+interestRate),months)
    /(Math.pow((1+interestRate),months)-1);

    let finalEmi= new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(Math.round(emi)); // Intl.NumberFormat is an language sensitive number format which we can do with specific country.

    document.querySelector(".result").style.display="flex";
    document.querySelector(".result").textContent= `Monthly EMI is : ₹ ${finalEmi}`;
})


