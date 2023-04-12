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
