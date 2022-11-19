$(function(){
   //aox pluggin initialization
  AOS.init()
  //venobox pluggin initialization
  new VenoBox({
    selector: ".pluggin",
    
    share:true,
});
new VenoBox({
  selector: ".venobox",
  
  share:true,
});
//back to top button
$(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    })
//navfixed starts here
    let nav = $("nav")
    $(window).scroll(function(){
      let scrolTop =  $(window).scrollTop();
      if(scrolTop > 500){
        nav.addClass('navfixed')
      }
      else{
        nav.removeClass('navfixed')
      }
    })
    $(".scrollup").click(function() {
          $("html, body").animate({
            scrollTop: 0
          }, 600);
          return false;
        })
    //preloader

    let preloader = $('.preloader')
 $(window).on('load',function(){
    preloader.hide()
 })

 //searchbar

 let searchicon = $('.search')
 let input = $('.input')
 let cross = $('.cross')
 searchicon.click(function(){
  input.show(300)
  cross.show(300)
 })
 cross.click(function(){
  input.hide(300)
  cross.hide(300)
 })

 //pluggin(slider)
 $(document).ready(function(){
  $('.port-slider').slick({
    slidesToShow: 3,
    prevArrow:"#port .port-arrow .left-arrow",
    nextArrow:"#port .port-arrow .right-arrow",

  });

});

$(document).ready(function(){
  $('.service-pluggin').slick({
    slidesToShow: 3,  
    prevArrow:"#service .service-arrow .left-arrow",
    nextArrow:"#service .service-arrow .right-arrow",
   dots:true,
  });
});

 //progressbar
 $('.myskill').rProgressbar({
  percentage: 90,
});




})