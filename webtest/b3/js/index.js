window.addEventListener("load",function(){
    let count=0
    let train=this.document.querySelector(".train")
    this.setInterval(function(){
        count++
        if(count>2){count=0}
        train.style.transform=`translateY(${-33.333*count}%)`

    },2500)
})