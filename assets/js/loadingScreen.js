export default class LoadingScreen {

    init() {

        window.addEventListener("load", () => {

            const loader =
                document.getElementById("loader");

            loader.classList.add("hide");

        });

    }

}