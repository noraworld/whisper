if (!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
  $(window).scroll(function() {
    if ($(window).width() > 500) {
      var postImageNumber = $('.post-image').length;

      for (var i = 0; i < postImageNumber; i++) {
        // 画像のスクロールを開始/終了するタイミングを遅く/早くしたいときに scrollOffset の値を大きくする
        var scrollOffset = 150;
        var scrollPositionSet = $(window).height() - $('.post-image').eq(i).height() - 2 * scrollOffset;
        var scrollPosition = 100 - ($('.post-image').eq(i).offset().top - $(this).scrollTop() - scrollOffset) / scrollPositionSet * 100;

        if (scrollPosition > 0 && scrollPosition < 100) {
          $('.post-image').eq(i).css('background-position-y', scrollPosition + '%');
        }
      }
    }
  });
}
