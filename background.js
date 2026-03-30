// Setup the background
const bg = document.getElementById("background");
const colors = ["#5bff88", "#ff4ecd", "#00d4ff", "#7c5cff", "#5bffeb"];
const numStars = 20;

// For each of the stars...
for (let i = 0; i < numStars; i++) {
    // Create a span
    const span = document.createElement("span");

    // Give it a random position and colour from the list
    span.style.top = Math.random() * 100 + "%";
    span.style.left = Math.random() * 100 + "%";
    span.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Giev it a random animation
    span.style.animationDuration = (10 + Math.random() * 40) + "s";
    span.style.animationDelay = (-Math.random() * 50) + "s";

    // And a random transform origin for the rotation
    span.style.transformOrigin =
    (Math.random() * 40 - 20) + "vw " +
    (Math.random() * 40 - 20) + "vh";

    // Random glow size
    span.style.boxShadow =
    (Math.random() > 0.5 ? "-" : "") +
    "4vmin 0 " +
    (0.5 + Math.random()) +
    "vmin currentColor";

    // Then add it to the screen
    bg.appendChild(span);
}
