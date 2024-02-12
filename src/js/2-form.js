"use strict"

const form = document.querySelector(".feedback-form")
const emailInput = document.querySelector("input");
const textArea = document.querySelector("textarea");
const button = document.querySelector("button");
const localStorageKey = "feedback-form-state";
const localStorageValue = localStorage.getItem("feedback-form-state");

try {
emailInput.value = JSON.parse(localStorageValue).email ?? "";
textArea.value = JSON.parse(localStorageValue).message ?? "";
}
catch {
    
}
form.addEventListener("input", (event) => {
    event.preventDefault()
    const result = {email:`${emailInput.value}`,message:`${textArea.value}`}
    localStorage.setItem("feedback-form-state", JSON.stringify(result))
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const result = localStorage.getItem("feedback-form-state")
    console.log(JSON.parse(result))
    localStorage.clear()
    form.reset()
})
