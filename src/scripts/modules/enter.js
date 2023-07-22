$(document).ready(function () {
  $('.payment__tab').click(function (e) {
    e.preventDefault();
    var targetTab = $(this).attr('data-tab');
    $('.payment__tab').removeClass('_active');
    $(this).addClass('_active');
    $('.payment__indicator').css('transform', 'translateX(' + $(this).index() * 100 + '%)');
    $('.tab-content').removeClass('_active');
    $(targetTab).addClass('_active');
  });
});
ы;
