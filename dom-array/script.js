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
	console.log(data);
}
