
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav_links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
