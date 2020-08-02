var navBar = $("#navbar");
$(window).scroll(function (event) {
  if ($(window).width() >= 1024) {
    navBar.addClass("color");
  }
  if ($(window).scrollTop() == 0) {
    navBar.removeClass("color");
  }
});
if ($(window).scrollTop() > 0) {
  navBar.addClass("color");
}

$(document).ready(function () {
  AOS.init();
  $("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500
    );
  });
});
