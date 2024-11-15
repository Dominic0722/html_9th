window.addEventListener("load",function(){
    let btn_gnb=document.querySelector("#btn_gnb")
    let hidden_gnb=document.querySelector(".hidden_gnb")
    let btn_close_gnb=document.querySelector("#btn_close_gnb")

    btn_gnb.addEventListener("click",function(){
        hidden_gnb.classList.add("on")
    })
    btn_close_gnb.addEventListener("click",function(){
        hidden_gnb.classList.remove("on")
    })

})