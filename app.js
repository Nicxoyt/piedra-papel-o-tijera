let pop=document.getElementById("overlay"); let pop1=document.getElementById("popup");
pop.style.pointerEvents = "none";
pop.style.opacity = "0";
pop1.style.pointerEvents = "none";
pop1.style.opacity = "0";
pop1.style.animation = "none";
let tij=["piedra", "papel", "tijera"];
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
    pop.style.pointerEvents = "auto";
    pop.style.opacity = "1";
    pop1.style.pointerEvents = "auto";
    pop1.style.opacity = "1";
    pop1.style.animation = "popupAnim 0.4s ease";
    setTimeout(() => {
        pop.style.opacity = "0"
        pop.style.pointerEvents = "none"
        pop1.style.opacity = "0"
        pop1.style.pointerEvents = "none"
        pop1.style.animation = "none";
    }, 2000)
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
    pop.style.pointerEvents = "auto";
    pop.style.opacity = "1";
    pop1.style.pointerEvents = "auto";
    pop1.style.opacity = "1";
    pop1.style.animation = "popupAnim 0.4s ease";
    setTimeout(() => {
        pop.style.opacity = "0"
        pop.style.pointerEvents = "none"
        pop1.style.opacity = "0"
        pop1.style.pointerEvents = "none"
        pop1.style.animation = "none";
    }, 2000)
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
    pop.style.pointerEvents = "auto";
    pop.style.opacity = "1";
    pop1.style.pointerEvents = "auto";
    pop1.style.opacity = "1";
    pop1.style.animation = "popupAnim 0.4s ease";
    setTimeout(() => {
        pop.style.opacity = "0"
        pop.style.pointerEvents = "none"
        pop1.style.opacity = "0"
        pop1.style.pointerEvents = "none"
        pop1.style.animation = "none";
    }, 2000)
    return;
}