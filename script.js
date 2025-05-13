function greetUser() {
    const name =
document.getElementById("nameInput").value;
    const message = name ? `Hello, ${name}! Nice to See you.` : "plese enter your name!";
    
    document.getElementById("greetingMessage").innerText = message;
}