var form =  document.getElementsByTagName('form')[0];

var inputNombre = document.getElementById("nombre");
var emailInput = document.getElementById("email");
var telefonoInput = document.getElementById("telefono");
var seleccionInput = {
    seleccion1: document.getElementById("forma_conocer_1"),
    seleccion2: document.getElementById("forma_conocer_2"),
    seleccion3: document.getElementById("forma_conocer_3"),
    seleccion4: document.getElementById("forma_conocer_4")
};
var comenatriosInput = document.getElementById("comments");


form.addEventListener("submit", function (event) {
    if (inputNombre.checkValidity() === false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() === false) {
        alert("Introduce un email correcto");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (telefonoInput.checkValidity() === false) {
        alert("Introduce un teléfono correcto");
        telefonoInput.focus();
        event.preventDefault();
        return false;
    }

    if (seleccionInput.seleccion1.checkValidity() === false) {
        alert("Por favor, introduce como me has conocido.");
        event.preventDefault();
        return false;
    }

});

seleccion3.addEventListener("change", function (event) {
    alert ("The " + radio.value + " radio is selected.");
});

function OnChangeRadio (radio) {
            alert ("The " + radio.value + " radio is selected.");
        }
