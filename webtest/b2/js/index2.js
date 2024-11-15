$(document).ready(function(){
    
    // y축
    let count=0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },2500)
    




    // //X축
    // let count=0
    // setInterval(function(){
    //     count++
    //     if(count>2){count=0}
    //     $(".train").css("transform",`translateX(${-33.333*count}%)`)
    // },2500)
    


    // //fadein-out
    // let count=0
    // setInterval(function(){
    //     count++
    //     if(count>2){count=0}
    //     $(".train>li").removeClass("on")
    //     $(".train>li").eq(count).addClass("on")
    // },2500)

})