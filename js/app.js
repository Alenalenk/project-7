(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const focusParagrarh = document.querySelector(".focus__content p");
    const positionPC = document.querySelector(".focus__title");
    const positionMobile = document.querySelector(".focus__button");
    const headerButton = document.querySelector(".header__button");
    const headerMenu = document.querySelector(".header__menu");
    const menuBurger = document.querySelector(".menu-burger");
    const menuBurgerClose = document.querySelector(".menu-list__close span");
    window.addEventListener("resize", changePosition);
    function changePosition() {
        if (document.documentElement.clientWidth > 991.98) {
            positionPC.after(focusParagrarh);
            headerMenu.after(headerButton);
        } else {
            positionMobile.after(focusParagrarh);
            headerMenu.insertAdjacentElement("beforeend", headerButton);
        }
    }
    menuBurger.addEventListener("click", (() => {
        document.body.classList.add("menu-open", "lock");
    }));
    menuBurgerClose.addEventListener("click", (() => {
        document.body.classList.remove("menu-open", "lock");
    }));
    changePosition();
    const animations = document.querySelectorAll(".animation");
    function scrollAnimation() {
        for (let i of animations) {
            const positionY = i.offsetTop;
            const positionScroll = window.innerHeight / 2 + window.scrollY;
            if (positionScroll >= positionY) i.classList.add("active");
        }
    }
    window.addEventListener("scroll", scrollAnimation);
    const script_button = document.querySelector(".focus__circle");
    const buttons = document.querySelectorAll("#circle");
    const slideImage = document.querySelector(".focus");
    script_button.addEventListener("click", changeImage);
    function changeImage(e) {
        const buttonActive = e.target.closest("#circle");
        for (let i of buttons) i.classList.remove("active");
        buttonActive.classList.add("active");
        slideImage.style.backgroundImage = `url('../${buttonActive.dataset.src}')`;
        console.log(buttonActive.dataset.src);
    }
    window["FLS"] = true;
    isWebp();
})();