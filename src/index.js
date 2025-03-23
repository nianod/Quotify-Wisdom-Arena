const showQuote = document.getElementById("getQuote");
const generate = document.getElementById("submitBtn");


function generateQuote() {
    showQuote.innerHTML = "Never give up";
}
generate.onclick = generateQuote;