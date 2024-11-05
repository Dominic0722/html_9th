window.addEventListener("load",function(){
  //window.onload와 같이 문서를 끝까지 읽고난 뒤 한번 실행되는 소스코드들 여러개 연결했을때 작동함
  window.addEventListener("scroll", () => {
    flag=setAnimationToTag()
    
  });
})


