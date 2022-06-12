var backToTop = document.getElementById("back_to_top");
var container_ka_baap = document.getElementById("container_ka_baap");

window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
        backToTop.style.display = "none";
    } else {
        backToTop.style.display = "block";
    }
    });

function scrollToTop()
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
const countAll = document.querySelectorAll('.scroll-buttons').length;
console.log(countAll); 
