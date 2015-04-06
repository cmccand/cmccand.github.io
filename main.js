$(document).ready(function(){
  $('.screen').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true,
    responsive:true
  });

  $('.test').click(function(){
    $("#screeny").slick('slickPrev');
  });

});
