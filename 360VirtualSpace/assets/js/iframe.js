function lazyLoad() {
  $('iframe').each(function() {
    var frame = $(this),
        vidSource = $(frame).attr('data-src'),
        distance = $(frame).offset().top - $(window).scrollTop(),
        distTopBot = window.innerHeight - distance,
        distBotTop = distance + $(frame).height();

    if (distTopBot >= 0 && distBotTop >= 0) { // if frame is partly in view
      $(frame).attr('src', vidSource);
      $(frame).removeAttr('data-src');
    }
  });
}

$(window).scroll(lazyLoad);