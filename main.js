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

  // $(".img").mouseover(function(){
  //   $(".slide").children('.description').css("display", "block");
  //   $(".slide").children('.description').css("position", "absolute");
  //   $(".slide").children('.link').css("display","block");
  //   $(".slide").children('img').css("position", "relative");
  //   $(".slide").children('img').css("opacity", ".2");
  //   $(".slide").children('video').css("opacity", ".2");
  // });
  // $(".img").mouseout(function(){
  //   $(".slide").children('.description').css("display", "none");
  //   $(".slide").children('img').css("opacity", "1");
  //   $(".slide").children('video').css("opacity", "1");
  //   $(".slide").children('img').css("display", "block");
  //   $(".slide").children('video').css("display", "block");
  // });

  // $('.link').click(function() {
  //   window.location='http://cmccand.github.io/Group-2/client/';
  // });




});
