
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}
// -----------------------
// Código del canvas y estrellas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  stars.forEach(star => {
    star.y -= star.speed; 
    if (star.y < 0) star.y = height;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
const colors = ['#ffffff', '#FFDFAA', '#AADDFF', '#FFCCFF'];

stars.forEach(star => {
    star.y -= star.speed;
    if (star.y < 0) star.y = height;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
});
