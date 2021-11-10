
document.getElementById('fortuneButton').onclick = function () {
  axios.get('http://localhost:4000/api/fortune/')
    .then(function (response) {
      const data = response.data
      alert(data)
  })
}

const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const thoughts = document.querySelector('#thoughts')

const quoteObj = {
    quote: quote.value,
    author: author.value, 
    thoughts: thoughts.value
}

// const submitQuote = () => {
//   axios.post('http://localhost:4000/api/quote/', quoteObj)
//     .then(function (response) {
//       let data = response.data
//       alert(data)
//     })
//   }

// const quoteAdd = document.getElementById('quoteButton')
// quoteAdd.addEventListener('submit', submitQuote)

document.getElementById("quoteButton").submit = function () {
  axios.post("http://localhost:4000/api/quote/", quoteObj)
    .then(function (response) {
      alert("Saved!")
  })
}