import {handleStarfieldTransition} from "./final_script"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting traditionally
        const query = document.getElementById('searchInput').value;
        searchVideo(query);
    });
});

function searchVideo(query) {
    const apiKey = 'AIzaSyDI-mMo5zkJN042SnTnakAkMwNAkXfsd3U';  // Replace YOUR_API_KEY with your actual YouTube Data API key
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items.length > 0) {
                const firstResult = data.items[0];
                embedVideo(firstResult.id.videoId);
                handleStarfieldTransition(this.id)
            } else {
                document.getElementById('video-container').innerHTML = 'No results found';
            }
        })
        .catch(error => {
            console.error('Failed to fetch video data:', error);
            alert('Failed to fetch video. Please try again.');
        });
}

function embedVideo(videoId) {
    const videoContainer = document.getElementById('video-container');
    const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoContainer.innerHTML = embedCode;
}
