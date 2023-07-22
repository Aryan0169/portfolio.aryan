const proleftDiv = document.querySelector(".proleft");

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
    background-color: rgba(103, 84, 69, 0.2);
    width: 50%;
    border-radius: 20px;
    letter-spacing: 2px;
    font-size: 15px;
    margin: 10px 10px;
    padding: 15px;
    transition: width 0.3s ease;
  `
    );

    const image = document.createElement("img");
    image.setAttribute("src", project.imageUrl);
    image.style.width = "80%";
    image.style.borderRadius = "5px";
    card.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = project.title;
    title.style.fontFamily = "Zero";
    title.style.textAlign = "center";
    title.style.opacity = "0.8";
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    description.style.display = "none";
    description.style.textAlign = "center";
    description.style.opacity = "0.8";
    card.appendChild(description);

    const button = document.createElement("button");
    button.textContent = project.buttontitle;
    button.style.padding = "10px 20px";
    button.style.display = "none";
    button.style.marginTop = "10px";
    button.style.border = "1px solid white";
    button.style.backgroundColor = "transparent";
    button.style.color = "white";
    button.style.borderRadius = "5px";

    // Add event listener for hover effect
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#cccccc";
        button.style.color = "black";
        button.style.cursor = "pointer";
    });

    // Reset the styles when not hovered
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "initial";
        button.style.color = "white";
        button.style.cursor = "default";
    });

    // Redirect the button link when clicked
    button.addEventListener("click", () => {
        window.location.href = project.link;
    });

    card.addEventListener("mouseover", () => {
        card.style.width = "90%"; // Increase width on hover
        description.style.display = "block";
        description.style.width = "80%";
        button.style.display = "block";
    });

    // Reset the width when not hovered
    card.addEventListener("mouseout", () => {
        card.style.width = "50%"; // Reset width when not hovered
        description.style.display = "none";
        button.style.display = "none";
    });

    card.appendChild(button);

    proleftDiv.appendChild(card);
}