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
  
  const target2 = document.querySelector(".ski-bars");
  observer2.observe(target2);
  