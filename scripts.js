function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function() {
        this.style.textDecoration = this.style.textDecoration === "line-through" ? "none" : "line-through";
    }

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
