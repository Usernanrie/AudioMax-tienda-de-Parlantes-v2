document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const pass = document.getElementById("pass").value.trim();
        const pass2 = document.getElementById("pass2").value.trim();

        if (pass !== pass2) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar si el correo ya existe
        if (usuarios.some(u => u.correo === correo)) {
            alert("Este correo ya está registrado.");
            return;
        }

        // Crear nuevo usuario
        const nuevoUsuario = {
            nombre,
            correo,
            pass
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
        window.location.href = "login.html";
    });
});
