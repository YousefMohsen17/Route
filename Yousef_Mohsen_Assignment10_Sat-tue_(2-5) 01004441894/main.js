var quoteArray = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
];

function generateQuote() {
  var quoteGenerated = document.getElementById("quote");
  var authorGenerated = document.getElementById("author");
  var randomNumber = Math.floor(quoteArray.length * Math.random());
  var objSelected = quoteArray[randomNumber];
  if (
    // authorGenerated.innerHTML !== "" &&
    authorGenerated.innerHTML === objSelected.author
  ) {
    generateQuote();
  } else {
    authorGenerated.innerHTML = objSelected.author;
    quoteGenerated.innerHTML = objSelected.quote;
  }
}
