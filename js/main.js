const scrollUp = document.querySelector(".up__utu");
window.onscroll = function () {
    this.scrollY >= 100 ? scrollUp.classList.add("show__up__utu") : scrollUp.classList.remove("show__up__utu");
};

scrollUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
