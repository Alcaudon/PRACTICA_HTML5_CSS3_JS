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

seleccionInput.seleccion4.addEventListener("change", function (event) {
    var input = document.createElement("input");    
    input.setAttribute("type", "text",);
    input.setAttribute("id", "campo-dinamico");
    input.placeholder = "Pon aquí lo que quieras.."
    document.getElementById("contact-radio").appendChild(input);
});

seleccionInput.seleccion1.addEventListener ("change", borradoCampoDinamicoForm);
seleccionInput.seleccion2.addEventListener ("change", borradoCampoDinamicoForm);
seleccionInput.seleccion3.addEventListener ("change", borradoCampoDinamicoForm);

function borradoCampoDinamicoForm (event) {        
    campo = document.getElementById("campo-dinamico");	
	if (campo){	
		padre = campo.parentNode;
		padre.removeChild(campo);
	}
}