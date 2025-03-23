let quotes = [
    "Sometimes we will never know the true value of a moment untill it becomes a memory",
    "Follow your curiosity",
    "A goal without a plan is just a wish",
    "Never talk about your riches in the midst if the poor",
    "Get paid. Not played",
    "Stay humble, Good times will come"
    // more quotes to be added
]
const noRpeat = new Set();
const showQuote = document.getElementById("getQuote");
const generate = document.getElementById("submitBtn");


function generateQuote() {
    while(true) {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    if(noRpeat.has) continue

    let quote = quotes[randomQuote]
    showQuote.innerHTML = quote;
    }
}
generate.onclick = generateQuote;