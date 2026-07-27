// First define all of the experiences to display
const experiences = [

    {
        title: "Robotics Research Internship",
        description: "Developed a robotic data collection pipeline for AI training using ROS2, robot arms and computer vision.",
        tag: "University of Nottingham • Summer 2026 • Robotics",
        image: "images/roboticsSlide.jpg"
    },

    {
        title: "Android Development",
        description: "Created an Android application in Kotlin, exploring UI design and backend integration.",
        tag: "HomeFront • Summer 2025 • Android",
        image: "images/homefrontSlide.jpg"
    },

    {
        title: "IT Technician",
        description: "Worked in a team to perform routine maintenance on the colleges systems and provide IT support.",
        tag: "Moulton College • Summer 2023 • IT",
        image: "images/moultonSlide.jpg"
    }

];

// Store the current slide and if it is changing slide
let currentSlide = 1;
let animating = false;

// Function to load a slide
function loadSlide(index) {
    // If already animating, stop
    if (animating) return;
    animating = true;

    // Otherwise, get the slide element and trigger the animation
    const slideElement = document.querySelector(".slide");
    slideElement.classList.add("fade");

    // Half way through the animation, change the content
    setTimeout(() => {
        
        const slide = experiences[index];

        // For the image, title, description, tag and slide number, update the content
        document.getElementById("slide-image").src = slide.image;
        document.getElementById("slide-title").textContent = slide.title;
        document.getElementById("slide-description").textContent = slide.description;
        document.getElementById("slide-tag").textContent = slide.tag;
        document.getElementById("slide-number").textContent =
            `${index + 1} / ${experiences.length}`;
        
            // Then remove the animation class so it fades back in
        slideElement.classList.remove("fade");
        animating = false;

    }, 250); // Match the CSS transition time

}

// Functions for the next and previous buttons
document.getElementById("next").onclick = () => {

    currentSlide++;

    if (currentSlide >= experiences.length)
        currentSlide = 0;

    loadSlide(currentSlide);

};

document.getElementById("previous").onclick = () => {

    currentSlide--;

    if (currentSlide < 0)
        currentSlide = experiences.length - 1;

    loadSlide(currentSlide);

};

// Load the first slide
loadSlide(currentSlide);
