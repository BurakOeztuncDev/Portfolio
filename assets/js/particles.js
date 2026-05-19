export default class Particles {

    init() {

        const particles =
            document.getElementById("particles");

        for(let i = 0; i < 40; i++){

            const particle =
                document.createElement("div");

            particle.classList.add("particle");

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.animationDuration =
                5 + Math.random() * 10 + "s";

            particle.style.opacity =
                Math.random();

            particles.appendChild(particle);

        }

    }

}