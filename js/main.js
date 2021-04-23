function doStuff() {
  console.info("DOM loaded");

  function desktopNav(){
    let recalibratedScrollTop;
    let currentScrollTop = 0;
    let navbar = $("nav");

    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      let navBarHeight = navbar.height();

      currentScrollTop = scrollTop;

      if (recalibratedScrollTop < currentScrollTop && scrollTop > navBarHeight + navBarHeight) {
        navbar.addClass("scrollUp");
      } else if (recalibratedScrollTop > currentScrollTop && !(scrollTop <= navBarHeight)) {
        navbar.removeClass("scrollUp");
      }
      recalibratedScrollTop = currentScrollTop;
    });
  }
  desktopNav();
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doStuff);
} else {  // `DOMContentLoaded` has already fired
  doStuff();
}
