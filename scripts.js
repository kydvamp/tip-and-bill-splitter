const billAmountEl = document.getElementById('billAmount');
const tipPercentageEl = document.getElementById('tipPercentage');
const numberOfPeopleEl = document.getElementById('numberOfPeople');
const resultsEl = document.getElementById('results');
const calculateButtonEl = document.getElementById('calculateButton');
const clearButtonEl = document.getElementById('clearButton');

let billAmount = 0;
let tipPercentage = 0;
let numberOfPeople = 0;

calculateButtonEl.addEventListener('click', () => {
    billAmount = parseFloat(billAmountEl.value);
    tipPercentage = parseFloat(tipPercentageEl.value);
    numberOfPeople = parseInt(numberOfPeopleEl.value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        resultsEl.textContent = 'Please enter valid inputs.';
        return;
    } else if (billAmount < 0 || tipPercentage < 0) {
        resultsEl.textContent = 'Bill amount and tip percentage cannot be negative.';
        return;
    } else if (tipPercentage > 100) {
        resultsEl.textContent = 'Tip percentage cannot be greater than 100%.';
        return;
    } else if (billAmount === 0) {
        resultsEl.textContent = 'Bill amount cannot be zero.';
        return;
    } else {
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;
        const amountPerPerson = totalAmount / numberOfPeople;
        resultsEl.innerHTML = `<p>Tip Amount: $${tipAmount.toFixed(2)}</p>
                               <p>Total Amount: $${totalAmount.toFixed(2)}</p>
                               <p>Amount Per Person: $${amountPerPerson.toFixed(2)}</p>`;
    }    
});

clearButtonEl.addEventListener('click', () => {
    billAmountEl.value = '';
    tipPercentageEl.value = '';
    numberOfPeopleEl.value = '';
    resultsEl.textContent = '';
});