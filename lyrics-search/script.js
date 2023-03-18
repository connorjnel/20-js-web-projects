const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
	// fetch(`${apiURL}/suggest/${term}`)
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));

	const res = await fetch(`${apiURL}/suggest/${term}`);
	const data = await res.json();

	console.log(data);
}

// Event Listeners
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value.trim();

	if (!searchTerm) {
		alert('Please type in a search term');
	} else {
		searchSongs(searchTerm);
	}
});
