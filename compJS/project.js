const proleftDiv = document.querySelector(".proleft");

// Create a new container to hold the cards
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// Append the new container to the parent div (proleftDiv)
proleftDiv.appendChild(cardContainer);

// Loop through the projects data and create cards dynamically
for (const project of projectsData) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Apply the given CSS styles to the card element
    card.setAttribute(
        "style",
        `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    margin: 10px 10px;
    margin-top: 10px;
    padding: 15px;
    background-color: rgba(103, 84, 69, 0.2);
    border-radius: 20px;
    letter-spacing: 2px;
    font-size: 15px;
    color: #fff;
    font-family: Poppins, sans-serif;
    text-align: center;
    transition: width 0.5s ease;

  `
    );

    const image = document.createElement("img");
    image.setAttribute("src", project.imageUrl);
    image.style.width = "80%";
    image.style.borderRadius = "5px";
    card.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = project.title;
    title.style.fontFamily = "Oneday";
    title.style.fontSize = "20px";
    title.style.textAlign = "center";
    title.style.width = "25vw";
    title.style.margin = "0px";
    title.style.marginTop = "20px";
    title.style.opacity = "0.8";
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    description.style.display = "none";
    description.style.width = "30vw";
    description.style.marginTop = "10px";
    description.style.marginBottom = "5px";
    description.style.textAlign = "center";
    description.style.opacity = "0.8";
    card.appendChild(description);

    const viewDetailsLink = document.createElement("a"); // Use an anchor element instead of a button
    viewDetailsLink.textContent = project.buttontitle; // Set the link text
    viewDetailsLink.style.padding = "10px 30%";
    viewDetailsLink.style.display = "none";
    viewDetailsLink.style.textDecoration = "none";
    viewDetailsLink.style.marginTop = "10px";
    viewDetailsLink.style.border = "1px solid white";
    viewDetailsLink.style.backgroundColor = "transparent";
    viewDetailsLink.style.color = "white";
    viewDetailsLink.style.borderRadius = "5px";
    viewDetailsLink.setAttribute("href", project.link); // Set the link's href attribute

    // Add event listener for hover effect
    viewDetailsLink.addEventListener("mouseover", () => {
        viewDetailsLink.style.backgroundColor = "#cccccc";
        viewDetailsLink.style.color = "black";
        viewDetailsLink.style.cursor = "pointer";
    });

    // Reset the styles when not hovered
    viewDetailsLink.addEventListener("mouseout", () => {
        viewDetailsLink.style.backgroundColor = "initial";
        viewDetailsLink.style.color = "white";
        viewDetailsLink.style.cursor = "default";
    });


    card.addEventListener("mouseover", () => {
        if (mediaQuery.matches) {
            card.style.width = "80%";
        } else {
            card.style.width = "45%";
        }
        description.style.display = "block";
        viewDetailsLink.style.display = "block";
    });

    // Reset the width when not hovered
    card.addEventListener("mouseout", () => {
        if (mediaQuery.matches) {
            card.style.width = "75%";
        } else {
            card.style.width = "40%";
        }
        description.style.display = "none";
        viewDetailsLink.style.display = "none";
    });

    card.appendChild(viewDetailsLink);

    cardContainer.appendChild(card);
}

const mediaQuery = window.matchMedia("(max-width: 850px)");

if (mediaQuery.matches) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.style.width = "75%";
        const title = card.querySelector("h3");
        if (mediaQuery.matches) {
            title.style.width = "75vw";
        } else {
            title.style.width = "25vw";
        }
        const description = card.querySelector("p");
        if (mediaQuery.matches) {
            description.style.width = "80vw";
        } else {
            description.style.width = "30vw";
        }
    });
}