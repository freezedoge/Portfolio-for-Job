document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings:["Frontend Developer","Gamer","Cat Lover","Web Programmer"],
        typeSpeed:50,
        backSpeed:50,
        backDelay:500,
        loop:true
    });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove the active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add the active class to the clicked link
    link.classList.add("active");

    // Update the indicator line's appearance
    const indicator = link.querySelector("::before");
    indicator.style.backgroundColor = "blue"; // Set the color you want
  });
});