function toggleMenu() {
    const menuLinks = document.querySelector(".menu-links");
    const menu = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    menuLinks.classList.toggle("open"); // Fixed to toggle the correct class
}