function today(language) {
  var dayNames = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  };

  var monthNames = {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    fr: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembr',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
  };

  var lang =
    undefined === dayNames[language] || undefined === monthNames[language] ? 'en' : language;

  var now = new Date();

  document.write(
    dayNames[lang][now.getDay()] +
      ', ' +
      now.getDate() +
      ' ' +
      monthNames[lang][now.getMonth()] +
      '  ' +
      now.getFullYear(),
  );
}

function now() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  document.write(strTime);
}
