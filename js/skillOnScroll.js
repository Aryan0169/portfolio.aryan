function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startTypingAnimation();
    }
  });
}

function startTypingAnimation() {
  const homeHeading = document.getElementById("typing-effect");
  const cursor = document.getElementById("cursor");
  const textToType = "Aryan Bansal";
  let currentIndex = 0;
  homeHeading.textContent = ""; // Clear previously typed text

  function typeNextCharacter() {
    if (currentIndex < textToType.length) {
      homeHeading.textContent += textToType.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeNextCharacter, 100); // Adjust the typing speed (milliseconds)
    } else {
      cursor.style.visibility = "visible"; // Show the cursor when typing is complete
      blinkCursor();
    }
  }

  function blinkCursor() {
    cursor.style.visibility =
      cursor.style.visibility === "visible" ? "hidden" : "visible";
    setTimeout(blinkCursor, 500); // Adjust the blinking speed (milliseconds)
  }

  typeNextCharacter();
}

const observer1 = new IntersectionObserver(handleIntersection);
const target1 = document.getElementById('typing-effect');
observer1.observe(target1);

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const skillBars = entry.target.querySelectorAll("#skills [data-progress^='progress']");

    if (entry.isIntersecting) {
      skillBars.forEach((skill) =>
        skill.classList.add(skill.getAttribute("data-progress"))
      );
      return;
    }

    skillBars.forEach((skill) =>
      skill.classList.remove(skill.getAttribute("data-progress"))
    );
  });
});

const target2 = document.getElementById("skills");
observer2.observe(target2);


