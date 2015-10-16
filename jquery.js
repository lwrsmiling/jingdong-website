$(function(){
	$(".categorylist").children(".item").hover(function() { //一级导航悬浮 
		$(this).addClass("hover").siblings(".item").removeClass("hover");
		var index = $(this).index(); 
		$(".dropdown-layer").show();
		$(".dropdown-layer").children(".sub-cate-main").hide(); 
		$(".dropdown-layer").children(".sub-cate-main").eq(index).show(); 
		});

     $(".categorylist").hover(function() { //整个导航菜单悬浮，是否显示二级导航到出厂 
        $("#index_menus_sub").hide(); 
        }); 

    $("#index_menus_sub").children(".sub-cate-main").hover(function() { //二级导航悬浮 
	    var index = $(this).index(); 
	    $(".categorylist").children(".item").eq(index).addClass("hover"); 
	    $("#index_menus_sub").show();  
	},
	    function() { 
	        $("#index_menus_sub").hide(); 
	        $(".categorylist").children(".item").removeClass("hover"); 
	});
}); 

$(function(){
	$(".switch").hover(function(){
        $(".buttonlr").show();
    },function(){
        $(".buttonlr").hide();
    }); //鼠标划过大图，左右按钮进行显示

    $(".buttonbottom li").mouseover(function(){
    	var a=$(this).index();    
        $(this).addClass("hov").siblings().removeClass("hov");   
        $(".pic").animate({marginLeft:-640*a},"slow");
    }); //鼠标划过底部小按钮，图片进行自动切换

    var b =0;
    $(".bright").click(function(){
    	b++;
	    b=b%6;
	    $(".pic").animate({marginLeft:-640*b},"slow");
	    $(".buttonbottom li").eq(b).addClass("hov").siblings().removeClass("hov");
    });
    $(".bleft").click(function(){
	    b--;
	    b=(b+6)%6;
	    $(".pic").animate({marginLeft:-730*b},"slow");
	    $(".buttonbottom li").eq(b).addClass("hov").siblings().removeClass("hov");
	});

});   

$(function(){
	$(".brand ul li").hover(function(){
		$(this).children().children(".back").show();
	    $(this).children().children(".front").hide();
	},
	function(){
		$(this).children().children(".back").hide();
	    $(this).children().children(".front").show();
	});
});

$(function(){
	$(document).click(function(e){
		var container= $(".input-text");
		if (!container.is(e.target)){
			container.removeClass("active");
		}
		else{
			container.addClass("active");
		}

	});

});

$(window).scroll(function() {
	var scrollTop= $(window).scrollTop();
	if (scrollTop > $(".nav").offset().top){
		$(".header-c").addClass("header-fix");
	}
	else{
		$(".header-c").removeClass("header-fix");
	}
});