//Mettre le code JavaScript lié à la page photographer.html

 async function getPhotographers() { 
        return fetch("../../data/photographers.json") 
        .then((response) => response.json()) .then((data) => data); } 
        

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };

function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
		const div = document.createElement ( 'div' );
		const aPhotographer = document.createElement( 'a' )
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
		const h3 = document.createElement( 'h3' );
		const localisation = [city,country];
		h3.textContent = localisation;
		const p1 = document.createElement( 'p' );
		p1.textContent = tagline;
		const p2 = document.createElement( 'p' );
		p2.textContent = data.price + '€/jour';
        // article.appendChild(img);
        // article.appendChild(h2);
		article.appendChild(aPhotographer)
		article.appendChild(div);
		aPhotographer.appendChild(img)
		aPhotographer.appendChild(h2)
		div.appendChild(h3)
		div.appendChild(p1)
		div.appendChild(p2)
        return (article);
    }
    return { name, picture, getUserCardDOM }
}