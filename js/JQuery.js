$(function(){

    $('.menu_btn').on("click",function(){
        $('.aside2').animate({'width':'toggle'},90);
    });

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

    for(let index = 0; index < 3; index++) {
        const question_li=`question${index} li`;

        $('.'+question_li).on("click",function(){
            $('.'+question_li).css({'background-color':'white','color':'black'});
            $(this).css({'background-color':'goldenrod','color':'white'});
        });
    }

    $('.result_btn').on("click",function(){
        $('.plan_question li').css({'background-color':'white','color':'black'});
    });

    $('.phone_card').on("click",function(){
        location.href="phone_search.html";
    });





  
});