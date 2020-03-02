let observer = lozad('.lazy', {
    threshold: 0.1,
    loaded: function(el) {
        el.classList.remove("img-blur");
        el.removeAttribute("data-src");
    }
});

observer.observe();