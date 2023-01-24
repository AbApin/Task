var state = [
  'Melbourne',
  'Brisbane',
  'Sunshine Coast',
  'Townsville',
  'Melbourne',
  'Sydney',
  'Canberra',
  'Wollongong',
  'Sunshine Coast',
  'Sydney',
  'Sydney',
  'Canberra',
  'Townsville',
  'Hobart',
  'Sunshine Coast',
  'Adelaide',
  'Hobart',
  'Brisbane',
  'Adelaide',
  'Perth',
  'Perth',
  'Brisbane',
  'Hobart',
  'Townsville',
  'Wollongong',
  'Adelaide',
  'Perth',
  'Melbourne',
  'Canberra',
  'Wollongong',
];

(function pop() {
  setTimeout(function () {
    $('.state').html(state[random(0, state.length - 1)]);
    $('.amount').html('$' + random(92, 250) + '');
    $('.notification-bottom').animate({ bottom: 70 }, 300, function () {
      setTimeout(function () {
        $('.notification-bottom').animate({ bottom: -100 });
      }, 4000);
    });
    $('.notification-top').animate({ top: 80 }, 300, function () {
      setTimeout(function () {
        $('.notification-top').animate({ top: -60 });
      }, 4000);
    });
    pop();
  }, random(10000, 16000));
})();
