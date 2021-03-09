$(function(){

    $('.menu_btn').on("click",function(){
        $('.aside2').animate({'width':'toggle'},90);
    });

    $('.phone_card').hover(
        function(){
            $(this).children('p').css('font-size','larger');

        },function(){
            $(this).children('p').css('font-size','');
        }
    );

    $('.aside-wrapper a').hover(
        function(){
            $(this).css('color','goldenrod');

        },function(){
            $(this).css('color','');
        }
    );

    for(let index = 0; index < 6; index++) {
        const drawer=`drawer${index}`;
        const list=`list${index}`;

        $('.'+drawer).on("click",function(){
            $('.'+list).slideToggle(100);
        });
    }

  
});