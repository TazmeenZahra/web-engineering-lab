function greet(name) {
  return `Hello, ${name}!`;
}
if (typeof document !== "undefined") {
  document.querySelector("h1").textContent = greet("World");
}

export { greet };
