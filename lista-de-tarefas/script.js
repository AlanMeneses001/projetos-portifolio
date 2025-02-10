document.getElementById("addTaskBtn").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    // Criando um span para armazenar o texto da tarefa
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Criando o botão de concluir ✔
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed"); // Marca o <li> como concluído
    });

    // Criando o botão de remover X
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Adicionando os elementos dentro do <li>
    li.appendChild(taskSpan);   // Adiciona o texto da tarefa
    li.appendChild(completeBtn); // Adiciona o botão de concluir
    li.appendChild(removeBtn);  // Adiciona o botão de remover

    // Adicionando a tarefa na lista
    taskList.appendChild(li);

    // Limpando o input após adicionar
    taskInput.value = "";
});
