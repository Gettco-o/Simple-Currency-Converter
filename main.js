const input = require('sync-input');
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");


let details = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75
};

let currencies = ['USD', 'JPY', 'EUR', 'RUB', 'GBP'];

// execute program
start();

// functions

function start() {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let action = input();
    if (action === "1") {
        convertCurrency();
        start();
    } else if (action === "2"){
        end();
    } else {
        console.log("Unknown input");
        start();
    }
}

function convertCurrency() {
    console.log("What do you want to convert?");

    let from = input("From: ").toUpperCase();
    if (!(currencies.includes(from))) {
        console.log("Unknown currency");
        convertCurrency();
    }

    let to = input("To: ").toUpperCase();
    if (!(currencies.includes(to))) {
        console.log("Unknown currency");
        convertCurrency();
    }

    let amount = Number(input("Amount: "));
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        convertCurrency();
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number");
        convertCurrency();
    }

    let dollarAmount = toUSD(details[from], amount);
    //console.log(dollarAmount);

    let result = toOther(details[to], dollarAmount);
    //console.log(result);

    console.log(`Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`);
}

function end() {
    console.log("Have a nice day!");
}


function toUSD(rate, amount) {
    return amount / rate;
}

function toOther(rate, amount) {
    return amount * rate;
}