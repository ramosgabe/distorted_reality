document.addEventListener('DOMContentLoaded', function() {
    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');
    const text3 = document.querySelector('#text3');
    const text4 = document.querySelector('#text4');
    const text5 = document.querySelector('#text5');
    const text6 = document.querySelector('#text6');
    const text7 = document.querySelector('#text7');
    const text8 = document.querySelector('#text8');
    const cursor1 = document.querySelector('#cursor1');
    const cursor2 = document.querySelector('#cursor2');
    const orText = document.querySelector('#or-text');
    const shuffleButtons = document.querySelectorAll('#shuffle1, #shuffle2, #shuffle3');
    const currentPage = window.location.pathname;


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

    function fadeInButtons() {
        const buttons = document.querySelectorAll('.retro-btn:not(.fade-in)');
        buttons.forEach(btn => {
            btn.style.display = 'inline-block';
            btn.style.transition = 'opacity 1s ease-in-out';
            setTimeout(() => {
                btn.style.opacity = 1;
            }, 100); // A small delay to ensure the transition effect
        });

        // Fade in "OR" text after all buttons are shown
        setTimeout(() => {
            orText.style.display = 'block';
            orText.style.transition = 'opacity 1s ease-in-out';
            orText.style.opacity = 1;
        }, 1000); // Adjust this timing as needed
    
        // Fade in the shuffle button after the "OR" text
        setTimeout(() => {
            shuffleButtons.forEach(btn => {
                btn.style.display = 'inline-block';
                btn.style.transition = 'opacity 1s ease-in-out';
                btn.style.opacity = 1;
                btn.classList.add('slow-spin');
            });
        }, 2000);

        buttons.forEach(btn => {
            btn.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action
                handleStarfieldTransition(this.id);
            });
        });
    }

    function startLine2() {
        showCursor(cursor2);
        typeWriter('What would you like to watch today?', 0, text2, cursor2, fadeInButtons, cursor2);
    }
    
    function startLine3() {
        showCursor(cursor2);
        typeWriter("Here's what you're watching next.", 0, text4, cursor2, fadeInButtons, cursor2);
    }
    
    function startLine4() {
        showCursor(cursor2);
        typeWriter("Here are some recommendations...", 0, text6, cursor2, fadeInButtons, cursor2);
    }

    function startLine5() {
        showCursor(cursor2);
        typeWriter("Here's Some more you might like...", 0, text8, cursor2, fadeInButtons, cursor2);
    }
    

    hideAllCursors();
    
    console.log(currentPage)

    if (currentPage.endsWith('/')) {
        showCursor(cursor1);
        typeWriter('Hello there!', 0, text1, cursor1, startLine2);
    } 
    else if (currentPage.endsWith('mod2_index.html')) {
        showCursor(cursor1);
        typeWriter('enjoying yourself I see.', 0, text7, cursor1, startLine5);
    } 
    else if (currentPage.endsWith('mod1_index.html')) {
        showCursor(cursor1);
        typeWriter('Hey, Welcome Back!', 0, text3, cursor1, startLine4);
    } 
    else if (currentPage.endsWith('mod3_index.html')) {
        showCursor(cursor1);
        typeWriter('hi, again.', 0, text5, cursor1, startLine3);
    }
    else if (currentPage.endsWith('index.html')) {
        showCursor(cursor1);
        typeWriter('Hello there!', 0, text1, cursor1, startLine2);
    }
    function handleStarfieldTransition(videoId) {
        let spaceOverlay = createStarfield();
        document.body.appendChild(spaceOverlay);
        spaceOverlay.style.display = 'block';

        setTimeout(() => {
            if (videoId === 'shuffle') {
                shuffleVideo();
            } else {
                window.location.href = videoId + '.html'; // Redirect to the video page
            }
            document.body.removeChild(spaceOverlay); // Clean up overlay after redirect
        }, 5000); // Set this to your longest animation duration
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
    

    shuffleButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleStarfieldTransition(this.id);
        });
    });

});
