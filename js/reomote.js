function scrollUp() {
  window.scrollBy({ top: -5000, behavior: "smooth" });
}

function scrollDown() {
  window.scrollBy({ top: 5000, behavior: "smooth" });
}
function scrollToSection(className) {
  document
    .querySelector("." + className)
    .scrollIntoView({ behavior: "smooth" });
}
