window.onload = function(){
    document.querySelector(".btnMobGnb").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mob").classList.add("on")
        return false
    })
    document.querySelector(".btnClose").addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector("nav.mob").classList.remove("on")
    })
    let moGnba = document.querySelectorAll(".mobGnb a")
    for(let i=0 ; i<moGnba.length ; i++){
        moGnba[i].addEventListener("click",function(){
            document.querySelector("nav.mob").classList.remove("on")
        })
    }


    let flag = false
window.addEventListener("scroll",function(){
    flag=setAnimationToTag(flag)
})

//배너슬라이드기능
    let btn_page = document.querySelectorAll(".pagenation>span")
    let banner_train=document.querySelector(".train")

    function moveTrain(count){
        banner_train.style.transform=`translateX(${-25*count}%)`
    }

    function pagenation(count){
        btn_page.forEach(function(btn){
            btn.classList.remove("on")

        })
        btn_page[count].classList.add("on")
    }

    btn_page.forEach(function(btnpage,index){
        btnpage.addEventListener("click",function(){

            moveTrain(index)
            pagenation(index)
            

        })
    })


}