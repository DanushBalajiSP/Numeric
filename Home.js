document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.querySelector(".content");
    const gameItems = document.querySelectorAll(".game-item");
    let lastScrollY = window.scrollY;

    // Check if the screen width matches mobile devices
    const isMobile = window.matchMedia("(max-width: 580px)").matches;

    // Function to handle scroll for mobile screens
    const handleScrollMobile = () => {
        const contentRect = contentDiv.getBoundingClientRect(); // Get the position of contentDiv
        const currentScrollY = window.scrollY;

        // Check if the contentDiv is out of the viewport
        if (contentRect.bottom < 0) {
            // Content is completely out of the screen (above the viewport)
            contentDiv.classList.add("scrolled");
        } else {
            // Content is still visible in the viewport
            contentDiv.classList.remove("scrolled");
        }

        // Reveal or hide game-item divs based on their visibility
        gameItems.forEach((item) => {
            const itemRect = item.getBoundingClientRect();
            if (itemRect.top < window.innerHeight && itemRect.bottom > 0) {
                // Game item is visible in the viewport
                item.classList.add("visible");
                item.classList.remove("hidden");
            } else {
                // Game item is outside the viewport
                item.classList.add("hidden");
                item.classList.remove("visible");
            }
        });

        lastScrollY = currentScrollY;
    };

    // Function to handle scroll for larger screens
    const handleScrollDesktop = () => {
        const currentScrollY = window.scrollY;

        // Transform the content div based on scroll position
        if (currentScrollY > lastScrollY) {
            contentDiv.classList.add("scrolled");
        } else {
            contentDiv.classList.remove("scrolled");
        }

        // Reveal game-item divs as they come into view
        if (currentScrollY > lastScrollY) {
            // Scrolling up: Show game-item elements
            gameItems.forEach((item) => {
                item.classList.add("visible");
                item.classList.remove("hidden");
            });
        } else {
            // Scrolling down: Hide game-item elements
            gameItems.forEach((item) => {
                item.classList.add("hidden");
                item.classList.remove("visible");
            });
        }

        lastScrollY = currentScrollY;
    };

    // Attach the appropriate scroll event listener based on screen size
    if (isMobile) {
        window.addEventListener("scroll", handleScrollMobile);
    } else {
        window.addEventListener("scroll", handleScrollDesktop);
    }
});