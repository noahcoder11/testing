function ref(identifier){
    return document.querySelector(identifier)
}

let h1 = ref("#home")

h1.textContent = "homepage at " + window.location