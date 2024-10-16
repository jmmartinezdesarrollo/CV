document.addEventListener('DOMContentLoaded', function () {
    console.log('Bienvenido a mi CV =)');

    // Initialize star rating
    const starsContainers = document.querySelectorAll('.stars');
    starsContainers.forEach(container => {
        const level = parseInt(container.getAttribute('data-level'), 10);
        const maxStars = 5;

        for (let i = 1; i <= maxStars; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.textContent = '★';

            if (i <= level) {
                star.classList.add('active'); 
            }

            container.appendChild(star);
        }
    });

    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-theme');
        updateThemeIcon();
    });

    // Set theme based on user's preference
    function setThemeBasedOnPreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
        updateThemeIcon();
    }

    // Update theme icon based on current theme
    function updateThemeIcon() {
        if (document.documentElement.classList.contains('dark-theme')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // Calculate experience
    function calculateExperience(startDate) {
        const today = new Date();
        const start = new Date(startDate);
        let years = today.getFullYear() - start.getFullYear();
        let months = today.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months };
    }

    const travelupStartDate = '2019-01-01';
    const travelupExperience = calculateExperience(travelupStartDate);
    const durationText = `${travelupExperience.years} años y ${travelupExperience.months} mes(s)`;
    document.getElementById('travelup-duration').innerText = durationText;



    // Initialize 
    setThemeBasedOnPreference();
});
