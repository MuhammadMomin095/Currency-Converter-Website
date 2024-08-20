#! /usr/bin/env node

// Getting HTML elements

const amountInput = document.getElementById('amount') as HTMLInputElement;

const fromCurrencySelect = document.getElementById('fromCurrency') as HTMLSelectElement;

const toCurrencySelect = document.getElementById('toCurrency') as HTMLSelectElement;

const convertButton = document.getElementById('convertButton') as HTMLButtonElement;

const resultDiv = document.getElementById('result') as HTMLDivElement;

// Defining currency rates


interface CurrencyRates {
    [key: string]: number;
}

const currencyRates: CurrencyRates = {
    USD: 1,
    PKR: 277.98,
    AUD: 1.519,
    NZD: 1.662,
    RUB: 91.57,
    INR: 83.31,
    SAR: 3.750,
    GBP: 0.7913,
    EUR: 0.9221,
    KWD: 0.3075
};

// Conversion logic

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value); // Get the amount from the input

    const fromCurrency = fromCurrencySelect.value; // Get the selected 'from' currency

    const toCurrency = toCurrencySelect.value; // Get the selected 'to' currency


// Check if the amount is a valid number
   


    if (!isNaN(amount)) {
        const fromRate = currencyRates[fromCurrency];
        const toRate = currencyRates[toCurrency];


// Perform conversion

        const convertedAmount = (amount / fromRate) * toRate;
        resultDiv.innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        resultDiv.innerText = "Please enter a valid amount.";
    }
});