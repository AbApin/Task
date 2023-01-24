function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function checkZero(a) {
  return a < 10 ? '0' + a : a;
}
function loadCom(a, b) {
  setTimeout(function () {
    $(a).fadeIn(250);
  }, b);
}
function timer(a, b) {
  var min = checkZero(Math.round((a - 30) / 60));
  var sec = checkZero(a % 60);
  $(b).html(min + ':' + sec);
  var t = setInterval(function () {
    a--;
    min = checkZero(Math.round((a - 30) / 60));
    sec = checkZero(a % 60);
    $(b).html(min + ':' + sec);
    if (a == 0) {
      clearInterval(t);
    }
  }, 1000);
  return false;
}
$(document).ready(function () {
  timer(300, '.timer');

  // bottom bar appears after this many pixels
  $(window).on('scroll', function () {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition > 1500) {
      $('.bitcoin').fadeIn(300);
    } else {
      $('.bitcoin').fadeOut(300);
    }
  });
});
