// emi formula: (p*r*Math.pow((1+r),n))/(Math.pow((1+r),n)-1)
//1. As we change the range, the value in input changes.
let button = document.querySelector(".calculate");
let rangeAmount = document.getElementById("amount-range");
let amount = document.getElementById("amount");

let rangeRate = document.getElementById("rate-range");
let rate = document.getElementById("rate");

let rangeMonths = document.getElementById("month-range");
let months = document.getElementById("months");
let userAmount; let interestRate; let userMonth; let emi;

rangeAmount.addEventListener("input", (e) => {
    amount.value = e.target.value;
    rangeAmount.value = e.target.value;
});

rangeRate.addEventListener("input", (e) => {
    rate.value = e.target.value;
    rangeRate.value = e.target.value;
});

rangeMonths.addEventListener("input", (e) => {
    months.value = e.target.value;
    rangeMonths.value = e.target.value;
})

amount.addEventListener("input", (e) => {
    if (e.target.value <= 200) {
        rangeAmount.value = e.target.value;
        amount.value = e.target.value;
    } else {
        e.target.value = 0;
    }
});

rate.addEventListener("input", (e) => {
    if (e.target.value <= 20) {
        rangeRate.value = e.target.value;
        rate.value = e.target.value;
    } else {
        e.target.value = 0;
    }
});

months.addEventListener("input", (e) => {
    if (e.target.value <= 30) {
        rangeMonths.value = e.target.value;
        months.value = e.target.value;
    } else {
        e.target.value = 0;
    }
});

//2. calculating emi

button.addEventListener("click", () => {
    userAmount = (Number(rangeAmount.value)) * 100000;
    interestRate = (Number(rangeRate.value) / 12) / 100;
    userMonth = Number(rangeMonths.value) * 12;

    if (userAmount > 0 || interestRate > 0 || userMonth > 0) {
        emi = userAmount * interestRate *
            Math.pow((1 + interestRate), userMonth)
            / (Math.pow((1 + interestRate), userMonth) - 1);

        let finalEmi = (new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(emi.toFixed(2))); // Intl.NumberFormat is an language sensitive number format which we can do with specific country.
        document.querySelector(".result").style.display = "flex";
        document.querySelector(".result").textContent = `Monthly EMI is : ₹ ${finalEmi}`
    }
    else {
        swal({
            title: "Oops!",
            text: "Please Enter the Correct values, it cannot be empty or 0.",
            icon: "warning",
        });
    }

})

