//this 여기서 this 하면 window를 가리킴
$(document).ready(function(){

    $(".naverlink").css("text-decoration","none")
    let href=$(".naverlink").attr("href")    
    console.log(href)
    $(".naverlink").attr("href","https://www.daum.net") //속성값을 바꿀수 있다.
    $(".naverlink").attr("target","_blank")// 없던속성 만들어 적용
    let txt=$(".a").html()
    console.log(txt)// html()함수는 선택한 태그의 내용을 함수가 사용되었던 자리에 문자데이터 형태로 남긴다.
    $(".a").html("<b>새롭게 바뀐 내용</b>")// html()함수는 입력하는 문자데이터에 태그형태가 있다면 태그로 생성하여 입력한다.
    $(".box").addClass("on") //on이라는 클래스를 추가한다.
    $(".box").addClass("active")
    $(".box").removeClass("active") 

    $(".lists").children().css("border","1px solid blue")
    //선택한 태그의 자식태그들을 선택할 수 있다.
    $(".lists>li").css("background","pink")
    //children()함수를 쓰지 않고도 선택자를 입력해서도 선택할 수 있다.
    $(".b").prev().css("color","red")
    //선택한 태그의 이전 형제 태그
    $(".b").next().css("color","blue")
    //선택한 태그의 다음 형제 태그
    $(".b").parent().css("border","5px solid #000")
    // 선택한 태그의 부모태그

    $(".btn").click(function(){
        //클릭했을 때 실행되는 소스코드
        $(".frame").css("color","green")
        
    })
    $(".frame").mouseover(function(){
        // $(".frame").css("border","2px solid #000")
        $(this).css("border","2px solid #000")
        //여기서 this는 이전에 선택한 .frame클래스를 의미한다.
    })
    $(".frame").mouseout(function(){
        $(this).css("border","none")
    })
    //index()함수 eq()함수
    $(".tab_lists>li").css("color","orange")
    $(".tab_lists>li").eq(1).css("font-weight","bold")
    $(".tab_lists>li").click(function(){
        let index=$(this).index()
        // 클릭한 li태그들(this)의 부모기준 자식순번을 리턴함
        alert(index)
    })


})