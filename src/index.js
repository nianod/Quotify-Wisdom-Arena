// const apiUrl = 'https://api.quotable.io/random';  //QUOTE API

// async function fetchRandoQuote() {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data.content    
// } catch (error) {

// }




// Create an array of quotes
let quotes = [
    "Sometimes we will never know the true value of a moment untill it becomes a memory",
    "Follow your curiosity",
    "A goal without a plan is just a wish",
    "Never talk about your riches in the midst of the poor",
    "Get paid. Not played",
    "Break some rules",
    "Don't be afraid to fail",
    "Stay humble, Good times will come",
    "Love your family, work super hard, live your passion"
    // more quotes to be added
]
const uniqueIndex = new Set(); //prevent repeating the same quote immediately.
const showQuote = document.getElementById("getQuote");
const generate = document.getElementById("submitBtn");


function generateQuote() {
    if(uniqueIndex.size >= quotes.length) {
        uniqueIndex.clear();
    }
    while(true) {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    if(uniqueIndex.has(randomQuote)) continue

    let quote = quotes[randomQuote]
    showQuote.innerHTML = quote;
    uniqueIndex.add(randomQuote)
    break
    }
}
generate.onclick = generateQuote;