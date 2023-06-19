let positionActuelle = 0
const allMedias = []

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

	const { id, photographerId, title, image, likes, date, price, position, video} = data;

	const picture = `assets/photographers/${photographerId}/${image}`;
	const videosrc =  `assets/photographers/${photographerId}/${video}`;

	function getInfoMedia() {
		allMedias.push(data)
		const a = document.createElement('a');
		// a.setAttribute("onclick", "openLightbox()")
		const article = document.createElement('article');
		if (image){
			const image1 = document.createElement('img');	
			image1.setAttribute("src", picture)
			image1.setAttribute("data-title", title)
			image1.setAttribute("data-position", position)
		article.appendChild(image1)
		addEventListernerToMedia(image1)
			console.log("nope")
		} else {
			const video = document.createElement('video')
			video.setAttribute("src", videosrc)
			video.setAttribute("control", "true")
			video.setAttribute("data-title", title)
			video.setAttribute("data-position", position)
		article.appendChild(video)
		addEventListernerToMedia(video)
	
		}
		// const image = document.createElement('img');	
		// image.setAttribute("src", picture)
		// image.setAttribute("data-title", title)
		// image.setAttribute("data-position", position)
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
		article.appendChild(div1)
		div1.appendChild(h3)
		div1.appendChild(div2)
		div2.appendChild(p)
		div2.appendChild(image2)

		return a
		}


	function addEventListernerToMedia (mediaElement) {
		mediaElement.addEventListener("click",function(event){
			console.log(mediaElement, event)
			const mediaModal = document.getElementById("media_modal")
			mediaModal.style.display = "flex";
			const body = document.body;
			body.style.height = '100vh';
 			body.style.overflowY = 'hidden';
			const titleModal = document.getElementById("modal-title-id");
			titleModal.textContent = event.target.dataset.title;
			positionActuelle = parseInt(event.target.dataset.position)

			const mediaDisplay = document.getElementById("media-display")


			let imageModal = document.getElementById("modal-image-id")
			let videoModal = document.getElementById("modal-video-id")
			if (event.target.localName === "img"){
				
			
				imageModal.setAttribute("src", event.target.currentSrc)
				imageModal.style.display  = "block"
				videoModal.style.display  = "none"


			// if (imageModal){
			// 	imageModal.remove();
			// }
			// 	 imageModal = document.createElement('img')
			// 	imageModal.setAttribute("id", "modal-image-id")
			// 	mediaDisplay.appendChild(imageModal)
				
				
			} else {
				
				videoModal.setAttribute("src", event.target.currentSrc)
				imageModal.style.display  = "none"
				videoModal.style.display  = "block"



			// if (videoModal){
			// 	videoModal.remove();
			// }
			// 	videoModal = document.createElement('video')
			// 	videoModal.setAttribute("id", "modal-image-id")
			// 	videoModal.setAttribute("autoplay", "true")

			// 	mediaDisplay.appendChild(videoModal)
			}

			

			// const imageModal = document.getElementById("modal-image-id");
			// imageModal.setAttribute("src", event.target.currentSrc)
		})
	}

		return getInfoMedia
	}


	const next = document.getElementById('next')

	next.addEventListener("click", function(event){
		const imageModal = document.getElementById("modal-image-id")
		const titleModal = document.getElementById("modal-title-id")

		if (positionActuelle + 1 >= allMedias.length) {
			positionActuelle = 0
		} else{
			positionActuelle = positionActuelle + 1
		}
		// positionActuelle = positionActuelle + 1;

		console.log(positionActuelle)
		console.log(allMedias)
		console.log(allMedias[positionActuelle]);
		console.log(allMedias.length)

		titleModal.textContent = allMedias[positionActuelle].title;		
		const picture = `assets/photographers/${allMedias[positionActuelle].photographerId}/${allMedias[positionActuelle].image}`
		imageModal.setAttribute("src", picture);
	})

	const last = document.getElementById('last')

	
	last.addEventListener("click", function(event){
		const imageModal = document.getElementById("modal-image-id")
		const titleModal = document.getElementById("modal-title-id")

		if(positionActuelle - 1 < 0){
			positionActuelle = allMedias.length - 1
		} else {
			positionActuelle = positionActuelle - 1
		}
		// positionActuelle = positionActuelle - 1;

		console.log(positionActuelle)
		console.log(allMedias)
		console.log(allMedias[positionActuelle]);

		titleModal.textContent = allMedias[positionActuelle].title;		
		const picture = `assets/photographers/${allMedias[positionActuelle].photographerId}/${allMedias[positionActuelle].image}`
		imageModal.setAttribute("src", picture);
	})

	// next.addEventListener("click", function(event)){
		
	// }




