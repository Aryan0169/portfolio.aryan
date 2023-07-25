
const scroller = document.getElementById("style-4");
scroller.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    console.log(scroller.scrollTop);
    if (scroller.scrollTop > 200) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});