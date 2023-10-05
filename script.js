const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', function () {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset => sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') == '#${current}') {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const elements = document.querySelectorAll("#about h2, #about p, #about h3, #about ul ");

    function isViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
function animateElements(){
    elements.forEach((el) =>{
        if (isViewport(el)){
            el.classList.add("animate");
        }
    });
}
animateElements();
window.addEventListener("scroll", animateElements);

});

document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.getElementById("projects");
    const projects = document.querySelectorAll("#projects .project");

    function isViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
function animateProjects(){
    projects.forEach((project) =>{
        if (isViewport(project)){
            project.classList.add("animate");
        }
    });
}
animateProjects();
window.addEventListener("scroll", animateProjects);

});


document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("projects");
    const skills = document.querySelectorAll("#skills h3, #skills ul li");

    function isViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
function animateSkills(){
    skills.forEach((skill) =>{
        if (isViewport(skill)){
            skill.classList.add("animate");
        }
    });
}
animateSkills();
window.addEventListener("scroll", animateSkills);

});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successMessage = "Votre message a ete envoye !";

form.addEventListener("submit", function (event){
event.preventDefault();
const formData = new FormData(form);
alert(successMessage);
form.reset();
});

});

