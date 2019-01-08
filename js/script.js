$(function(){
    let scrollPoint=document.querySelector(".bottom-pictures").offsetTop;
    let $scrollUp=$(".scroll-up");
    let $scrollDown=$(".scroll-down");

    $("#back-arrow").click(e=>{
        $(".hidden-options").fadeOut(500)
    })

    $(".bars").click(e=>{
        $(".hidden-options").fadeIn(1000)
    })
    $(".hidden-options").hide();
    $scrollUp.hide();
    $(window).on("scroll",e=>{
        if($(this).scrollTop()>250){
            $scrollDown.fadeOut();
        }

        else if($(this).scrollTop()<250){
            $scrollDown.fadeIn();
        }
        if($(this).scrollTop()>500){
            $scrollUp.fadeIn();
        }
        else if($(this).scrollTop()<1000){
            $scrollUp.fadeOut();
        }

    })


    $scrollUp.on("click",(e=>{
        $("html").animate({scrollTop:0},1000)
    }))
    $scrollDown.on("click",(e=>{
        $("html").animate({scrollTop:scrollPoint},500)
    }))

    async function hoveraround1($element){
        await $element.animate({left:`+${Math.random()*40}`,top:`+${Math.random()*40}`});
        await $element.animate({top:`-${Math.random()*50}`,top:`+${Math.random()*40}`});
        await $element.animate({left:`-${Math.random()*40}`,top:`-${Math.random()*40}`});
        await $element.animate({left:`-${Math.random()*40}`,left:`+${Math.random()*40}`});
    }
    async function hoveraround2($element){
        await $element.animate({top:`-${Math.random()*50}`,top:`+${Math.random()*40}`,left:`+${Math.random()*40}`});
        await $element.animate({left:`+${Math.random()*40}`,top:`+${Math.random()*40}`});
        await $element.animate({left:`-${Math.random()*40}`,left:`+${Math.random()*40}`});
        await $element.animate({left:`-${Math.random()*40}`,top:`-${Math.random()*40}`});
    }
    $(window).on("mousemove",e=>{
        hoveraround1($(".option:first-child"))
        hoveraround2($(".option:nth-child(2)"))
    })

})