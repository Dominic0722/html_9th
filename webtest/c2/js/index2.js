// $(document).ready(function(){

//     //popup
//     $("#btn_open").click(function(){
//         $(".popup").addClass("on")
//     })
//     $(".btn_close").click(function(){
//         $(".popup").removeClass("on")
//     })

//     //slide
//     let count=0

//     setInterval(function(){
//         count++
//         if(count>2){count=0}
//         $(".train>li").removeClass("on")
//         $(".train>li").eq(count).addClass("on")
//     },2500)
// })
$(document).ready(function(){
    $(".btn_open").click(function(){
        $(".popup").addClass("on")
        $(".modal").addClass("on")
    })
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
        $(".modal").removeClass("on")
    })
    
    // let count=0
    // setInterval(function(){
    //     count++
    //     if(count>2){count=0}
    //     $(".train>li").removeClass("on")
    //     $(".train>li").eq(count).addClass("on")
    // },2500)


    let count=0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)

})