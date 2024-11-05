function getTagTop(tag){
    // 이 함수는 선택한 태그가 문서기준 위에서 얼만큼 떨어져 있는지를 계산하여 픽셀값으로 리턴하는 함수이다.
    return tag.getBoundingClientRect().top + window.scrollY
}
//getBoundingClientRect()함수는 선택한 태그의 뷰포트(화면) 기준 화면의 상단에서 선택한 태그의 상단까지의 거리를 return한다.