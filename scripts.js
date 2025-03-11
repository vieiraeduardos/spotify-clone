document.addEventListener("DOMContentLoaded", () => {
    const artistsData = [
        { "name": "Zé Neto e Cristiano", "image": "./public/artista-ze-neto.jpg" },
        { "name": "Zé Neto e Cristiano", "image": "./public/artista-ze-neto.jpg" },
        { "name": "Zé Neto e Cristiano", "image": "./public/artista-ze-neto.jpg" },
        { "name": "Zé Neto e Cristiano", "image": "./public/artista-ze-neto.jpg" },
        { "name": "Zé Neto e Cristiano", "image": "./public/artista-ze-neto.jpg" },
    ]
    
    const albumsData = [
        { "name": "Artigo 57", "artist": "Racionais", "image": "./public/album-vida-loka.jpg" },
        { "name": "Artigo 57", "artist": "Racionais", "image": "./public/album-vida-loka.jpg" },
        { "name": "Artigo 57", "artist": "Racionais", "image": "./public/album-vida-loka.jpg" },
        { "name": "Artigo 57", "artist": "Racionais", "image": "./public/album-vida-loka.jpg" },
        { "name": "Artigo 57", "artist": "Racionais", "image": "./public/album-vida-loka.jpg" }
    ]

    const artistsGrid = document.querySelector(".artists-grid");
    const albumsGrid = document.querySelector(".albums-grid");

    artistsData.forEach(artist => {
        const artistElement = document.createElement("div");
        artistElement.classList.add("artist-card");
        artistElement.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" />
            <h3>${artist.name}</h3>
            <p>artista</p>
        `;
        artistsGrid.appendChild(artistElement);
    });

    albumsData.forEach(album => {
        const albumElement = document.createElement("div");
        albumElement.classList.add("album-card");
        albumElement.innerHTML = `
            <img src="${album.image}" alt="${album.name}" />
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;
        albumsGrid.appendChild(albumElement);
    });
});