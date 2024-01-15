const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
let animationId;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.8 - 0.75;
        this.speedY = Math.random() * 0.8 - 0.75;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `rgba(82, 92, 235, ${this.opacity})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) {
            this.size -= 0.05;
        } else {

            this.size = Math.random() * 0.8 + 0.4;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.opacity = Math.random() * 0.4 + 0.3;
            this.color = `rgba(82, 92, 235, ${this.opacity})`;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

const particles = [];

function createParticles() {
    for (let i = 0; i < canvas.width / 20; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    animationId = requestAnimationFrame(animateParticles);
}

function startAnimation() {
    createParticles();
    animateParticles();
}

function stopAnimation() {
    cancelAnimationFrame(animationId);
}

startAnimation();
