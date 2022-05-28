var backToTop = document.getElementById("back_to_top")

window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
        backToTop.style.display = "none";
    } else {
        backToTop.style.display = "block";
    }
    });

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});