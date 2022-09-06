$(function() {
  let key = '';

  $('form').on('submit', function(e) {
    e.preventDefault();
    key = $(this).find("input[name='key']").val();
  });

  $(document).off('keypress').on('keypress', function(e) {
    if (e.key !== key) {
      return;
    }

    $('a').trigger('click');
  });

  $('a').on('click', function(e) {
    e.preventDefault();

    $('#accordian').slideToggle();
  })
})