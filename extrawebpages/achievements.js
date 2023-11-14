// achievements.js

import achievementsData from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  const timelineContainer = document.getElementById("timeline-container");

  // Function to create a timeline item
  function createTimelineItem(achievement, index) {
    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

    const timelineContent = document.createElement("div");
    timelineContent.className = "timeline-content";
    timelineContent.innerHTML = `<h3>${achievement.date}</h3><p>${achievement.name}</p>`;

    timelineItem.appendChild(timelineContent);
    return timelineItem;
  }

  // Function to render the sorted timeline
  function renderTimeline() {
    // Sort achievementsData by month and year
    const sortedData = achievementsData.slice().sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });

    sortedData.forEach((achievement, index) => {
      const timelineItem = createTimelineItem(achievement, index);
      timelineContainer.appendChild(timelineItem);
    });
  }

  // Call the function to render the sorted timeline on page load
  renderTimeline();
});
