document.addEventListener('DOMContentLoaded', function() {
    function handleButtonClicks() {
        const buttons = document.querySelectorAll('.button-container button'); // Target buttons within '.button-container'
        buttons.forEach(btn => {
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                const destination = this.id + '.html'; // Use the button's id to form the redirect URL
                triggerStarfieldTransition(destination);
            });
        });
    }

    function triggerStarfieldTransition(destination) {
        let spaceOverlay = createStarfield();
        document.body.appendChild(spaceOverlay);
        spaceOverlay.style.display = 'block';

        setTimeout(() => {
            window.location.href = destination; // Redirect to the constructed URL
            document.body.removeChild(spaceOverlay);
        }, 5200); // Duration for the transition effect
    }

    function createStarfield() {
        const spaceOverlay = document.createElement('div');
        spaceOverlay.className = 'space-overlay';
        document.body.appendChild(spaceOverlay);

        for (let i = 0; i < 150; i++) {
            let star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            let duration = Math.random() * 1.5 + 1.5;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `-${Math.random() * 1}s`; // Stars appear at various times
            spaceOverlay.appendChild(star);
        }

        return spaceOverlay;
    }

    function showSpecialButton() {
        const specialButton = document.getElementById('no_control');
        specialButton.style.display = 'inline-block';
        setTimeout(() => {
            specialButton.style.opacity = 1;
        }, 10); // Small delay for transition effect
        specialButton.addEventListener('click', function() {
            window.location.href = 'no_control.html'; // Redirect to another_page.html when clicked
        });
    }

    handleButtonClicks(); // Initialize button click listeners

    // Show the special button after 20 seconds
    setTimeout(showSpecialButton, 20000);
});
