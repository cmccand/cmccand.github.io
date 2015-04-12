$(document).ready(function(){
  $('.screen').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true,
    responsive:true
  });

  $('.prev').click(function(){
    $("#screeny").slick('slickPrev');
  });

  $('.next').click(function(){
    $("#screeny").slick('slickNext');
  });

  $(function() {
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });

  $(function() {
    $("#modal-2").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
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
