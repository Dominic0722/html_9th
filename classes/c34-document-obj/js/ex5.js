window.onload = function () {
    //브라우저가 끝까지 도큐먼트를 해석한후 실행하는 소스코드



    let btn_next = document.querySelector(".btn_next")
    let btn_prev = document.querySelector(".btn_prev")
    let trainUl = document.querySelector(".train")
    let pagenationDiv = document.querySelector(".pagenation")
    let pageSpan = pagenationDiv.children
    let count = 0
    //다음버튼 클릭 했을 때 count값이 1씩 증가하면서 그에 맞게 train클래스가 이동되는 소스코드
    //count값이 만약 2보다 커지게 된다면 강제로 2를 대입하여 train이 이탈하지 않도록 한다
    btn_next.addEventListener("click", function () {
        //기차가 돌아가는 소스
        count++
        if (count > 2) { count = 2 }
        trainUl.style.transform = `translateX(${-33.333 * count}%)`
        //페이지네이션 소스
        for (let i = 0; i < pageSpan.length; i++) {
            pageSpan[i].classList.remove("on")
        }

        pageSpan[count].classList.add("on")
    })
    //이전버튼 클릭 했을 때 count값을 1씩 감소시키고 만약에 count값이 0보다 작아지면 0이 강제로 대입되게하여 train이 이탈하지 않도록 한다
    btn_prev.addEventListener("click", function () {
        count--
        if (count < 0) { count = 0 }
        trainUl.style.transform = `translateX(${-33.333 * count}%)`
        //페이지네이션 소스
        for (let i = 0; i < pageSpan.length; i++) {
            pageSpan[i].classList.remove("on")
        }
        pageSpan[count].classList.add("on")
    })
    //페이지네이션 span태그를 클릭했을 때
    for (let k = 0; k < pageSpan.length; k++) {
        pageSpan[k].addEventListener("click", function () {
            trainUl.style.transform = `translateX(${-33.333 * k}%)`
            for (let i = 0; i < pageSpan.length; i++) {
                pageSpan[i].classList.remove("on")
            }
            pageSpan[k].classList.add("on")
            count = k
        })

    }

    // pageSpan[0].addEventListener("click",function(){
    //     trainUl.style.transform= `translateX(${-33.333*0}%)`
    //     for(let i=0;i<pageSpan.length;i++){
    //         pageSpan[i].classList.remove("on")
    //     }
    //     pageSpan[0].classList.add("on")
    //     count=0
    // })
    // pageSpan[1].addEventListener("click",function(){
    //     trainUl.style.transform= `translateX(${-33.333*1}%)`
    //     for(let i=0;i<pageSpan.length;i++){
    //         pageSpan[i].classList.remove("on")
    //     }
    //     pageSpan[1].classList.add("on")
    //     count=1
    // })
    // pageSpan[2].addEventListener("click",function(){
    //     trainUl.style.transform= `translateX(${-33.333*2}%)`
    //     for(let i=0;i<pageSpan.length;i++){
    //         pageSpan[i].classList.remove("on")
    //     }
    //     pageSpan[2].classList.add("on")
    //     count=2
    // })

}