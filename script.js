const submitBtn = document.getElementById("submitBtn")
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const formMessage = document.getElementById("formMessage")

submitBtn.addEventListener("click", function() {
  const name = userName.value
  const email = userEmail.value

  if (name === "" || email === "") {
    formMessage.textContent = "お名前とメールアドレスを入力してください"
    formMessage.style.color = "red"
  } else {
    formMessage.textContent = name + "様、お申し込みありがとうございます！折り返しご連絡します。"
    formMessage.style.color = "#2d6a4f"
    userName.value = ""
    userEmail.value = ""
  }
})