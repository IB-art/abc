$(function(){
  $('.header__btn').on('click', function(){
    $('.header__menu').toggleClass('header__menu--active');
  });
  

  $('.experts-slider').slick({
    prevArrow: '<button type="button" class="arrow-prev slick-arrow"><img src="images/arrow-right.png" alt=""></button>',
    nextArrow: '<button type="button" class="arrow-next slick-arrow slick-arrow--active"><img src="images/arrow-right.png" alt=""></button>',
    centerMode: true,
    slidesToShow: 3.7,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.7
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
    autoplay: true,
          slidesToShow: 1.7
        }
      }
    ]
  });

  $('.slick-arrow').on('click', function (e) {
    e.preventDefault();
  
    
    $('.slick-arrow').removeClass('slick-arrow--active');
    $(this).addClass('slick-arrow--active');
    
  });

  $('.news__item').on('click', function (e) {
    e.preventDefault();
  
    
    $('.news__item').removeClass('news__item--active');
    $(this).addClass('news__item--active');
    
  });


  $('.footer__social a').on('click', function (e) {
    e.preventDefault();
  
    
    $('.footer__social a').removeClass('footer__social--active');
    $(this).addClass('footer__social--active');
    
  });

 
  

});