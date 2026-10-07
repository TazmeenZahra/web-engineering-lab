function greet(name) {
  return "Hello, ${name}!";
}

document.querySelector("h1").textContent = greet("World");
