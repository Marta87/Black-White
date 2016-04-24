$(function () {
  //Hamburger menu
  $(".hamburger-menu").on("click", function(){
    $(".hamburger-menu").hide();
    $(".menu").show();
  })
  
   //Menu fixed 
  var nav = $("nav");
  var menu = $(".menu");


   var scrollingStartDistance = $(".menu").offset().top;

    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        
        $(".menu").toggleClass("sticky", scrollTop > scrollingStartDistance);
    });
})