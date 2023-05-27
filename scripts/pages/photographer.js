//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() { 
    return fetch("../../data/photographers.json") 
    .then((response) => response.json()) .then((data) => data); } 
    


function getParamIdUrl() {
    const queryString = window.location.search;
    const urlId = new URLSearchParams(queryString)
    const phId = urlId.get("id")
    return phId;
}

function getPhotographerById (photographers, idUrl) {
    const photographer = photographers.find((photographe) => +photographe.id === +idUrl);
    console.log(photographer)
    return photographer;
    
}

function getMediaById (media, idUrl) {
    const medias = media.find((media) => +media.photographerId === +idUrl).each(media);
    console.log(medias)
    return (medias)
}

async function displayData(photographer, idUrl, media) {

//Photograph
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const infoPhotographe = photographerModel.getinfoPhotographe();

//Media 
    // const mediaSection = docuement.querySelector(".photo")
    // media.forEach((media) => +media.photographerId === +idUrl {
    //     const mediaModel = mediaFactory(media);
    //     const infoMedia = mediaModel.getinfoMedia();
    //     mediaSection.appendChild(infoMedia);
    // })
    return (photographersSection)
}

async function init() {
     // Récupère les datas des photographes
     const { photographers } = await getPhotographers();
     const { media } = await getPhotographers();
     idUrl = getParamIdUrl();
     const photographer = getPhotographerById (photographers, idUrl);
     const mediaId = getMediaById (media,idUrl)
     displayData(photographer, idUrl, media);
    };


init();





    
     // photographers.forEach((photographer) => {
     //     const photographerModel = photographerFactory(photographer);
     //     const userCardDOM = photographerModel.getUserCardDOM();
     //     photographersSection.appendChild(userCardDOM);
     // });