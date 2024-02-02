let tabs = document.querySelectorAll(".tabs h3");

let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
})

function video() {
    var link = document.querySelector(".active .link");
    if (link.value !== "") {
        if (link.value.indexOf("https://youtu.be/") !== -1) {
            var VTurl = link.value.replace("https://youtu.be/", "https://www.000tube.com/watch?v=");
            window.open(VTurl, "_blank");
        }
    } else {
        var h = document.createElement("h1")
        h.style.background = "red"
        h.style.color = "white"
        h.innerText = "Fuck this link"
        tabContents.body.appendChild(h)
        
    }
}