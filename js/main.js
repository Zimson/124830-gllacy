var link = document.querySelector(".mapBlock .btnPrimary"),
    popup = document.querySelector(".popupForm"),
    form = popup.querySelector('.popupFeedbackForm'),
    close = popup.querySelector(".closeIco"),
    email = popup.querySelector("[type='email']"),
    name = popup.querySelector("[placeholder='Как вас зовут?']"),
    backPopup = document.querySelector(".backPopup"),
    storage = localStorage.getItem("name");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("choice");
    backPopup.classList.add("choice");

    if (storage) {
        name.value = storage;
        email.focus();
    } else {
        name.focus();
    }

});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("choice");
    popup.classList.remove("popupError");
    backPopup.classList.remove("choice");
});

form.addEventListener("submit", function(event) {
    if (!name.value || !email.value) {
        event.preventDefault();
        popup.classList.remove("popupError");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popupError");
    } else {
        localStorage.setItem("name", name.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("choice")) {
            popup.classList.remove("choice");
            popup.classList.remove("popupError");
            backPopup.classList.remove("choice");
        }
    }
});
