window.addEventListener("load", function () {
  /*    Drop Down Menu */
  var toggleButton = document.getElementById("toggleButton");
  var menu = document.getElementById("menu-categories");

  toggleButton.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("is-hidden");
  });

  /* Close Menu on click  */
  document.body.addEventListener("click", function () {
    menu.classList.add("is-hidden");
  });

  /*  Add or Remove quantity when click '+' or '-'    */
  var addItem = document.getElementById("qtyplus");
  var removeItem = document.getElementById("qtyminus");
  var totalItems = document.getElementById("quantity").value;

  addItem.addEventListener("click", function (event) {
    event.stopPropagation();
    totalItems++;
    document.getElementById("quantity").value = totalItems;
  });
  removeItem.addEventListener("click", function (event) {
    event.stopPropagation();
    totalItems > 0 ? totalItems-- : totalItems;
    document.getElementById("quantity").value = totalItems;
  });

  /*    Newsletter subscribed button */
  var newsletterButton = document.getElementById("newsletter-subscribe");
  var newsletterEmail = document.getElementById("newsletter-email");

  newsletterButton.addEventListener("click", (event) => {
    if (validateEmail(newsletterEmail)) {
      event.preventDefault();
      newsletterButton.classList.add("subscribed");
      newsletterButton.innerHTML = "SUBSCRIBED!";
      newsletterButton.setAttribute("disabled", true);
    }
  });

  function validateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.value.match(validRegex);
  }

  /* Related Products slider  */
  var slider = tns({
    container: ".related-products-carousel-container",
    items: 4,
    slideBy: "page",
    gutter: 28,
    nav: true,
    navPosition: "bottom",
    controls: false,
  });
});
