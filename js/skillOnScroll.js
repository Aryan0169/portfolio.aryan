const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const progressWrapper = entry.target.querySelectorAll(
            `[data-progress^="progress"]`
        );
        // select square or circle class using querySelector

        if (entry.isIntersecting) {
            progressWrapper.forEach((n) =>
                n.classList.add(n.getAttribute("data-progress"))
            );
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        progressWrapper.forEach((n) =>
            n.classList.remove(n.getAttribute("data-progress"))
        );
    });
});

observer.observe(document.querySelector(".ski-bars"));

