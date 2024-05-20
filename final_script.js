document.addEventListener('DOMContentLoaded', function() {
    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');
    const cursor1 = document.querySelector('#cursor1');
    const cursor2 = document.querySelector('#cursor2');

    function hideAllCursors() {
        cursor1.style.display = 'none';
        cursor2.style.display = 'none';
    }

    function showCursor(cursor) {
        cursor.style.display = 'inline'; // Display the current cursor
    }

    function typeWriter(text, idx, element, cursor, nextFunction, finalCursor) {
        if (idx < text.length) {
            element.textContent += text.charAt(idx);
            setTimeout(() => {
                typeWriter(text, idx + 1, element, cursor, nextFunction, finalCursor);
            }, 120);
        } else {
            if (finalCursor) {
                cursor.style.display = 'inline';
                cursor.classList.add('blink'); // Ensure the cursor blinks
            } else {
                hideAllCursors(); // Hide all cursors when typing is done
            }
            if (nextFunction) {
                nextFunction();
            }
        }
    }

    function startLine2() {
        showCursor(cursor2);
        typeWriter('What would you like to watch today?', 0, text2, cursor2, fadeInButtons, cursor2);
    }

    hideAllCursors();
    showCursor(cursor1);
    typeWriter('Hello there!', 0, text1, cursor1, startLine2);

    function fadeInButtons() {
        const buttons = document.querySelectorAll('.retro-btn');
        buttons.forEach(btn => {
            btn.style.display = 'inline-block';
            setTimeout(() => {
                btn.style.opacity = 1;
            }, 100);
            btn.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action
                handleStarfieldTransition(this.id);
            });
        });
    }

    function handleStarfieldTransition(videoId) {
        let spaceOverlay = createStarfield();
        document.body.appendChild(spaceOverlay);
        spaceOverlay.style.display = 'block';

        setTimeout(() => {
            window.location.href = videoId + '.html'; // Redirect to the video page
            document.body.removeChild(spaceOverlay); // Clean up overlay after redirect
        }, 5200); // Set this to your longest animation duration
    }

    function createStarfield() {
        const spaceOverlay = document.createElement('div');
        spaceOverlay.className = 'space-overlay';
        document.body.appendChild(spaceOverlay);

        for (let i = 0; i < 150; i++) { // Increased number of stars for better coverage
            let star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            let duration = Math.random() * 1.5 + 1.5; 
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `-${Math.random() * 1}s`; // Start some animations midway
            spaceOverlay.appendChild(star);
        }
    
        return spaceOverlay;
    }    

    // fadeInButtons(); // Activate buttons with star transition
});
