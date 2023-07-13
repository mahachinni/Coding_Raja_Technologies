const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `-Mae West`
}, {
    quote: `"If you want to live a happy,tie it to goal,not to people or things."`,
    writer: `-Albert Einstein`
},{
    quote: `"Never let the fear of striking out keep you from playing game."`,
    writer: `-Babe Ruth`
},{
    quote: `"Your time is limited,so don't waste it living someone else life."`,
    writer: `-Steve Jobs`
},{
    quote: `"In order to write about life first you must live it."`,
    writer: `-Ernest Hemingway`
},{
    quote: `"Life is not a problem to be solved,but a reality to be a experienced."`,
    writer: `-Soren Kierkegeerd`
},{
    quote: `"The unexamined life is not worth living."`,
    writer: `-Socrates`
},{
    quote: `"Turn your wounds into wisdom."`,
    writer: `-Oprah Winfrey`
},{
    quote: `"The purpose of our lives is to be happy."`,
    writer: `-Dalai Lama`
},{
    quote: `"Live for each second without hesitation."`,
    writer: `-Etlon John`
},{
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    writer: `-Eleanor Roosevelt`
},{
    quote: `"Happiness is not something ready-made. it comes from your own actions."`,
    writer: `-Dalai Lama`
},{
    quote: `"Be open to your Happiness and Sadness as they Arise."`,
    writer: `-john M Thomas`
},]
let btn =  document.getElementById("Qbtn");

let quoteSelector =  document.getElementById("quote");

let writerSelector =  document.getElementById("writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    
    quoteSelector.innerHTML = quotes[random].quote;

    writerSelector.innerHTML = quotes[random].writer;
})