document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('videoId');
    if (videoId) {
        const videoContainer = document.getElementById('video-container');
        const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        videoContainer.innerHTML = embedCode;
    } else {
        document.getElementById('video-container').innerHTML = 'No video found.';
    }
});
