function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering complete toggle
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
