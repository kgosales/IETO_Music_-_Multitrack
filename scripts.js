const lista = document.querySelector("#lista");

fetch("data/multitracks.json")
    .then(response => response.json())
    .then(multitracks => {
        for (const multitrack of multitracks) {
            const div = document.createElement("div");
            div.className = "multitrack";
            div.innerHTML = `
                <p class="numero">${multitracks.indexOf(multitrack) + 1}</p>
                <div class="info">
                    <p><span>Artista: </span>${multitrack.artista}</p>
                    <p><span>Música: </span>${multitrack.musica}</p>
                    <p><span>Origem: </span>${multitrack.origem}</p>
                </div>
                <div class="links">
                    <span>Links</span>
                    <a href=${multitrack.link_youtube || "#"} target="_blank"><img src=icons/youtube.png ></a>
                    <a href=${multitrack.link_download || "#"} target="_blank"><img src=icons/download.png ></a>
                </div>
                
            `;
            lista.appendChild(div);
        }

        const links = document.querySelectorAll(".links a");

        links.forEach((link) => {
            console.log(link.href);
            if (link.href.includes("#")) {
                link.setAttribute("disabled", "true");
            }
        });
    })

    .catch(error => console.error(error))
