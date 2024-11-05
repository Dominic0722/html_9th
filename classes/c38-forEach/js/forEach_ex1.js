window.addEventListener("load",function(){
    let tagArray=document.querySelectorAll("h1")
    window.addEventListener("scroll",()=>{
        let viewHeight=window.innerHeight//뷰포트의 높이
        tagArray.forEach(function(tag){
            let distance=tag.getBoundingClientRect().top // 각각 태그의 뷰포트 상단에서부터의 거리
            if(distance<viewHeight*0.8){
                tag.classList.add("on")
                
            }else{
                tag.classList.remove("on")
            }
        })
    })

})


window.onload=function(){
    









}