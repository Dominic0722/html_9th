window.addEventListener("load",function(){
    let btn_open=this.document.querySelector(".btn_open")
    let popup=this.document.querySelector(".popup")
    let btn_close=this.document.querySelector(".btn_close")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.add("on")
    })
    let tabs=this.document.querySelectorAll(".tabs>a")
    let tab_contents=this.document.querySelectorAll(".tab_contents>ul")
    tabs.forEach(function(tab,index){
        tab.addEventListener("click",function(){
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tab.classList.add("on")
        })
    })

})