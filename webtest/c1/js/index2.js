$(document).ready(function(){
    $(".btn_open").click(function(){
        $(".popup").addClass("on")
    })
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    // let count=0

    // setInterval(function(){
    //     count++
    //     if(count>2){count=0}
    //     $(".train>li").removeClass("on")
    //     $(".train>li").eq(count).addClass("on")
    // },2500)

   
    // $(".tabmenu>dt").click(function(){
    //     $(".tabmenu>dt").removeClass("on")
    //     $(this).addClass("on")
    // })



    $("dt").click(function(){
        $("dt").removeClass("on")
        $(this).addClass("on")
    })
    let count=0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)
})