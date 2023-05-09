function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
		const div = document.createElement ( 'div' );
		const aPhotographer = document.createElement( 'a' );
		aPhotographer.href = "photographer.html";
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
		const PhAriaLabel = "Carte de présentation de " + name
		article.ariaLabel = PhAriaLabel
		const h3 = document.createElement( 'h3' );
		const localisation = [city,country];
		h3.textContent = localisation;
		const p1 = document.createElement( 'p' );
		p1.textContent = tagline;
		const p2 = document.createElement( 'p' );
		p2.textContent = data.price + '€/jour';
        // article.appendChild(img);
        // article.appendChild(h2);
		article.appendChild(aPhotographer);
		article.appendChild(div);
		aPhotographer.appendChild(img);
		aPhotographer.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(p1);
		div.appendChild(p2);
        return (article);
    }
    return { name, picture, getUserCardDOM }

	function getinfoPhotographe() {
		const article2 = document.createElement( 'article' );
		const PhDescription = document.querySelector(".Ph_description")
		const PhContact = document.querySelector(".contact_button")
		const PhPhoto = document.querySelector(".Ph_photo")
		const h2 = document.createElement( 'h2' );
        h2.textContent = name;
		const h3 = document.createElement( 'h3' );
		const localisation = [city,country];
		h3.textContent = localisation;
		const p1 = document.createElement( 'p' );
		p1.textContent = tagline;
		article2.appendChild(PhDescription);
		article2.appendChild(PhContact);
		article2.appendChild(PhPhoto);
		PhDescription.appendChild(h2)
		PhDescription.appendChild(h3);
		PhDescription.appendChild(p1);
		return (article2);
		console.log(data.name)
	}
	return { getinfoPhotographe }
}