// Store all of the projects
const projects = [

    {
        title: "Mendi NeuroNarratives",
        description: "Using Mendi headbands, create stories based on the user's brain activity. The project was a collaboration with the Mendi team and involved working in a team of 8 to develop the android application and present it.",
        date: "2025 - 2026",
        image: "images/mendiProject.jpg",
        size: "featured"
    },
    {
        title: "Portfolio",
        description: "This portfolio website was created to showcase my projects and skills. It is built using HTML, CSS, and JavaScript, and includes a responsive design.",
        date: "2026",
        image: "images/portfolioProject.jpg",
        size: ""
    },
    {
        title: "Nintendo DS Game",
        description: "A simple snake game for the Nintendo DS, created using C and the devkitPro toolchain.",
        date: "2024",
        image: "images/ndsGame.jpg",
        size: ""
    },
    {
        title: "HackNotts",
        description: "With a team of 3, we created a tower defence game in using python in 24 hours. This featured intelligent enemies, a shop, progressive difficulty, and a global leaderboard.",
        date: "2025",
        image: "images/hacknottsProject.jpg",
        size: "featured"
    },
    {
        title: "C++ Exploration Game",
        description: "An exploration game created in C++ making use of the Wave Form Collapose algorithm to create an infinite map with AI enemies.",
        date: "2026",
        image: "images/cppExplorationGame.jpg",
        size: "featured"
    },
    {
        title: "Reversi",
        description: "A classic strategy game where players take turns placing discs on a board, with the goal of having the majority of discs of their color at the end.",
        date: "2025",
        image: "images/reversiProject.jpg",
        size: ""
    },
    {
        title: "Wine Quality Prediction",
        description: "A machine learning project to predict the quality of wine based on its chemical properties.",
        date: "2025",
        image: "images/wineQualityProject.jpg",
        size: ""
    },
    {
        title: "Software Refactoring",
        description: "In a team of 4, we refactored a large codebase to improve its structure, readability, and maintainability. This involved identifying code smells, applying Java design patterns, and writing unit tests.",
        date: "2025",
        image: "images/softwareRefactoringProject.jpg",
        size: ""
    },
    {
        title: "National Cipher Challenge",
        description: "Lead a team of 10 people in a cryptography competition where teams solve complex cipher puzzles under time constraints.",
        date: "2022 - 2023",
        image: "images/nationalCipherChallengeProject.jpg",
        size: ""
    }

];


/*
SECTION FOR PROJECTS

xxx x - big as Mendi
x xxx - big as Hackathon
xxx x - big as C++ Game
x x x

MENDI -done
This portfolio - done
NDS - done
Hackathon - done
C++ Game - done

Reversi
Wine quality prediction
Software Engineering Project
National Cipher Challenge

*/

// Get the projects grid element
const projectGrid = document.getElementById("projects-grid");

// For all the projects, insert the HTML into the grid
projects.forEach(project => {

    const card = document.createElement("div");
    card.className = `project ${project.size}`;

    card.innerHTML = `

        <img src="${project.image}">

        <div class="project-overlay"></div>

        <div class="project-content">

            <h3>${project.title}</h3>

            <span>${project.date}</span>

            <p>${project.description}</p>

        </div>

    `;

    projectGrid.appendChild(card);

});
