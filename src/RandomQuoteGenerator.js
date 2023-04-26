import React, { useState } from "react";

const quotes = [
  {
    text: "If you change the way you look at things, the things you look at will change.",
    author: "    ~ Wayne Dyer"
  },
  {
    text: "When you are tired, learn to rest not to quit.",
    author: "    ~ Banksy"
  },
  {
    text: "You are your home.",
    author: "   ~ Billy"
  },
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "   ~ Thomas Edison"
  },
  {
    text: "Having nothing, nothing can be lost.",
    author: "   ~ William Shakespeare"
  },
  {
    text: "One today is worth two tomorrows.",
    author: "   ~ Benjamin Franklin"
  },
  {
    text: "Be as you wish to seem.",
    author: "   ~ Socrates"
  },
  {
    text: "Only do what your heart tells you.",
    author: "   ~ Princess Diana"
  },
  {
    text: "All our knowledge has its origins in our perceptions.",
    author: "   ~ Leonardo da Vinci"
  },

 {
    text: "How you love yourself is how you teach others to love",
    author: "   ~ Rupi Kaur"
 },

 {
  text: "Don't say you can't untill you prove you can't",
  author: "   ~ Les Paul"
},

{
  text: " Keep your eyes on the stars and your feet on the ground.",
  author: "   ~ Theodore Roosevelt"
},

{
  text: "Fear kills more dreams than failure ever will",
  author: "   ~ Suzy Kassem"
},

{
  text: "Life is a bicycle. To keep moving you must keep moving forward.",
  author: "   ~ Albert Einstein"
},
{
  text: "To err is human, to forgive is divine.",
  author: "  ~ Alexander Pope"
}
  
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({});

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="random-quote-generator">
      <button className="btnfos-2" onClick={generateRandomQuote}>Generate Quote</button>
      <p className="quote-text">{quote.text}</p>
      <p className="quote-author">{quote.author}</p>
    </div>
  );
};

export default RandomQuoteGenerator;