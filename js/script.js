$(".header-slider").owlCarousel({
  // autoplay: true,
  // loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

// counter start
$(".counter").counterUp({
  delay: 10,
  time: 2000,
  offset: 70,
  formatter: function (n) {
    return n.replace(/,/g, ".");
  },
});
// counter end

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const mobilenav = document.querySelector('.mobilenav');

hamburger.addEventListener('click', function(){
    bar1.classList.toggle('animateBar1')
    bar2.classList.toggle('animateBar2')
    bar3.classList.toggle('animateBar3')
    mobilenav.classList.toggle('openDarwer')
})

// Isotope Filter

$(window).on("load", function () {
  // Intailize isotope
  $("#isotope-container").isotope({
  // options here...
  });

  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
  // Get filter value
  var filterValue = $(this).attr("data-filter");

  // filter portfolio items
  $("#isotope-container").isotope ({
  //options here
  filter: filterValue
  });

  // active button
  $("#isotope-filters").find(".active").removeClass("active");
  $("this").addClass("active");
  });
});