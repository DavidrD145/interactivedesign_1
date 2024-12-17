      function getRandomDateTime() {
            const now = new Date();
            const start = new Date(1970, 0, 1);
            const randomTime = new Date(start.getTime() + Math.random() * (now.getTime() - start.getTime()));
            
            // Format date components
            const day = randomTime.getDate().toString().padStart(2, '0');
            const month = (randomTime.getMonth() + 1).toString().padStart(2, '0');
            const year = randomTime.getFullYear();
            const hours = randomTime.getHours().toString().padStart(2, '0');
            const minutes = randomTime.getMinutes().toString().padStart(2, '0');
            const seconds = randomTime.getSeconds().toString().padStart(2, '0');
            
            // Return formatted date string
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        }

        function updateDateTime(elementId) {
            document.getElementById(elementId).textContent = getRandomDateTime();
        }

        function nextPage() {
            // Add your next page navigation logic here
            window.location.href = 'your-next-page.html';
        }

        // Initialize with random dates
        updateDateTime('header-time');
        updateDateTime('main-time');
        updateDateTime('footer-time');