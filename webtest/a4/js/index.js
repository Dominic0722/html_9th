window.addEventListener("load",function(){
    let btn_open=this.document.querySelector(".btn_open")
    let popup=this.document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
        this.addClass("on")
    })
})