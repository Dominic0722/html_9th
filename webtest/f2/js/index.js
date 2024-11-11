// window.addEventListener("load",function(){

//     let btn_open=this.document.querySelector(".btn_open")
//     let popup=this.document.querySelector(".popup")
//     let btn_close=this.document.querySelector(".btn_close")
//     let train=this.document.querySelector(".train")
//     btn_open.addEventListener("click",function(){
//         popup.classList.add("on")
//     })
//     btn_close.addEventListener("click",function(){
//         popup.classList.remove("on")
//     })

//     let count=0
    
//     this.setInterval(function(){
//         count++
//         if (count>2){count=0}
//         train.style.transform=`translateY(${-33.333*count}%)`
//     },2500)
    
// })

window.addEventListener("load",function(){
    let popup=this.document.querySelector(".popup")
    let btn_open=this.document.querySelector(".btn_open")
    let btn_close=this.document.querySelector(".btn_close")
    let modal=this.document.querySelector(".modal")
    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
        modal.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
        modal.classList.remove("on")
    })


    let count=0
    let slide=this.document.querySelectorAll(".train>li")

    this.setInterval(function(){
        count++
        if(count>2){count=0}
        slide[0].classList.remove("on")
        slide[1].classList.remove("on")
        slide[2].classList.remove("on")
        slide[count].classList.add("on")
    },2500)

   

})