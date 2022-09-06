$(function() {
  let $displayImg = $('figure img');

  $('ul a').on('click', function(e) {
    e.preventDefault();
    $displayImg.stop();
    
    let allThumb = $('li img');
    let activeThumb = $(this).find('img')

    allThumb.removeClass('active');
    activeThumb.addClass('active');

    $displayImg.fadeOut("slow", () => {
      $displayImg.attr('src', activeThumb.attr('src'));
    });
    $displayImg.fadeIn("slow");
  })
})