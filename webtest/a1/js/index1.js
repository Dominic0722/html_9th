window.addEventListener("load",function(){
    //팝업기능
    let btn_open=this.document.querySelector("#btn_open")
    let popup=this.document.querySelector(".popup")
    let btn_close=this.document.querySelector(".btn_close")

    //버튼 눌렀을때 팝업이 나타나는 코드
    btn_open.addEventListener("click",function(){
    
        popup.classList.add("on")
    })

    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    //탭메뉴 기능
    let tab_title=document.querySelectorAll(".tabs>a")
    //a태그들을 선택함
    let tab_lists=document.querySelectorAll(".tab_contents>ul")
    //탭내용 ul태그들을 선택함
    tab_title.forEach(function(tab,index){
        //tab> 각각의 a태그들을 가리킴
        //index> 그 a 태그들의 순번 0,1을 의미
        tab.addEventListener("click",function(){
            //탭제목 활성화 기능
            tab_title[0].classList.remove("on")
            tab_title[1].classList.remove("on")
            tab.classList.add("on")
            //탭내용 보이기 기능
            tab_lists[0].classList.remove("on")
            tab_lists[1].classList.remove("on")
            tab_lists[index].classList.add("on")
        })
    })
   
    //슬라이드
    let count=0
    let train= document.querySelector(".train")
    setInterval(function(){
        //2.5초마다 실행되는 소스코드
        count++
        if(count>2){count=0}
        train.style.transform=`translateY(${-33.333*count}%)`

    },2500)

})