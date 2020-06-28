const quote = document.querySelector("#quote");
const author = document.querySelector(".quote-author");
const button = document.querySelector("#generate-btn");

button.addEventListener("click", getQuote);

function getQuote() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "../quotes.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let quotes = JSON.parse(this.responseText);
      const quotesIndex = parseInt(Math.random() * quotes.length);
      quote.innerHTML = quotes[quotesIndex].quote;
      author.innerHTML = quotes[quotesIndex].author;
    }
  };

  xhr.onerror = function () {
    alert("Sorry mate!, no luck here.");
  };

  xhr.send();
}
