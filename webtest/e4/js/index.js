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
    let count=0
    let train=document.querySelector(".train")

    this.setInterval(function(){
                count++
              if (count>2){count=0}
               train.style.transform=`translateX(${-33.333*count}%)`
             },2500)


    
})
