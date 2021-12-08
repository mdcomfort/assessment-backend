const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const quotes = []
const supportList = []

app.get("/api/compliment/", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune/", (req, res) => {
  const fortunes = ["A new perspective will come with the new year.", "A beautiful, smart, and loving person will be coming into your life.", "A friend is a present you give yourself.", "Do not let ambitions overshadow small success.", "Technology is the art of arranging the world so we do not notice it.", "Your quick wits will get you out of a tough situation.", "Your energy returns and you get things done."]

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

app.get("/api/break/", (req, res) => {
  const breakIdeas = ["Take a walk at a local park.", "Take a walk in your neighborhood.", "Call a friend.", "Call a family member.", "Look up a new recipe.", "Order food from your favorite restaurant.", "Go for a jog.", "Listen to music.", "Bake some brownies.", "Take a nap.", "Watch an episode of your favorite show.", "Choose a cause and make a small donation.", "Take a 10 minute break and then get back at it."]

  let randomIndex = Math.floor(Math.random() * breakIdeas.length)
  let randomBreak = breakIdeas[randomIndex]

  res.status(200).send(randomBreak)
})

app.post("/api/quote/", (req, res) => {
  const newPost = {
    quote: req.body.quote,
    author: req.body.author
  }

  quotes.push(newPost)
  res.status(200).send(quotes)
})

app.post("/api/support/", (req, res) => {
  let {supportPerson} = req.body
  supportList.push(supportPerson)
  console.log(supportList)
  res.status(200).send(supportList)
})

app.listen(4000, () => console.log("Server running on 4000"));

