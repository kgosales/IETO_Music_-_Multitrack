const lista = document.querySelector("#lista");

fetch("data/multitracks.json")
    .then(response => response.json())
    .then(multitracks => {

        multitracks.sort((a, b) => a.artista.localeCompare(b.artista) || a.musica.localeCompare(b.musica));

        const fragment = document.createDocumentFragment();

        multitracks.forEach((multitrack, index) => {
            const div = document.createElement("div");
            div.className = "multitrack";
            div.innerHTML = `
                <p class="numero">${index + 1}</p>
                <div class="info">
                    <p><span>Artista: </span>${multitrack.artista}</p>
                    <p><span>Música: </span>${multitrack.musica}</p>
                    <p><span>Origem: </span>${multitrack.origem}</p>
                </div>
                <div class="links">
                    <span>Links</span>
                    <a href=${multitrack.link_youtube || "#"} target="_blank" ${!multitrack.link_youtube ? 'disabled' : ''}><img src=icons/youtube.png ></a>
                    <a href=${multitrack.link_download || "#"} target="_blank" ${!multitrack.link_download ? 'disabled' : ''}><img src=icons/download.png ></a>
                </div>
            `;
            fragment.appendChild(div);
        });

        lista.appendChild(fragment);
    })
    .catch(error => console.error(error));
