// ----------------------------  LOGIN ----------------------------------
if (document.querySelector("#formulario-login")) {
    let formularioLogin = document
        .querySelector("#formulario-login")
        .addEventListener("submit", (e) => {
            e.preventDefault();
            Swal.fire("Marcos Bonifasi - 2019139 - Agenda Web").then(() => {
                window.location.href = "contactos.html";
            });
        });
}

if (document.querySelector(".campo.link")) {
    let crearCuenta = document
        .querySelector(".campo.link")
        .addEventListener("click", () => {
            Swal.fire("No se ha desarrollado esta funcion");
        });
}

// --------------------------- contactos ---------------------------------
if (document.querySelector("#usuario-enlace")) {
    let enlaceUsuario = (document.querySelector(
        "#usuario-enlace"
    ).onclick = () => {
        window.location.href = "perfil.html";
    });
}

if (document.querySelector("#configuraciones")) {
    let configuraciones = document
        .querySelector("#configuraciones")
        .addEventListener("click", (e) => {
            e.preventDefault();
            Swal.fire("No se ha desarrollado esta funcion");
        });
}

// --------------------------- Pefil ------------------------------------
if (document.querySelector("#password")) {
    var password = document.querySelector("#password");
}

if (document.querySelector("#togglePassword")) {
    var togglePassword = document.querySelector("#togglePassword");
}

togglePassword.onclick = () => {
    const type =
        password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    //Mostrando las contrasena
    togglePassword.classList.toggle("fas fa-eye-slash");
};