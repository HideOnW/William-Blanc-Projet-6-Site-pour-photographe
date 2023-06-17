function photographerFactory(data) {
    const { name, city, country, portrait, tagline, price, id } = data;

    const picture = `assets/photographers/Photographers-ID-Photos/${portrait}`;

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





function mediaFactory(data) {

	const { id, photographerId, title, image, likes, date, price} = data;

	const picture = `assets/photographers/${photographerId}/${image}`;

	function getInfoMedia() {
		const a = document.createElement('a');
		// a.setAttribute("onclick", "openLightbox()")
		const article = document.createElement('article');
		// if (image === true){
		// 	const image1 = document.createElement('img');	
		// 	image1.setAttribute("onclick", "displayMedia()");
		// 	image1.setAttribute("src", picture);
		// 	console.log("nope")
		// 	return image1
		// }
		const image = document.createElement('img');	
		// image.setAttribute("onclick", "displayMedia()")
		image.setAttribute("src", picture)
		image.setAttribute("data-title", title)
		// image.setAttribute("data-", picture)
		const div1 = document.createElement('div');
		const h3 = document.createElement('h3');
		h3.textContent = title
		const div2 = document.createElement('div');
		const p = document.createElement('p')
		const image2 = document.createElement('img')
		image2.setAttribute("src", "assets/icons/heart.svg")	
		p.textContent = likes
		a.appendChild(article)
		article.appendChild(image)
		article.appendChild(div1)
		div1.appendChild(h3)
		div1.appendChild(div2)
		div2.appendChild(p)
		div2.appendChild(image2)

		addEventListernerToMedia(image)
		return a
		}

	function addEventListernerToMedia (mediaElement) {
		mediaElement.addEventListener("click",function(event){
			console.log(mediaElement, event)
			const mediaModal = document.getElementById("media_modal")
			mediaModal.style.display = "flex";
			const titleModal = document.getElementById("modal-title-id");
			titleModal.textContent = event.target.dataset.title;
			const imageModal = document.getElementById("modal-image");
			imageModal.setAttribute("src", event.target.currentSrc)
			const arrow = document 
		})
	}

		return getInfoMedia
	}