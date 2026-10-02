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