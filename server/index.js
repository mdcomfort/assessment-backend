const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const quotes = []

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

app.post("/api/quote/", (req, res) => {
  const newPost = {
    quote: req.body.quote,
    author: req.body.author,
    thoughts: req.body.thoughts
  }

  quotes.push(newPost)
  console.log(req.body)
  res.status(200).send(quotes)
})

app.listen(4000, () => console.log("Server running on 4000"));
