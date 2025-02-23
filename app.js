const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


// Image Filter
var $wrapper = $(".images");

// Initialize isotope
$wrapper.isotope({
  filter: "*",
  layoutMode: "masonry",
  animationOptions: {
    duration: 750,
    easing: "linear",
  },
});

let links = document.querySelectorAll(".tabs a");
links.forEach((link) => {
  let selector = link.dataset.filter;
  link.addEventListener("click", function (e) {
    e.preventDefault();
    $wrapper.isotope({
      filter: selector,
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    });
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// magnific pop up
$(".magnific").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
  zoom: {
    enabled: true,
  },
});