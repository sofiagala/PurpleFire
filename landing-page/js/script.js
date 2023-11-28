// Scroll to element
function scrollToElement(event) {
  event.preventDefault();
  var targetElement = document.getElementById("section-1");
  targetElement.scrollIntoView({ behavior: "smooth" });
}
