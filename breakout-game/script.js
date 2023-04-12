const showRulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-btn');
const rulesContainer = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;

// Create Ball Props
const ball = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	size: 10,
	speed: 4,
	dx: 4,
	dy: -4,
};

// Create Paddle Props
const paddle = {
	x: canvas.width / 2 - 40,
	y: canvas.height - 20,
	w: 80,
	h: 10,
	speed: 8,
	dx: 0,
};

// Draw ball on canvas
function drawBall() {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
	// TODO Add dynamic color for ball
	ctx.fillStyle = '#4ea8dc';
	ctx.fill();
	ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
	// TODO Add dynamic color for paddle
	ctx.fillStyle = '#4ea8dc';
	ctx.fill();
	ctx.closePath();
}

// Draw Score
function drawScore() {
	ctx.font = '20px Play';
	ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw Everything
function draw() {
	drawBall();
	drawPaddle();
	drawScore();
}

// Instantiate
draw();

// Event Listeners
showRulesBtn.addEventListener('click', () => {
	rulesContainer.classList.add('show');
	showRulesBtn.hidden = true;
});
closeRulesBtn.addEventListener('click', () => {
	rulesContainer.classList.remove('show');
	showRulesBtn.hidden = false;
});
