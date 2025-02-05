document.querySelector("form").addEventListener("submit", function(event){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === ""){
        alert("Preencha todos os campos!");
        event.preventDefault(); 
    } else if (!email.includes("@")){
        alert("Digite um email válido!");
        event.preventDefault();
    } else if (password.length < 6){
        alert("A senha deve ter pelo menos 6 caracteres!");
        event.preventDefault();
    }
});