import Navbar from "./navbar.js";
import LoadingScreen from "./loadingScreen.js";
import Particles from "./particles.js";
import Animations from "./animations.js";
import Github from "./github.js";
import ContactForm from "./contactForm.js";

class App {

    constructor() {

        this.navbar = new Navbar();
        this.loader = new LoadingScreen();
        this.particles = new Particles();
        this.animations = new Animations();
        this.github = new Github();
        this.contactForm = new ContactForm();

    }

    init() {

        this.navbar.init();
        this.loader.init();
        this.particles.init();
        this.animations.init();
        this.github.init();
        this.contactForm.init();

        console.log("Portfolio gestartet 🚀");

    }

}

const app = new App();
app.init();