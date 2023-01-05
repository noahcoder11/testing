var a = document.querySelector("#a1")
var a2 = document.querySelector("#a2")

a.href = window.location + "/.netlify/functions/api"
a2.href = window.location + "/.netlify/functions/api/testdata"

console.log(window.location)