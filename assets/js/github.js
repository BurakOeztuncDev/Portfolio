export default class Github {

    async init() {

        const container =
            document.getElementById("github-projects");

        const username = "BurakOeztuncDev";

        try {

            const response =
                await fetch(
                    `https://api.github.com/users/${username}/repos`
                );

            const repos =
                await response.json();

            repos.slice(0, 3).forEach(repo => {

                const card =
                    document.createElement("div");

                card.classList.add("project-card");

                card.innerHTML = `
                    <div class="project-content">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || "Keine Beschreibung"}</p>
                    </div>
                `;

                container.appendChild(card);

            });

        } catch(error){

            console.error(error);

        }

    }

}