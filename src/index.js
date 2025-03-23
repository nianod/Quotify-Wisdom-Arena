let quotes = [
    "Sometimes we will never know the true value of a moment untill it becomes a memory",
    "Follow your curiosity",
    "A goal without a plan is just a wish",
    "Stay humble, Good times will coome"
]
const noRpeat = new Set();
const showQuote = document.getElementById("getQuote");
const generate = document.getElementById("submitBtn");


function generateQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomQuote]
    showQuote.innerHTML = quote;
}
generate.onclick = generateQuote;