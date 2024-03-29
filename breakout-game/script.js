const showRulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-btn');
const rulesContainer = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

// Create Brick Props
const brickInfo = {
	w: 70,
	h: 20,
	padding: 10,
	offsetX: 45,
	offsetY: 60,
	visible: true,
};

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
	w: 150,
	h: 10,
	speed: 8,
	dx: 0,
};

// Create Bricks
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
	bricks[i] = [];
	for (let j = 0; j < brickColumnCount; j++) {
		const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
		const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
		bricks[i][j] = { x, y, ...brickInfo };
	}
}

console.log(bricks);

// Draw ball on canvas
function drawBall() {
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
	ctx.fillStyle = '#fb5607';
	ctx.fill();
	ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
	ctx.fillStyle = '#211425';
	ctx.fill();
	ctx.closePath();
}

// Draw Score
function drawScore() {
	ctx.font = '20px Play';
	ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

//Draw bricks on canvas
function drawBricks() {
	bricks.forEach((column) => {
		column.forEach((brick) => {
			ctx.beginPath();
			ctx.rect(brick.x, brick.y, brick.w, brick.h);
			ctx.fillStyle = brick.visible ? '#1982c4' : 'transparent';
			ctx.fill();
			ctx.closePath();
		});
	});
}

// Move paddle on canvas
function movePaddle() {
	paddle.x += paddle.dx;

	// Wall Detection
	if (paddle.x + paddle.w > canvas.width) {
		paddle.x = canvas.width - paddle.w;
	}

	if (paddle.x < 0) {
		paddle.x = 0;
	}
}

// Move Ball
function moveBall() {
	ball.x += ball.dx;
	ball.y += ball.dy;

	// Wall Collision (right/left)
	if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
		ball.dx *= -1; // ball.dx = ball.dx * -1
	}

	// Wall Collision (top/bottom)
	if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
		ball.dy *= -1; // ball.dx = ball.dx * -1
	}

	// console.log(ball.x, ball.y);

	// Paddle collision
	if (ball.x - ball.size > paddle.x && ball.x + ball.size < paddle.x + paddle.w && ball.y + ball.size > paddle.y) {
		ball.dy = -ball.speed;
	}

	// Brick Collision
	bricks.forEach((column) => {
		column.forEach((brick) => {
			if (brick.visible) {
				if (
					ball.x - ball.size > brick.x && // left brick side check
					ball.x + ball.size < brick.x + brick.w && // right brick side check
					ball.y + ball.size > brick.y && // top brick side check
					ball.y - ball.size < brick.y + brick.h // bottom brick side check
				) {
					ball.dy *= -1;
					brick.visible = false;

					increaseScore();
				}
			}
		});
	});

	// Hit bottom wall - Lose
	if (ball.y + ball.size > canvas.height) {
		showAllBricks();
		score = 0;
	}
}

// Increase score
function increaseScore() {
	score++;

	if (score % (brickRowCount * brickRowCount) === 0) {
		showAllBricks();
	}
}

// Make all bricks appear
function showAllBricks() {
	bricks.forEach((column) => {
		column.forEach((brick) => {
			brick.visible = true;
		});
	});
}

// Draw Everything
function draw() {
	// Clear Canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawPaddle();
	drawScore();
	drawBricks();
}

// Update Canvas drawing and animation
function update() {
	movePaddle();
	moveBall();
	// Draw Everything
	draw();

	requestAnimationFrame(update);
}

update();

// Keydown Event
function keyDown(e) {
	if (e.key === 'Right' || e.key === 'ArrowRight') {
		paddle.dx = paddle.speed;
	} else if (e.key === 'Left' || e.key === 'ArrowLeft') {
		paddle.dx = -paddle.speed;
	}
}

// KeyUp Event
function keyUp(e) {
	if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'Left' || e.key === 'ArrowLeft') {
		paddle.dx = 0;
	}
}

// Keyboard Event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Event Listeners
showRulesBtn.addEventListener('click', () => {
	rulesContainer.classList.add('show');
	showRulesBtn.hidden = true;
});
closeRulesBtn.addEventListener('click', () => {
	rulesContainer.classList.remove('show');
	showRulesBtn.hidden = false;
});
