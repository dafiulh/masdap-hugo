let lastPos = document.documentElement.scrollTop;
let header = document.getElementById("header");

window.addEventListener("scroll", function () {

    let currPos = document.documentElement.scrollTop;

    if (currPos > lastPos) {
        if (currPos > header.offsetHeight) {
            header.classList.add("-translate-y-full");
            header.classList.remove("shadow-md");
        };
    } else {
        header.classList.remove("-translate-y-full");
        header.classList.add("shadow-md");
    };
  
    lastPos = currPos;
    
});