console.log("Script loaded");

// Lista de papéis para o efeito de máquina de escrever

const roles = [
  "Engenheiro de Software",
  "Desenvolvedor Back-End",
  "Desenvolvedor Web",
  "Web Designer",
  "UI/UX Designer",
  "Desenvolvedor Front-End",
  "Desenvolvedor RPA",
  "Desenvolvedor Mobile"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const speed = 100; // velocidade da digitação
const pause = 1500; // pausa entre palavras

function typeWriter() {
  const typewriter = document.getElementById("typewriter");

  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
      typewriter.textContent = currentRole;
      setTimeout(typeWriter, speed);
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
      typewriter.textContent = currentRole;
      setTimeout(typeWriter, speed / 2);
    } else if (!isDeleting && j > roles[i].length) {
      isDeleting = true;
      setTimeout(typeWriter, pause);
    } else if (isDeleting && j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(typeWriter, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);