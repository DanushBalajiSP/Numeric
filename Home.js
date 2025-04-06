document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.querySelector(".content");
    const gameItems = document.querySelectorAll(".game-item");
    let lastScrollY = window.scrollY;

    // Function to handle scroll
    const handleScroll = () => {
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

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
});

window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
      // Page is coming back from bfcache
      window.location.reload(); // Force reload to reset animations or state
    }
  });
  
