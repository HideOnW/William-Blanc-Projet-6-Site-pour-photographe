//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() { 
    return fetch("../../data/photographers.json") 
    .then((response) => response.json()) .then((data) => data); } 
    
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographers);
    const infoPhotographe = photographerModel.getinfoPhotographe();
    // photographersSection.appendChild(infoPhotographe);
    return (photographersSection)
}

async function init() {
     // Récupère les datas des photographes
     const { photographers } = await getPhotographers();
     displayData(photographers);
    };


init();





    
     // photographers.forEach((photographer) => {
     //     const photographerModel = photographerFactory(photographer);
     //     const userCardDOM = photographerModel.getUserCardDOM();
     //     photographersSection.appendChild(userCardDOM);
     // });