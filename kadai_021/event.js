const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", function () {
  setTimeout(function () {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
