//navbar下滑到白色背景時換色
$(window).on('scroll', function(){
    var mobile = window.matchMedia("(max-width: 480px)");
    myFunction(mobile);
    mobile.addListenter(myFunction);
    
    function myFunction(mobile){
        if(mobile.matches){
            $('body').removeClass('dark-theme')
        }else{
            var trigger = $('.medicine').offset().top - $('nav').height() - 20;
            if($(this).scrollTop() > trigger){
                $('body').addClass('dark-theme');
            }else{
                $('body').removeClass('dark-theme');
            }
        }
    }
})

//fullpage
$('#fullpage').fullpage({
    scrollingSpeed: 1000, 
    scrollBar: true,
    responsiveWidth: 1199,
    responsiveHeight: 620,
    lazyLoading: false,
})

//swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100, 
    loop: true,
    allowTouchMove: false, 
    unpdateOnWindowResize: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function(){
    //大標
    $('.medicine-txt-tabs li').click(function(e){
        e.preventDefault();
        
        let item = $(this).data('item');
        $(`.item--${item}`).addClass('item--active').siblings().removeClass('item--active');
        $(`.show--${item}`).fadeIn(50).addClass('show--active').siblings().fadeOut(100).removeClass('show--active')
    });

    //小標
    $(".appear").css("display", "block");
    $('.collapse .subtitle').click(function(e){
        e.preventDefault();
        
        if($(this).hasClass("active")){
            $(this).removeClass;
            $(this).siblings(".accordion").slideUp(200);
        }else{
            $(".collapse .subtitle").removeClass("active");
            $(this).addClass("active");
            $(".accordion").slideUp(200);
            $(this).siblings(".accordion").slideDown(200);
        }
    });

    //case simplelightbox
    $('.gallery').find('a').simpleLightbox({});
    
    
})
