$("document").ready(function(){
    $(".sports").on("click", function(){
        clearInterval(timeout);
        $(".sports").removeClass('active');
        $(this).addClass('active');
        now = $(this).find("img").attr('alt');
        $(".nowname").html(now.toUpperCase());
        $(".nowimg").attr("src",data[now].img);
        cnt = 1;
        $(".slider").css('background-color', '#fff');
        $(`.slider:nth-child(${cnt})`).css('background-color', '#CD4843');
        $(".third").html(data[now].data[cnt - 1].name);
        $(".img1, .rsimg1").attr('src', data[now].data[0].img);
        $(".img2, .rsimg2").attr('src', data[now].data[1].img);
        $(".img3, .rsimg3").attr('src', data[now].data[2].img);
        $(".img4, .rsimg4").attr('src', data[now].data[3].img);
        $(".img5, .rsimg5").attr('src', data[now].data[4].img);
        $(".imgslide").css({marginLeft:'-'+(cnt-1)+'00%'});
        customsettimeout();
    });
    $(".shoes").on("click", function(){
        $(".shoes").removeClass('active');
        $(this).addClass('active');
    });

});
