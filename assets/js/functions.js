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
