'use strict';
console.log('\'Allo \'Allo!');
$(document).ready(function() {

    $('.myMenu ul li ').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),
        // $(".header-top-banner").delay(1000).fadeToggle(500);
        $('.header-top-banner').delay(1000).addClass('animated fadeIn').css('visibility', 'visible');

    $('.counter').countTo();
//    var $counter =$('.counter');
//     $('#client-gets').appear();
// // Когда класс class появляется в области видимости экрана срабатывает нужный нам код.
// $('#client-gets .counter').on('appear', function(event, $counter) {
//       // тут выполнится код когда появится элемент в область видимости
//       addClass('counted')
//       $('.counted').countTo();
// 	});
   

});



AOS.init();
