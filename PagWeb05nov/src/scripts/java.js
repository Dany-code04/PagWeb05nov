document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const enviarBtn = document.getElementById('enviar');

    enviarBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Bienvenido/a! Gracias por enviar el formulario.');
    });

    form.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (email === "" || mensaje === "") {
            event.preventDefault();
            alert('Por favor, completa todos los campos.');
        }
    });
});
