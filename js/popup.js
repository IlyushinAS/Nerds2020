var link = document.querySelector(".contact-button");
var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".pop-up-close");
var form = popup.querySelector(".pop-up-form");
var yourName = popup.querySelector(".pop-up-form-input-name");
var eMail = popup.querySelector(".pop-up-form-input-email");
var eMailText = popup.querySelector(".pop-up-form-input-text");
var storageName = localStorage.getItem("yourName");
var storageMail = localStorage.getItem("eMail");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("pop-up-show");
    if (storageName && storageMail) {
        yourName.value = storageName;
        eMail.value = storageMail;
        eMailText.focus();
    } else {
        yourName.focus();
    };
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("pop-up-show");
    popup.classList.remove("pop-up-error");
});

form.addEventListener("submit", function(evt) {
    if (!yourName.value || !eMail.value || !eMailText.value) {
        evt.preventDefault();
        popup.classList.add("pop-up-error");
    } else {
        localStorage.setItem("yourName", yourName.value);
        localStorage.setItem("eMail", eMail.value);
    };
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("pop-up-show")) {
            popup.classList.remove("pop-up-show");
        }
    }
});