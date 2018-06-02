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
        $(".img1, .rsimg1").attr('src', data[now].data[0].img).attr("alt", data[now].data[0].name);
        $(".img2, .rsimg2").attr('src', data[now].data[1].img).attr("alt", data[now].data[1].name);
        $(".img3, .rsimg3").attr('src', data[now].data[2].img).attr("alt", data[now].data[2].name);
        $(".img4, .rsimg4").attr('src', data[now].data[3].img).attr("alt", data[now].data[3].name);
        $(".img5, .rsimg5").attr('src', data[now].data[4].img).attr("alt", data[now].data[4].name);
        $(".imgslide").css({marginLeft:'-'+(cnt-1)+'00%'});
        customsettimeout();
    });
    $(".shoes").on("click", function(){
        $(".shoes").removeClass('active');
        $(this).addClass('active');
        var name = $(this).find("img").attr("alt");
        getData(name);
    });

});

function getData(query){
    $.ajax({
        url:'/blog.php',
        type:'get',
        data:{'query' : query},
        success: function(data){
            console.log(data);
        }
    });
}
