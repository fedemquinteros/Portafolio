document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {

        const nombreInput = document.getElementById("nombre");
        const nombreValue = nombreInput.value.trim();
        const nombreRegex = /^[a-zA-Z\s]+$/;

        if (!nombreRegex.test(nombreValue)) {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }


        const correoInput = document.getElementById("correo");
        const correoValue = correoInput.value.trim();
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!correoRegex.test(correoValue)) {
            alert("Ingrese una dirección de correo electrónico válida.");
            return;
        }


        const telefonoInput = document.getElementById("telefono");
        const telefonoValue = telefonoInput.value.trim();
        const telefonoRegex = /^[0-9]+$/;

        if (!telefonoRegex.test(telefonoValue) || telefonoValue.length < 8 || telefonoValue.length > 15) {
            alert("El teléfono debe contener solo números, tener al menos 8 cifras y un máximo de 15 dígitos.");
            return;
        }


        const mensajeInput = document.getElementById("mensaje");
        const mensajeValue = mensajeInput.value.trim();

        if (mensajeValue === "") {
            alert("Ingrese un mensaje.");
            return;
        }
        alert("¡Su mensaje ha sido enviado correctamente!");
    });
});



