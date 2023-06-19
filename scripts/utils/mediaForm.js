
function displayMedia () {
    const mediaModal = document.getElementById("media_modal")
    mediaModal.style.display = "flex";
    const body = document.body
    body.style.height = "100%"
    body.style.overflowY = "hidden"

}

function closeModalMedia() {
    const mediaModal = document.getElementById("media_modal");
    mediaModal.style.display = "none";
    const body = document.body;
	body.style.height = 'initial';
 	body.style.overflowY = 'initial';
}

