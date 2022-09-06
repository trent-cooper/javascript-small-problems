$(function() {

  $('article a').on('click', function(e) {
    e.preventDefault();
    let member = $(this).data('member');
    let memberImg = $(this).data('image');

    $('#modal img').attr('src', memberImg);
    $('#modal h3').text(member);

    $('#modal_layer').attr('class', 'show').fadeTo( "slow", 1 );
    $('#modal').fadeIn(300);
  });

  $('.close, .hide').on('click', function(e) {
    e.preventDefault();

    $('#modal_layer').attr('class', 'hide');
    $('#modal').fadeOut(300);
  })

});