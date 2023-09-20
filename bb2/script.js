document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".product-container");
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");

  let scrollPosition = 0;

  // Mengaktifkan tombol scroll kanan dan kiri
  function enableScrollButtons() {
    if (scrollPosition === 0) {
      leftButton.disabled = true;
      rightButton.disabled = false;
    } else if (
      scrollPosition ===
      container.scrollWidth - container.clientWidth
    ) {
      leftButton.disabled = false;
      rightButton.disabled = true;
    } else {
      leftButton.disabled = false;
      rightButton.disabled = false;
    }
  }

  // Menggerakkan konten ke kanan
  function scrollRight() {
    scrollPosition += 300; // Sesuaikan jumlah piksel yang ingin digerakkan
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    enableScrollButtons();
  }

  // Menggerakkan konten ke kiri
  function scrollLeft() {
    scrollPosition -= 300; // Sesuaikan jumlah piksel yang ingin digerakkan
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    enableScrollButtons();
  }

  // Menambahkan event listener untuk tombol scroll
  leftButton.addEventListener("click", scrollLeft);
  rightButton.addEventListener("click", scrollRight);

  // Memastikan tombol scroll aktif sesuai dengan posisi awal
  enableScrollButtons();
});

// Footer expand/collapse
function toggleFooter() {
  const footerContent = document.getElementById("footer-content");
  const toggleButton = document.getElementById("toggle-footer-button");

  if (footerContent.classList.contains("collapsed")) {
    footerContent.classList.remove("collapsed");
    toggleButton.textContent = "Collapse All";
  } else {
    footerContent.classList.add("collapsed");
    toggleButton.textContent = "Expand All";
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
