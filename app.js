#! /usr/bin/env node
// Getting HTML elements
var amountInput = document.getElementById('amount');
var fromCurrencySelect = document.getElementById('fromCurrency');
var toCurrencySelect = document.getElementById('toCurrency');
var convertButton = document.getElementById('convertButton');
var resultDiv = document.getElementById('result');
var currencyRates = {
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
convertButton.addEventListener('click', function () {
    var amount = parseFloat(amountInput.value); // Get the amount from the input
    var fromCurrency = fromCurrencySelect.value; // Get the selected 'from' currency
    var toCurrency = toCurrencySelect.value; // Get the selected 'to' currency
    // Check if the amount is a valid number
    if (!isNaN(amount)) {
        var fromRate = currencyRates[fromCurrency];
        var toRate = currencyRates[toCurrency];
        // Perform conversion
        var convertedAmount = (amount / fromRate) * toRate;
        resultDiv.innerText = "Converted Amount: ".concat(convertedAmount.toFixed(2), " ").concat(toCurrency);
    }
    else {
        resultDiv.innerText = "Please enter a valid amount.";
    }
});
