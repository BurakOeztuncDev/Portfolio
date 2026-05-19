export default class Navbar {

    constructor() {

        this.hamburger =
            document.querySelector(".hamburger");

        this.navLinks =
            document.querySelector(".nav-links");

        this.navbar =
            document.querySelector(".navbar");

    }

    init() {

        this.hamburger.addEventListener("click", () => {

            this.navLinks.classList.toggle("active");

            this.hamburger.classList.toggle("open");

        });

        window.addEventListener("scroll", () => {

            if(window.scrollY > 50){
                this.navbar.classList.add("scrolled");
            } else {
                this.navbar.classList.remove("scrolled");
            }

        });

    }

}