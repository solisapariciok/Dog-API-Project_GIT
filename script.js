document.addEventListener('DOMContentLoaded', () => {
    const breedsContainer = document.getElementById('breeds-list');
    const imagesContainer = document.getElementById('images-list');

    if (breedsContainer) {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => {
                data.forEach(breed => {
                    const div = document.createElement('div');
                    div.classList.add('breed');
                    div.innerHTML = `
                        <h3>${breed.name}</h3>
                        <p>Life Span: ${breed.life_span}</p>
                        <p>Temperament: ${breed.temperament || 'N/A'}</p>
                    `;
                    breedsContainer.appendChild(div);
                });
            })
            .catch(error => {
                breedsContainer.innerHTML = `<p>Error loading breeds: ${error}</p>`;
            });
    }

    if (imagesContainer) {
        fetch('https://api.thedogapi.com/v1/images/search?limit=12')
            .then(response => response.json())
            .then(data => {
                data.forEach(image => {
                    const div = document.createElement('div');
                    div.classList.add('dog-image');
                    div.innerHTML = `<img src="${image.url}" alt="Dog Image">`;
                    imagesContainer.appendChild(div);
                });
            })
            .catch(error => {
                imagesContainer.innerHTML = `<p>Error loading images: ${error}</p>`;
            });
    }
});
