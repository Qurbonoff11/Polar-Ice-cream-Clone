'use strict';

const $HTML = document

let inputQuestion = $HTML.querySelector(".question-input")
let sendBtn = $HTML.querySelector(".send-btn")

let subscribeBtn = $HTML.querySelector(".subscribe")
let emailInp = $HTML.querySelector("#emailInp")

sendBtn.addEventListener("click", () => {
  inputQuestion.value = ``
})

subscribeBtn.addEventListener("click", () => {
  emailInp.value = "Uzur qabul qilmaymiz"
})
emailInp.addEventListener("click", () => {
  emailInp.value = ""
})