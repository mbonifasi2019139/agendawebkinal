let formularioLogin = document
    .querySelector("#formulario-login")
    .addEventListener("submit", (e) => {
        e.preventDefault();
        Swal.fire("Marcos Bonifasi - 2019139 - Agenda Web").then(() => {
            window.location.href = "contactos.html";
        });
    });

let crearCuenta = document
    .querySelector(".campo.link")
    .addEventListener("click", () => {
        Swal.fire("No se ha desarrollado esta funcion");
    });