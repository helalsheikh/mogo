

$(window).scroll(function(){

var scrolling = $(this).scrollTop();

if(scrolling > 50){

    $(".navbar").addClass('nav_amimation');

}else{

    $(".navbar").removeClass('nav_amimation');
}


})


$('.test_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
  });

  
$('.team_slied').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
