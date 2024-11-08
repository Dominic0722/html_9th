window.addEventListener("load",function(){
    let btn_open=this.document.querySelector(".btn_open")
    let popup=this.document.querySelector(".popup")
    let btn_close=this.document.querySelector(".btn_close")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
        
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
        popup.classList.add("on")
    })
   
  

    // let tab_title=document.querySelectorAll(".tabs>a")
    // //a태그들을 선택함
    // let tab_lists=document.querySelectorAll(".tab_contents>ul")
    // //탭내용 ul태그들을 선택함
    // tab_title.forEach(function(tab,index){
    //     //tab> 각각의 a태그들을 가리킴
    //     //index> 그 a 태그들의 순번 0,1을 의미
    //     tab.addEventListener("click",function(){
    //         //탭제목 활성화 기능
    //         tab_title[0].classList.remove("on")
    //         tab_title[1].classList.remove("on")
    //         tab.classList.add("on")
    //         //탭내용 보이기 기능
    //         tab_lists[0].classList.remove("on")
    //         tab_lists[1].classList.remove("on")
    //         tab_lists[index].classList.add("on")
    //     })
    // })
    let tabs=this.document.querySelectorAll(".tabs>a")
    let tab_contents=this.document.querySelectorAll(".tab_contents>ul")
    tabs.forEach(function(tab,index){
        tab.addEventListener("click",function(){
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tab.classList.add("on")
            tab_contents[0].classList.remove("on")
            tab_contents[1].classList.remove("on")
            tab_contents[index].classList.add("on")
        })


    })
})