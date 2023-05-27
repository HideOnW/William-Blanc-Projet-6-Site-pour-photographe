function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
		const div = document.createElement ( 'div' );
		const aPhotographer = document.createElement( 'a' );
		aPhotographer.href = "photographer.html?id=" + id;
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
		article.appendChild(aPhotographer);
		article.appendChild(div);
		aPhotographer.appendChild(img);
		aPhotographer.appendChild(h2);
		div.appendChild(h3);
		div.appendChild(p1);
		div.appendChild(p2);
        return (article);
    }

	function getinfoPhotographe() {
		const queryString = window.location.search
		const urlId = new URLSearchParams(queryString)
		urlId.set("name", {name})
		const phId = urlId.get('id')
		const header = document.querySelector(".photograph-header")
		const button = document.querySelector(".contact_button")
		const div = document.createElement( 'div' )
		const h2 = document.createElement( 'h2' );
        h2.textContent = urlId.name;
		const h3 = document.createElement( 'h3' );
		const localisation = [city,"country"];
		h3.textContent = localisation;
		const p1 = document.createElement( 'p' );
		p1.textContent = tagline;
		const img = document.createElement( 'img' )
		img.setAttribute("src", picture);
		header.appendChild(div);
		header.appendChild(button);
		header.appendChild(img);
		div.appendChild(h2)
		div.appendChild(h3);
		div.appendChild(p1);
	}
	
    return { name, picture, getUserCardDOM, getinfoPhotographe}
}

	//   <div class="photograph-header">
    //     <div class ="PhDescription">
    //       <h2>Mimi Keel</h2>
    //       <h3>London, UK</h3>
    //       <p> Voir le beau dans le quotidien</p>
    //     </div>
    //     <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    //     <img src="./assets/photographers/MimiKeel.jpg">
    //   </div>