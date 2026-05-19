export default class ScrollEffects {

    constructor() {
        this.cards = document.querySelectorAll(".card, .project-card");
    }

    init() {

        this.cards.forEach(card => {

            card.addEventListener("mouseenter", () => {
                card.style.transform = "translateY(-8px)";
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "translateY(0)";
            });

        });

    }

}