export default class ContactForm {

    init() {

        const form =
            document.getElementById("contact-form");

        form.addEventListener("submit", e => {

            e.preventDefault();

            alert("Nachricht gesendet 🚀");

            form.reset();

        });

    }

}