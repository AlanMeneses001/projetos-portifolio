
function alternarSecoes(event) {
    if (event) event.preventDefault();

    let loginSection = document.getElementById("login");
    let registroSection = document.getElementById("registro");

    if (loginSection.style.display === "none") {
        loginSection.style.display = "flex";
        registroSection.style.display = "none";
    } else {
        loginSection.style.display = "none";
        registroSection.style.display = "flex";
    }
}

window.onload = function () {
    document.getElementById("login").style.display = "flex";
    document.getElementById("registro").style.display = "none";
};
