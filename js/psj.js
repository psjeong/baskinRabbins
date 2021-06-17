
$(function(){

    $(window).scroll(function(){
     if( $(window).scrollTop() > 0){
       $('body').addClass('scroll');
     }else{
       $('body').removeClass('scroll');
     }

   });

});




$(document).ready(function(){
  $('.sns1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    pauseOnHover : false,
    responsive: [ // 반응형 웹 구현 옵션
          {
            breakpoint: 991, //화면 사이즈 960px
            settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:3
            }
          },
          {
            breakpoint: 441, //화면 사이즈 960px
            settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:3
            }
          },
        ]
  });

  $('.sns2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    pauseOnHover : false,
    responsive: [ // 반응형 웹 구현 옵션
          {
            breakpoint: 991, //화면 사이즈 960px
            settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:3
            }
          },
          {
            breakpoint: 441, //화면 사이즈 960px
            settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:3
            }
          },
        ]
  });

  $('.addIceCream').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    pauseOnHover : false,
    responsive: [ // 반응형 웹 구현 옵션
          {
            breakpoint: 991, //화면 사이즈 960px
            settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:3
            }
          },
          {
            breakpoint: 441, //화면 사이즈 960px
            settings: {
              //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
              slidesToShow:2
            }
          },
        ]
  });


  $('.allMenu').click(function(){
    $('#gnb').toggleClass('open');
  });

  var speed = 500;

  
  	function scrolling(obj){
  		if (!obj){
  			$('html, body').animate({scrollTop:0},speed);
  		}else{
  			var posTop = $(obj).offset().top -80;
  			$('html, body').animate({scrollTop:posTop}, speed )
  		}
  	};


  	$("#gnb li a").click(function(){
  		var direction = $(this).attr("href");
  		scrolling( direction );
  		return false;
  	});



});
