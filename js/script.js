console.log("Script loaded");

// Lista de papéis para o efeito de máquina de escrever

const roles = [
  "Software Engineer",
  "Back-End Developer",
  "Web Developer",
  "Web Designer",
  "UI/UX Designer",
  "Front-End Developer",
  "RPA Developer",
  "Mobile Developer"
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

// Set language to Portuguese
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('pt-br');
});