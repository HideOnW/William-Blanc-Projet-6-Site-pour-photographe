//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() { 
    return fetch("../../data/photographers.json").then((response) => response.json()) .then((data) => data);
} 
    

function getParamIdUrl() {
    const queryString = window.location.search;
    const urlId = new URLSearchParams(queryString);
    const phId = urlId.get("id");
    return phId;
}



function getPhotographerById (photographers, idUrl) {
    const photographer = photographers.find((photographe) => +photographe.id === +idUrl);
    console.log(photographer);
    return photographer;
}



function getMediasById (media, idUrl) {
    const medias = media.filter((media) => +media.photographerId === +idUrl);
    return medias;
}

/* eslint-disable no-unused-vars, no-undef */
async function displayFiltre(typeTri){
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    idUrl = getParamIdUrl();
    const photographer = getPhotographerById (photographers, idUrl);
    const medias = getMediasById (media,idUrl);
    if(typeTri === "popularity"){
        medias.sort(function(a, b) {
            return b.likes - a.likes;
        });
    }

    if(typeTri === "title"){
        medias.sort(function(a, b){
            if (a.title > b.title){
                return 1;
            } else {
                return -1;
            }
        });
    }

    if(typeTri === "date"){
        medias.sort(function(a,b){

            if(new Date(a.date)>= new Date(b.date)){
                return 1;
            } else {
                return -1;
            }
        });
    }


    // displayData(photographer, idUrl, medias)
    const mediaSection = document.querySelector(".photo");
    let totalLikes = 0;
    document.getElementById("displayMedia").innerHTML = "";
    medias.forEach((media, position) => {
        const mediaModel = mediaFactory({...media, position});
        const infoMedia = mediaModel();
        mediaSection.appendChild(infoMedia);
        totalLikes = totalLikes + media.likes;
    });
    console.log(medias);
    return medias;
}


async function displayData(photographer, idUrl, medias) {
//Photograph
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const infoPhotographe = photographerModel.getinfoPhotographe();


//Media 
    const mediaSection = document.querySelector(".photo");
    let totalLikes = 0;
    medias.forEach((media, position) => {
        const mediaModel = mediaFactory({...media, position});
        const infoMedia = mediaModel();
        mediaSection.appendChild(infoMedia);

    
        totalLikes = totalLikes + media.likes;
    });
    
//Likes 
    const data = {price:photographer.price, totalLikes};
    const likesAdd = likesFactory(data);

    return (photographersSection);
}


async function init() {
     // Récupère les datas des photographes
     const { photographers } = await getPhotographers();
     const { media } = await getPhotographers();
     idUrl = getParamIdUrl();
     const photographer = getPhotographerById (photographers, idUrl);
     const medias = getMediasById (media,idUrl);
     displayData(photographer, idUrl, medias);
    }

init();
