
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data
      alert(data)
  })
}

let quote = document.querySelector('#quote')
let author = document.querySelector('#author')
let thoughts = document.querySelector('#thoughts')

let quoteObj = {
    quote: quote.value,
    author: author.value, 
    thoughts: thoughts.value
}

document.getElementById("quoteButton").onclick = function () {
  console.log(quoteObj)
  axios.post("http://localhost:4000/api/quote/", quoteObj)
    .then(function (response) {
      alert("Saved!")
  })
}