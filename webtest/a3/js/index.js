window.addEventListener("load",function(){
    //팝업
    let btn_open=this.document.querySelector(".btn_open")
    let popup=this.document.querySelector(".popup")
    let btn_close=this.document.querySelector(".btn_close")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })


    //탭메뉴
    let tab_titles=this.document.querySelectorAll(".tabs>a")
    let tab_contents=this.document.querySelectorAll(".tab_contents>ul")
    tab_titles.forEach(function(tab,index){
        tab.addEventListener("click",function(){
            tab_titles[0].classList.remove("on")
            tab_titles[1].classList.remove("on")
            tab.classList.add("on")
            //탭내용 변경 기능
            tab_contents[0].classList.remove("on") //notice ul
            tab_contents[1].classList.remove("on") //gallery ul
            tab_contents[index].classList.add("on") //클릭한 a태그의 순번에 맞는 ul
        })
    })
        슬라이드
        let count=0
        let slides=document.querySelectorAll(".train>li")
        setInterval(function(){
            count++
            if(count>2){count=0}
            //리스트 3개를 선택해서 on이라는 클래스를 싹다 지운 후
            //카운트번째의 리스트만 on클래스가 들어가는 기능
            slides[0].classList.remove("on")
            slides[1].classList.remove("on")
            slides[2].classList.remove("on")
            slides[count].classList.add("on")
        },2500)
        
    
})