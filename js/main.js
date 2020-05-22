//Loader

$(window).on('load' , function(){
  $('.loader').delay(1600).fadeOut('slow');
});

//ZOOM

if($('.gallery').length>0){
  baguetteBox.run('.gallery',{    
  });
}

//Filter

$('.filter__item').click(function(event){
  let i = $(this).data('filter');
  if(i==1){
    $('.portfolio__column').show();
  }else{
    $('.portfolio__column').hide();
    $('.portfolio__column.f_'+i).show();
  }
  $('.filter__item').removeClass('filter__item_act');
  $(this).addClass('filter__item_act');

  return false;
});

//WOW-INIT
new WOW().init();

//Header burger

$(document).ready(function(){
  $('.header__burger-menu').click(function(event){
    $('.burger-menu__button,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//Scroll top button

function backToTop(){
  let button = $('.footer__button');

  button.on('click',(e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
  })

}
backToTop();