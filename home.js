const play = document.getElementById("play-button");

play.addEventListener('click', function() {
    location.href = "play-screen.html";
})

function checkBackgroundImage() {
    const testImage = new Image();
    const backgroundImageUrl = getComputedStyle(document.body).backgroundImage;

    const urlMatch = backgroundImageUrl.match(/url\(["']?(.*?)["']?\)/);
    if (!urlMatch) {
        console.warn("No background image found in CSS.");
        applyFallbackStyles();
        return;
    }

    testImage.src = urlMatch[1];

    testImage.onload = function () {
        console.log("Background image loaded successfully.");
    };

    testImage.onerror = function () {
        console.warn("Background image failed to load.");
        applyFallbackStyles();
    };
}

function applyFallbackStyles() {
    document.body.style.backgroundColor = "bisque";
    document.body.style.color = "darkslategray";
}

window.addEventListener("load", checkBackgroundImage);