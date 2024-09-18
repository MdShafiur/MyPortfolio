function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  menu.classList.toggle('active');
}

// Create a canvas for particle animation
const canvas = document.createElement('canvas');
canvas.id = 'particles-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Resize canvas when window size changes
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle class
function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 3 + 1; // Random particle size
  this.speedX = Math.random() * 0.5 - 0.25;
  this.speedY = Math.random() * 0.5 - 0.25;
  this.opacity = Math.random() * 0.5 + 0.5; // Transparent particles
}

Particle.prototype.draw = function () {
  ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // White particles
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;

  // Reset position when particles go off-screen
  if (this.x > canvas.width) this.x = 0;
  if (this.x < 0) this.x = canvas.width;
  if (this.y > canvas.height) this.y = 0;
  if (this.y < 0) this.y = canvas.height;

  this.draw();
};

const particlesArray = [];
for (let i = 0; i < 100; i++) {
  particlesArray.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => particle.update());
  requestAnimationFrame(animateParticles);
}

animateParticles();

const textArray = ["Software Engineer", "Full Stack Developer", "Mobile App Dev"];
let index = 0;
const typingElement = document.querySelector('.typing-title');

function typeEffect() {
  typingElement.textContent = textArray[index];
  typingElement.style.width = textArray[index].length + "ch";
  index = (index + 1) % textArray.length;
}

setInterval(typeEffect, 4000); // Change text every 4 seconds

const fadeLeftElements = document.querySelectorAll('.fade-left');

window.addEventListener('scroll', () => {
  fadeLeftElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('in-view');
    }
  });
});

