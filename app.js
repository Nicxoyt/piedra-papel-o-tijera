let tij=["piedra", "papel", "tijera"]
let p = document.getElementById("p");
function verificarA() {
    let op = "piedra"
    let numeroAleatorio = Math.floor(Math.random() * 3); a = document.getElementById("a"); b = document.getElementById("b"); c = document.getElementById("c");
    p1.textContent = "TU DECISION: " + op;
    p2.textContent = "DECISION DE LA MAQUINA : " + tij[numeroAleatorio];
    if (op === "piedra" && tij[numeroAleatorio] === "papel") {
        p.textContent = "perdiste"; 
    }
    if (op === "piedra" && tij[numeroAleatorio] === "tijera") {
        p.textContent = "ganaste"; 
    }
        if (op === "piedra" && tij[numeroAleatorio] === "piedra") {
        p.textContent = "empate"; 
    }
    return;
}

function verificarB() {
    let op = "papel"
    let numeroAleatorio = Math.floor(Math.random() * 3); a = document.getElementById("a"); b = document.getElementById("b"); c = document.getElementById("c");
    p1.textContent = "TU DECISION: " + op;
    p2.textContent = "DECISION DE LA MAQUINA : " + tij[numeroAleatorio];
    if (op === "papel" && tij[numeroAleatorio] === "tijera") {
        p.textContent = "perdiste "; 
    }
    if (op === "papel" && tij[numeroAleatorio] === "piedra") {
        p.textContent = "ganaste"; 
    }
        if (op === "papel" && tij[numeroAleatorio] === "papel") {
        p.textContent = "empate"; 
    }
    return;
}

function verificarC() {
    let op = "tijera"
    let numeroAleatorio = Math.floor(Math.random() * 3); a = document.getElementById("a"); b = document.getElementById("b"); c = document.getElementById("c");
    p1.textContent = "TU DECISION: " + op;
    p2.textContent = "DECISION DE LA MAQUINA : " + tij[numeroAleatorio];
    if (op === "tijera" && tij[numeroAleatorio] === "piedra") {
        p.textContent = "perdiste"; 
    }
    if (op === "tijera" && tij[numeroAleatorio] === "papel") {
        p.textContent = "ganaste"; 
    }
        if (op === "tijera" && tij[numeroAleatorio] === "tijera") {
        p.textContent = "empate"; 
    }
    return;
}