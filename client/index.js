
document.getElementById('fortuneButton').addEventListener('click', function () {
  axios.get('http://localhost:4000/api/fortune/')
    .then(function (response) {
      const data = response.data
      alert(data)
  })
})

document.getElementById('ideasButton').addEventListener('click', function () {
  axios.get('http://localhost:4000/api/break/')
    .then(function (response) {
      const data = response.data
      alert(data)
  })
})

document.getElementById("quoteForm").addEventListener('submit', function (event) {
  event.preventDefault()
  const quote = document.querySelector('#quote')
  const author = document.querySelector('#author')

  const quoteObj = {
    quote: quote.value,
    author: author.value
  }

  axios.post("http://localhost:4000/api/quote/", quoteObj)
    .then(function (response) {
      const data = response.data
      console.log(data)
      const quote = document.createElement("h2")
      quote.textContent = data[data.length - 1].quote
      document.getElementById("quoteContainer").append(quote)
      const author = document.createElement("h3")
      author.textContent = data[data.length - 1].author
      document.getElementById("quoteContainer").append(author)
  })
})