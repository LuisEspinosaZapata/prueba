
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario hasta que se validen los campos

    let isValid = true;

    // Validación del Nombre Completo
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === "") {
        document.getElementById('nombreError').textContent = "El nombre es obligatorio.";
        isValid = false;
    } else {
        document.getElementById('nombreError').textContent = "";
    }

    // Validación del Correo Electrónico
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Por favor ingrese un correo válido.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validación de la Contraseña
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número.";
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    // Validación de la Confirmación de Contraseña
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Las contraseñas no coinciden.";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = "";
    }

    // Validación del Número de Celular (Ecuador)
    const phone = document.getElementById('phone').value;
    const phonePattern = /^(09|098)\d{8}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = "Por favor ingrese un número de celular válido (09XXXXXXXX o 098XXXXXXXX).";
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    // Si todos los campos son válidos, muestra una alerta de éxito
    if (isValid) {
        alert("Formulario enviado correctamente.");
    }
});