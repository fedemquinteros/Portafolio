const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');
let animationId;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5.5 + 1;
        this.speedX = Math.random() * 3.5 - 1.5;
        this.speedY = Math.random() * 3.5 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
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


document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAnimation();
    } else {
        startAnimation();
    }
});


window.addEventListener('focus', startAnimation);

window.addEventListener('blur', stopAnimation);


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
});


startAnimation();