import { getArrayData, storeData } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  document.querySelector("#mensajeUsuario").textContent = "El usuario no existe";
  const forms = document.querySelectorAll('.needs-validation')
  const valueUserName = document.querySelector("#validationCustomUsername");
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      const registredUsers = getArrayData();
      valueUserName.setCustomValidity("");

      registredUsers.forEach(element => {
        if (element.username === valueUserName.value) {
          valueUserName.setCustomValidity("Ya existe ese usuario");
          document.querySelector("#mensajeUsuario").textContent = "Ya existe ese usuario";
        }
      });

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        storeData(getValue("validationCustom01"),
          getValue("validationCustom02"),
          getValue("validationCustomUsername"),
          getValue("validationCustom03"),
          getValue("validationCustom05"),
          getValue("validationCustom06"),
          getValue("validationCustom07"),
          getValue("validationCustom08"));
      }

      form.classList.add('was-validated')
    }, false)

  })
});

function getValue(id) {
  return document.querySelector(`#${id}`).value;
}