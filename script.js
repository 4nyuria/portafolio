// Menu (opcional)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}
// Canvas y estrellas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
const stars = [];
const numStars = 1000;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 1,
    color: '#b74b4b'
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.y -= star.speed;
    if (star.y < 0) star.y = canvas.height;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 360);
    ctx.fillStyle = star.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
function resizeCanvas() {
    canvas.width = Math.max(document.documentElement.scrollWidth, window.innerWidth);
    canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
}
const texts = ["Freelance Illustrator", "Visual Storyteller", "Storyboard Artist", "2D Model Artist"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.getElementById('typed').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // espera antes de borrar y escribir siguiente
  } else {
    setTimeout(type, 150);
  }
})();