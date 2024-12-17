   document.addEventListener('DOMContentLoaded', function() {
            const lines = document.querySelectorAll('.typewriter-line');
            let currentLine = 0;
    
            function typeLine() {
                if (currentLine < lines.length) {
                    lines[currentLine].classList.add('active');
                    currentLine++;
                    setTimeout(typeLine, 3000); // Wait 3 seconds before starting the next line
                }
            }
    
            typeLine();
        });