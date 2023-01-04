function ref(identifier){
    return document.querySelector(identifier)
}

let h1 = ref("#about")

h1.textContent = "about page at " + window.location