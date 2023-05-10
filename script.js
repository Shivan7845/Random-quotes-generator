let quotes =[
    "The best way to predict the future is to invent it. - Alan Kay",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "If you want to go fast, go alone. If you want to go far, go together. - African proverb",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];


function generateRandomQuote(){
  let randomIndex = Math.floor(Math.random()*quotes.length)
  let randomQuote = quotes[randomIndex];
  document.getElementById("quote-display").innerHTML = randomQuote;
    console.log(randomQuote)
}


document.getElementById("btn").addEventListener("click",generateRandomQuote);

generateRandomQuote();