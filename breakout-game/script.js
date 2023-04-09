const showRulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-btn');
const rulesContainer = document.getElementById('rules');

// Event Listeners
showRulesBtn.addEventListener('click', () => {
	rulesContainer.classList.add('show');
	showRulesBtn.hidden = true;
});
closeRulesBtn.addEventListener('click', () => {
	rulesContainer.classList.remove('show');
	showRulesBtn.hidden = false;
});

//Color Palettes

const colors1 = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
const colors2 = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'];
const colors3 = ['#af3800', '#fe621d', '#fd5200', '#00cfc1', '#00ffe7'];

// Set Colors

function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px black';
}

function getRandomColor(color) {
	return colors[Math.floor(Math.random() * colors.length)];
}
