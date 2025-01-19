document.getElementById('formRegistro').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita que el formulario se envíe de forma predeterminada
   var email = document.getElementById('email').value;
    // Expresión regular para validar el correo electrónico
    var patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (patronCorreo.test(email)) {
        alert('Correo electrónico válido');
        // Aquí puedes proceder con el envío del formulario, si es necesario
        // Por ejemplo, si se realiza una solicitud AJAX para enviar el formulario
    } else {
        // document.getElementById('mensajeError').style.display = 'block';
        alert('mensajeError');
    }
});
