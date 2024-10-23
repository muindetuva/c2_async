// function downloadFile(callback) {
//   // asynchrous

//   let file = "Downloaded file";

//   callback(file);
// }

// function saveDownleadFile(file) {
//   console.log("Saved: ", file);
// }

// downloadFile(saveDownleadFile);

function doSomething() {
  console.log("Something");
}

function sayHello(a_function, person) {
  console.log("Hello");

  console.log(person.age);

  a_function();
}

const name = "Chinonso";

const person = { name: "Alfred", age: 34 };

sayHello("Hello", person);
