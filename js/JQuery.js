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

    $('.aside_drawer1').on("click",function(){
        $('.aside_list1').slideToggle(100);
    });

    $('.aside_list1 .inner_list1').on("click",function(){
        location.href='phone_search.php';
    });

    $('.aside_list1 .inner_list2').on("click",function(){
        location.href='index.html?value='+encodeURIComponent('0');
    });

    $('.aside_list2 .inner_list1').on("click",function(){
        location.href='phone_plan.html';
    });

    $('.aside_list2 .inner_list2').on("click",function(){
        location.href='phone_plan.html?value='+encodeURIComponent('0');
    });

    $('.aside_drawer2').on("click",function(){
        $('.aside_list2').slideToggle(100);
    });

    $('.campaign').on("click",function(){
        location.href='phone_campaign.html';
    });

    $('.check').on("click",function(){
        location.href='operation_check.html';
    });



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

    $(document).on('click', '.phone_card', function() {
        var value= $(this).attr('value');
        var speck_text=$(this).children('p').text();
        location.href='phone_search.php?maker='+encodeURIComponent('')+
        "&speck="+encodeURIComponent(value)+"&speck_text="+encodeURIComponent(speck_text+'(昇順)');
    });

     $(document).on('click', '#phone_card', function() {
        var value= $(this).attr('value');
        var speck_text=$(this).children('p').text();
        location.href='phone_search.php?maker='+encodeURIComponent('')+
        "&speck="+encodeURIComponent(value)+"&speck_text="+encodeURIComponent(speck_text);
    });
});