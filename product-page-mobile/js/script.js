window.addEventListener("load", function () {
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
    items: 2,
    slideBy: "page",
    gutter: 24,
    nav: true,
    navPosition: "bottom",
    controls: false,
  });
});
