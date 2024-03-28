const mainInput = document.getElementById("email");
const mainButton = document.getElementById("main_button");
const mainH3 = document.getElementById("main_h3");
mainButton.addEventListener("click", function () {
  if (!mainInput.value.includes("@")) {
    mainH3.style.display = "block";
  } else {
    mainH3.style.display = "none";
  }
});
