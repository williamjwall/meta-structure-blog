// Ant Simulation Background
const canvas = document.getElementById('ant-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Ant class
class Ant {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 1 + Math.random() * 2;
        this.size = 2 + Math.random() * 2;
        this.trail = [];
        this.maxTrailLength = 20;
    }

    update() {
        // Move ant
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
            this.trail.shift();
        }

        // Randomly change direction
        if (Math.random() < 0.05) {
            this.angle += (Math.random() - 0.5) * 0.5;
        }
    }

    draw() {
        // Draw trail
        ctx.beginPath();
        ctx.moveTo(this.trail[0].x, this.trail[0].y);
        for (let i = 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
        }
        ctx.strokeStyle = `rgba(100, 181, 246, ${0.1 + (this.trail.length / this.maxTrailLength) * 0.2})`;
        ctx.lineWidth = this.size;
        ctx.stroke();

        // Draw ant
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 181, 246, 0.8)';
        ctx.fill();
    }
}

// Create ants
const ants = [];
for (let i = 0; i < 50; i++) {
    ants.push(new Ant());
}

// Animation loop
function animate() {
    // Clear canvas with semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw ants
    ants.forEach(ant => {
        ant.update();
        ant.draw();
    });

    requestAnimationFrame(animate);
}

// Start animation
animate(); 