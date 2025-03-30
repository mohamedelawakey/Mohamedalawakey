document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".projects-card");

    const projectDescriptions = {
        "School System": "A school management system to organize students and classes.",
        "X & O Game": "A simple Tic-Tac-Toe game built using C++.",
        "cs50 learning": "My learning journey through Harvard's CS50 course.",
        "To Do List": "A simple to-do list application to manage daily tasks.",
        "Audio Downloader": "A tool to download and save audio files from various sources.",
        "Speed Car Store": "An online store system for selling and managing car data.",
        "Currency Reveal": "A currency conversion tool for real-time exchange rates."
    };

    projects.forEach(project => {
        project.addEventListener("mouseenter", function (event) {
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip-box";
        tooltip.innerText = projectDescriptions[project.innerText] || "No description available";
        document.body.appendChild(tooltip);

        let rect = project.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;

        project.addEventListener("mouseleave", function () {
            tooltip.remove();
        });
    });
});
});