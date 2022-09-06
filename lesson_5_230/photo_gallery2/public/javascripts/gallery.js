$(function() {
  let photos = Handlebars.compile($('#photos').html().trim());
  let photo_information = Handlebars.compile($('#photo_information').html());
  let photo_comments = Handlebars.compile($('#photo_comments').html());
  let photo_comment = Handlebars.compile($('#photo_comment').html());
  Handlebars.registerPartial('photo_comment', $('#photo_comment').html())

  let photoData;
  let commentData;
  let currPhoto = 1;
  let photoCount;

  $.ajax({
    url: '/photos',
    type: 'GET',
    dataType: 'json',
  }).done(json => {
    photoData = json;
    photoCount = json.length;
    $('#slides').html(photos({photos: photoData}));
    displayInfo(photoData[0].id)
    getComments(photoData[0].id)
  });

  function displayInfo(id) {
    let infoData = photoData.filter(info => info.id === +id)[0];
    $('#photo_info').html(photo_information(infoData));
  }

  function getComments(id) {
    $.ajax({
      url: `/comments?photo_id=${id}`,
      type: 'GET',
      dataType: 'json',
    }).done(json => {
      commentData = json;
      $('#comments > ul').html(photo_comments({comments: commentData}));
    });
  }

  $('.next').on('click', nextPhoto);
  $('.prev').on('click', prevPhoto);

  function nextPhoto(e) {
    e.preventDefault();
    let $currPhoto = $('#slides figure').filter(`[data-id="${currPhoto}"]`);
    let $nextPhoto = $currPhoto.next('figure');
    
    if (currPhoto === photoCount) {
      $nextPhoto = $('#slides figure').first();
      currPhoto = 0;
    }
    currPhoto++;

    $currPhoto.fadeOut("slow", () => {
      $nextPhoto.fadeIn("slow");
    })

    let id = $nextPhoto.attr('data-id');
    displayInfo(id);
    getComments(id);
  }

  function prevPhoto(e) {
    e.preventDefault();
    e.preventDefault();
    let $currPhoto = $('#slides figure').filter(`[data-id="${currPhoto}"]`);
    let $nextPhoto = $currPhoto.prev();
    
    if (currPhoto === 1) {
      $nextPhoto = $('#slides figure').last();
      currPhoto = photoCount + 1;
    }
    currPhoto--;

    $currPhoto.fadeOut("slow", () => {
      $nextPhoto.fadeIn("slow");
    });

    let id = $nextPhoto.attr('data-id');
    displayInfo(id);
    getComments(id);
  }

  $('#photo_info').on('click', function(e) {
    e.preventDefault();
    if (e.target.dataset.property === 'likes') {
      sendLike(e);
    } else if (e.target.dataset.property === 'favorites') {
      sendFav(e);
    }
  });

  function sendLike(e) {
    let id = e.target.dataset.id;
    let infoData = photoData.filter(info => info.id === +id)[0]

    $.ajax({
      url: '/photos/like',
      type: 'POST',
      data: { photo_id: id },
      dataType: 'json',
    }).done(json => {
      infoData.likes = json.total;
      $('#photo_info').html(photo_information(infoData));
    })
  }

  function sendFav(e) {
    let id = e.target.dataset.id;
    let infoData = photoData.filter(info => info.id === +id)[0]

    $.ajax({
      url: '/photos/favorite',
      type: 'POST',
      data: { photo_id: id },
      dataType: 'json',
    }).done(json => {
      infoData.favorites = json.total;
      $('#photo_info').html(photo_information(infoData));
    })
  }

  $('section form').on('submit', sendComment);

  function sendComment(e) {
    e.preventDefault();

    $.ajax({
      url: '/comments/new',
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      data: $(this).serialize(),
      dataType: 'json',
    }).done(json => {
      $('#comments ul').append(photo_comment(json));
      this.reset();
    })
  }

})