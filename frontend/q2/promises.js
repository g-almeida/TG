const url = 'https://www.google.com.br'
const url2 = 'https://stackoverflow.com/'
const url3 = 'https://www.python.org'
const url4 = 'https://www.javascript.com/'
const url5 = 'https://golang.org/'

fetch(url)
    .then((resp) => resp.json())
fetch(url2)
    .then((resp) => resp.json())
fetch(url3)
    .then((resp) => resp.json())
fetch(url4)
    .then((resp) => resp.json())
fetch(url5)
    .then((resp) => resp.json())