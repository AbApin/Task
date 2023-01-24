$(document).ready(function () {
  $(document).scroll(function () {
    if ($(document).width() > 990) {
      if ($(document).scrollTop() > 300) {
        $('.header').css('transform', 'translateY(-176px)');
      } else {
        $('.header').css('transform', 'translateY(0px)');
      }
    } else if ($(document).width() < 990) {
      if ($(document).scrollTop() > 300) {
        $('.mobile_header_wrap').css('transform', 'translateY(-35px)');
        $('.user_btn').css('visibility', 'visible');
      } else {
        $('.mobile_header_wrap').css('transform', 'translateY(0px)');
        $('.user_btn').css('visibility', 'hidden');
      }
    }
  });

  window.onscroll = function () {
    loadProgress();
  };

  function loadProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('progress_bar').style.width = scrolled + '%';
  }
});
