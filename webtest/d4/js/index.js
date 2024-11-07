// window.addEventListener("load",function(){
//     let btn_open=this.document.querySelector("#btn_open")
//     let popup=this.document.querySelector(".popup")
//     let btn_close=this.document.querySelector(".btn_close")

//     btn_open.addEventListener("click",function(){
//         popup.classList.add("on")
//     })
//     btn_close.addEventListener("click",function(){
//         popup.classList.remove("on")
//     })
    
//     let count=0
//     let slide=this.document.querySelectorAll(".train>li")

//     this.setInterval(function(){
//         count++
//         if(count>2){count=0}
//         // slide[0].classList.remove("on")
//         // slide[1].classList.remove("on")
//         // slide[2].classList.remove("on")
//         slide.forEach(function(slide){
//             slide.classList.remove("on")
//         })
//         slide[count].classList.add("on")
//     },2500)


// })
// window.addEventListener("load",function(){
//     let btn_open=this.document.querySelector(".btn_open")
//     let train=this.document.querySelector(".train")
//     let popup=this.document.querySelector(".popup")
//     let btn_close=this.document.querySelector(".btn_close")
//     let modal=this.document.querySelector(".modal")
//     let count=0
//     this.setInterval(function(){
//         count++
//         if(count>2){count=0}
//         train.style.transform=`translateX(${-33.333*count}%)`
//     },2500)
//     btn_open.addEventListener("click",function(){
//         popup.classList.add("on")
//         modal.classList.add("on")

//     })
//     btn_close.addEventListener("click",function(){
//         popup.classList.remove("on")
//         modal.classList.remove("on")
//     })
// })
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