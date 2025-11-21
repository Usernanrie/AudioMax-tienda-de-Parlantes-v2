// ===============================
//  VALIDACIONES REGISTRO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let pass = document.getElementById("pass").value.trim();
        let pass2 = document.getElementById("pass2").value.trim();

        // Validaciones básicas
        if (!nombre || !correo || !pass || !pass2) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!validarEmail(correo)) {
            alert("Ingresa un correo válido.");
            return;
        }

        if (pass.length < 6) {
            alert("La contraseña debe tener mínimo 6 caracteres.");
            return;
        }

        if (pass !== pass2) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Obtener usuarios existentes
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verificar correo duplicado
        if (usuarios.some(u => u.correo === correo)) {
            alert("Este correo ya está registrado.");
            return;
        }

        // Guardar nuevo usuario
        const nuevoUsuario = { nombre, correo, pass };
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "../index.html"; // Redirige a login
    });
});

// Función para validar email
function validarEmail(email){
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
