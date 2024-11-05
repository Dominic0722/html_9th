window.onload=function(){
    let btn_popup=document.querySelector("#btn_popup")
        let popup=document.querySelector(".popup")
        let modal=document.querySelector(".modal")
        btn_popup.addEventListener("click",function(){
            popup.classList.add("on")
            modal.classList.add("on")
        })
        let btn_close=document.querySelector(".btn_close")
        btn_close.addEventListener("click",function(){
            popup.classList.remove("on")
            modal.classList.remove("on")
        })
        modal.addEventListener("click",function(){
            popup.classList.remove("on")
            modal.classList.remove("on")
        })
}