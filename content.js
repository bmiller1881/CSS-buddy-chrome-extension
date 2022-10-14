$(document).keypress(function (event) {
  if (event.keyCode === 124) {
    $('*').toggleClass('highlight-border');
    $('*').removeClass('highlight-border-em');
  }
});

$('a, img').click(function (event) {
  const classes = event.target.className.split(' ');
  if (classes.includes('highlight-border')) {
    event.preventDefault();
  }
});

$(document).click(function (event) {
  const classes = event.target.className.split(' ');
  if (classes.includes('highlight-border')) {
    $(event.target).addClass('highlight-border-em');
    alert(
      'width: ' +
        $(event.target).css('width') +
        '\r\n' +
        'height: ' +
        $(event.target).css('height')
    );
  }
});
