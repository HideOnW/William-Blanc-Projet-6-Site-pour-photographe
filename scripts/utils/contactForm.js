function displayModal() { // eslint-disable-line
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    
}

function infoSend(event){
    event.preventDefault();
    const prenom = document.getElementById("prenom");
    console.log(prenom.value);
    const nom = document.getElementById("Nom");
    console.log(nom.value);
    const mail = document.getElementById("mail");
    console.log(mail.value);
    const message = document.getElementById("message");
    console.log(message.value);

    if (prenom.value && nom.value && mail.value){
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
        window.onscroll=function(){};
    }
    
}

const valid = document.getElementById("valid");
valid.addEventListener("click", infoSend);



function closeModal() { // eslint-disable-line
    const modal = document.getElementById("contact_modal");
    window.onscroll=function(){};
    modal.style.display = "none";
}
