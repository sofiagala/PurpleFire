window.addEventListener("load", function () {
  /*    Mobile Menu  */
  var toggleMenu = document.getElementById("mobile-menu");
  var mobileMenu = document.getElementById("mobile-menu-container");
  var closeMenu = document.getElementById("close-menu");

  toggleMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    mobileMenu.classList.toggle("show-in-desktop");
  });
  closeMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    mobileMenu.classList.toggle("show-in-desktop");
  });

  /*    Drop Down Menu in desktop */
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
    items: 2,
    slideBy: "page",
    gutter: 24,
    nav: true,
    navPosition: "bottom",
    controls: false,
    responsive: {
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  /* Mobile product thumbs Slider */
  var thumbsSlider = tns({
    container: ".product-thumbs-slider",
    items: 3,
    slideBy: 1,
    gutter: 0,
    nav: false,
    navPosition: "bottom",
    controls: true,
    loop: false,
    rewind: false,
    responsive: {
      1200: {
        disable: true,
      },
    },
  });

  /*    Footer Menu  */
  const allFooterItems = document.querySelectorAll(".footer-title");
  allFooterItems.forEach((el) => {
    el.addEventListener("click", function (event) {
      const isFooterItemHidden =
        getComputedStyle(document.querySelector("footer .show-in-desktop"))
          .display === "none";

      if (isFooterItemHidden) {
        const thisFooterItem = event.target;
        const sibling = thisFooterItem.nextElementSibling; // Get the next sibling
        sibling.classList.toggle("show-in-desktop"); // Add class to the current sibling
      }
    });
  });
});
