const mainInput = document.getElementById("email");
const mainButton = document.getElementById("main_button");
const mainH3 = document.getElementById("main_h3");
mainButton.addEventListener("click", function () {
  // FIXME: unda shevcvalo amis logica rac miweria baqarma rac chamigdo და 1440/900-ზეა

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
  }

  console.log(validateEmail(mainInput.value));

  if (!validateEmail(mainInput.value)) {
    mainH3.style.display = "block";
  } else {
    mainH3.style.display = "none";
  }
});
