const testimonials = [
    {
        name: "Paul Palmer",
        message: "The service was amazing and very professional."
    },
    {
        name: "Amanda Jackson",
        message: "The quality of work was top. Highly recommended!"
    },
    {
        name: "Spencer James",
        message: "I had a great experience from the start of the project to finish. I will be back soon."
    }
];

const testimonialsList = document.getElementById("testimonials-list");
testimonials.forEach(function(testimonial) {
    testimonialsList.innerHTML += `
        <li>
            <strong>${testimonial.name}</strong> - "${testimonial.message}"
        </li>
    `;
});

const projects = [
    {
        title: "Focus & Shot Photography",
        description: "A simple photography website showcasing photography services,portfolio and contact details.",
        tech: "HTML, CSS"
    },

    {
        title: "Akan Name Generator",
        description: "A web application that calculates the day of the week a user was born and assigns them an Akan name based on their gender.",
        tech: "HTML, CSS, JavaScript"
    }
];

const projectContainer =document.getElementById("projects-container");

projects.forEach(function(project) {
    projectContainer.innerHTML += `
        <div class="project-card">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <p>Technologies Used: ${project.tech}</p>
        </div>
    `; 
});