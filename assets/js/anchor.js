let content = document.getElementById("content");

if (!!content) {
    
    let elems = content.querySelectorAll("h1, h2, h3, h4");

    elems.length > 0 && elems.forEach(function (elem) {
        
        let link = document.createElement("A");
        link.textContent = " #";
        link.classList.add("opacity-0", "align-top", "transition-opacity", "ease-in-out", "duration-300");
        link.setAttribute("href", "#" + elem.id);

        elem.appendChild(link);

    });

};