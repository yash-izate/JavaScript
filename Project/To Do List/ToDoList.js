let todo = [];

let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("Quiting App ! See you soon.");
    break;
  }

  if (req == "list") {
    for (let i = 0; i < todo.length; i++) {
      console.log("------------------------------");
      console.log(task);
    }
    console.log("--------------------------------");
  } else if (req == "add") {
    let task = prompt("Please enter the task you want add");
    todo.push(task);
    console.log("Task Added !");
  } else if (req = "delete") {
    let idx = prompt("Please enter the task index");
    todo.splice(idx,1);
    console.log("Task Deleted !");
  } else {
    console.log("Wrong Request");
  }

  req = prompt("Please enter youer request");
}