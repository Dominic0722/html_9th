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
// $(document).ready(function(){
//     $(".btn_open").click(function(){
//         $(".popup").addClass("on")
//     })
//     $(".btn_close").click(function(){
//         $(".popup").removeClass("on")
//     })
//     let count=0
//     setInterval(function(){
//         count++
//         if(count>2){count=0}
//         $(".train").css("transform",`translate(${-33.333*count}%)`)
//     },2500)
// })
$(document).ready(function(){
    $(".btn_open").click(function(){
        $(".popup").addClass("on")
        
    })
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
        
    })
    // $(".tabs>a").click(function(){
    //     $(".tabs>a").removeClass("on") //모든탭이 비활성화 스타일
    //     $(this).addClass("on")  //내가 클릭한 탭만 on클래스가 붙어서 활성화 스타일
    //     let idx=$(this).index() //내가 클릭한 탭의 부모태그 기준 순번을 저장
    //     $(".tab_contents>ul").removeClass("on") //ul태그가 전부 안보이게 됨
    //     $(".tab_contents>ul").eq(idx).addClass("on") //내가 클릭한 탭의 순번과 일치하는 ul태그가 on클래스가 붙어서 보이게 됨
    // })

    $(".tabs>a").click(function(){
        $(".tabs>a").removeClass("on")
        $(this).addClass("on")
        let idx=$(this).index()
        $(".tab_contents>ul").removeClass("on")
        $(".tab_contents>ul").eq(idx).addClass("on")
    })
    
})