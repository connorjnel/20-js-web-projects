const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMilBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money

async function getRandomUser() {
	const res = await fetch('https://randomuser.me/api');
	const data = await res.json();

	const user = data.results[0];

	const newUser = {
		name: `${user.name.first} ${user.name.last}`,
		money: Math.floor(Math.random() * 1000000),
	};

	addData(newUser);
}

// Map - Double money
function doubleMoney() {
	data = data.map((user) => {
		return { ...user, money: user.money * 2 };
	});

	updateDOM();
}

// Sort - By richest
function sortRichest() {
	data.sort((a, b) => b.money - a.money);

	updateDOM();
}

// Filter - Show millionaires
function showMillion() {
	data = data.filter((user) => user.money > 1000000);

	updateDOM();
}

// Reduce - Calculate entire wealth
function calculateEntireWealth() {
	const wealth = data.reduce((acc, user) => acc + user.money, 0);
	const wealthEl = document.createElement('div');
	wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
	main.appendChild(wealthEl);
}

// Add new object to data array
function addData(obj) {
	data.push(obj);

	updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
	// Clear Main Div
	main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

	providedData.forEach((item) => {
		const element = document.createElement('div');
		element.classList.add('person');
		element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
		main.appendChild(element);
	});
}

// Format number as money
function formatMoney(number) {
	return '£ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortRichest);
showMilBtn.addEventListener('click', showMillion);
calWealthBtn.addEventListener('click', calculateEntireWealth);
