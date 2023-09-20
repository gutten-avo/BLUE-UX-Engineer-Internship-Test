document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".product-container");
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");
  const tooltips = document.querySelectorAll(".scroll-button");

  let scrollPosition = 0;

  // Show tooltip on hover
  tooltips.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const tooltipText = button.getAttribute("data-tooltip");
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = tooltipText;
      button.appendChild(tooltip);
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
    });

    // Hide tooltip on mouse leave
    button.addEventListener("mouseleave", () => {
      const tooltip = button.querySelector(".tooltip");
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
      button.removeChild(tooltip);
    });
  });

  // Activate scroll buttons based on scroll position
  function enableScrollButtons() {
    if (scrollPosition <= 0) {
      leftButton.disabled = true;
      rightButton.disabled = false;
      hideTooltip(leftButton);
    } else if (
      scrollPosition >=
      container.scrollWidth - container.clientWidth
    ) {
      leftButton.disabled = false;
      rightButton.disabled = true;
      hideTooltip(rightButton);
    } else {
      leftButton.disabled = false;
      rightButton.disabled = false;
      hideTooltip(leftButton);
      hideTooltip(rightButton);
    }
  }

  // Hide tooltip for a specific button
  function hideTooltip(button) {
    const tooltip = button.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
      button.removeChild(tooltip);
    }
  }

  // Activate scroll buttons based on scroll position
  function enableScrollButtons() {
    if (scrollPosition <= 0) {
      leftButton.disabled = true;
      rightButton.disabled = false;
    } else if (
      scrollPosition >=
      container.scrollWidth - container.clientWidth
    ) {
      leftButton.disabled = false;
      rightButton.disabled = true;
    } else {
      leftButton.disabled = false;
      rightButton.disabled = false;
    }
  }

  // Scroll container to the right
  function scrollRight() {
    scrollPosition += 30;
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    enableScrollButtons();
  }

  // Scroll container to the left
  function scrollLeft() {
    scrollPosition -= 30;
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    enableScrollButtons();
  }

  // Add event listeners to scroll buttons
  leftButton.addEventListener("click", scrollLeft);
  rightButton.addEventListener("click", scrollRight);

  // Enable/disable scroll buttons on page load
  enableScrollButtons();
});

// Footer expand/collapse
function toggleFooter() {
  const footerContent = document.getElementById("footer-content");
  const toggleButton = document.getElementById("toggle-footer-button");

  if (footerContent.classList.contains("collapsed")) {
    footerContent.classList.remove("collapsed");
    toggleButton.innerHTML = "Collapse All <span class='chevron'>▲</span>"; // Chevron atas (▲)
  } else {
    footerContent.classList.add("collapsed");
    toggleButton.innerHTML = "Expand All <span class='chevron'>▼</span>"; // Chevron bawah (▼)
  }
}

// Scroll to top
window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
