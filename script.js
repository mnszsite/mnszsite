const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class on nav-links
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        navLinks.classList.remove('active'); // Remove active class if clicking outside
    }
});



// features service drop down
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', (event) => {
        const details = button.nextElementSibling;
        details.style.display = (details.style.display === "block") ? "none" : "block";
        event.stopPropagation(); // Stop event propagation
    });
});

// Close details when clicking outside
document.addEventListener('click', (event) => {
    document.querySelectorAll('.details').forEach(details => {
        if (details.style.display === "block") {
            details.style.display = "none";
        }
    });
});




// contact form
// Book now button / form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    
    // Collect data
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message'); 

    // Get the contact method
    const contactMethod = formData.get('contact-method');

    // Construct the message body
    const messageBody = `Booking Request:\n\n` +
                        `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Email: ${email}\n` +
                        `Message: ${message}`

    if (contactMethod === 'email') {
        const subject = encodeURIComponent('Service Request');
        const recipientEmail = 'mnszsite.aw@gmail.com'; 
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(messageBody)}`;
        window.location.href = mailtoLink;
    } else if (contactMethod === 'whatsapp') {
        const whatsappNumber = '67570346861'; 
        const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageBody)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert('Please select a valid contact method.');
    }

    // Clear the form fields
    form.reset();
}

// Clear fields on page load
window.onload = function() {
    const form = document.getElementById('booking-form');
    form.reset();
};




// Our Work carousel
let currentWorkSlide = 0;

function moveWorkSlide(direction) {
    const workContainer = document.querySelector('.our-work .carousel-container');
    const totalSlides = document.querySelectorAll('.our-work .work-item').length;

    // Update the current slide index
    currentWorkSlide += direction;

    // Loop through slides
    if (currentWorkSlide < 0) {
        currentWorkSlide = totalSlides - 1;
    } else if (currentWorkSlide >= totalSlides) {
        currentWorkSlide = 0;
    }

    workContainer.style.transform = `translateX(-${currentWorkSlide * 100}%)`;
}



// Testimonials carousel
let currentTestimonialSlide = 0;

function moveTestimonialSlide() {
    const testimonialContainer = document.querySelector('.testimonials .carousel-container');
    const totalTestimonials = document.querySelectorAll('.testimonials blockquote').length;

    // Update the current slide index
    currentTestimonialSlide++;

    // Loop through slides
    if (currentTestimonialSlide >= totalTestimonials) {
        currentTestimonialSlide = 0;
    }

    testimonialContainer.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
}

// Automatic sliding for testimonials
setInterval(moveTestimonialSlide, 5000); // Change slide every 5 seconds





