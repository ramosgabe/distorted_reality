function searchYouTube(query) {
    const apiUrl = `http://localhost:3000/search?q=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data: ', error));
}
