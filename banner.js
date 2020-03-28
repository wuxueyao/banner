var $banner=(function(){
    var html=''
        +'<div>'
            +'<div class="slider" id="slider">'
                +'<div class="slide"><img src="img/b5.png" alt=""></div>'
                +'<div class="slide"><img src="img/b1.png" alt=""></div>'
                +'<div class="slide"><img src="img/b2.png" alt=""></div>'
                +'<div class="slide"><img src="img/b3.png" alt=""></div>'
                +'<div class="slide"><img src="img/b4.png" alt=""></div>'
                +'<div class="slide"><img src="img/b5.png" alt=""></div>'
                +'<div class="slide"><img src="img/b1.png" alt=""></div>'
            +'</div>'
            +'<span id="left"><</span>'
            +'<span id="right">></span>'
            +'<ul class="nav" id="navs">'
                +'<li>1</li>'
                +'<li>2</li>'
                +'<li>3</li>'
                +'<li>4</li>'
                +'<li>5</li>'
            +'</ul>'
        +'</div>',
        $ban=$(html);

    var $slider=$ban.find('#slider'),
        $left=$ban.find('#left'),
        $right=$ban.find('#right'),
        $navs=$ban.find('#navs'),
        $span=$ban.find('span'),
        index = 0;

    $navs.find('li').eq(0).addClass('active');
    function navActive(){
        $navs.children().removeClass('active');
        $(this).addClass('active');
        index = Number($(this).html());
        $slider.animate({left:-index*1200},'slow');
    }
    function spanHover(){
        $span.css('opacity',0.5);
    }
    function spanOut(){
        setTimeout(()=>{
            $span.animate({opacity:0.1},'slow')
        },1000)

    }
    function leftClick(){
        $span.css('opacity',0.5);
        index--;
        $navs.children().removeClass('active');
        if(index <= 0){
            index = 5;
            $slider.animate({left:0},'slow',()=>{
                $slider.css('left',-5*1200);
            });
            
        }
        $slider.animate({left:-index*1200},'slow');
        $navs.children().eq(index-1).addClass('active');
    }
    function rightClick(){
        $span.css('opacity',0.5);
        index++;
        $navs.children().removeClass('active');
        if(index >= 6){
            index = 1;
            $slider.animate({left:-6*1200},'slow',()=>{
                $slider.css('left',-1*1200);
            });
            
        }
        $navs.children().eq(index-1).addClass('active');
        $slider.animate({left:-index*1200},'slow');
    }

    function show(){
        $('#box').append($ban.children());
        $navs.children().bind('click',navActive);
        $span.hover(spanHover);
        $span.mouseout(spanOut);
        $left.click(leftClick);
        $right.click(rightClick);
    }

    return {show:show};
}());
