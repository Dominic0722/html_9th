window.onload = function () {
  let tabContents = [
    `<h3>환경 보호</h3>
        <p>환경 보호는 지구의 자연 자원을 보존하고 생태계를 지키기 위한 노력을 포함합니다. 이는 재활용, 에너지 절약, 지속 가능한 발전 등을 통해 이루어집니다. 개인과 기업이 함께 참여하여 오염을 줄이고 기후 변화를 완화하는 것이 중요합니다. 각국의 정책도 큰 역할을 하며, 국제 협력을 통해 전 세계적으로 환경 문제에 대응해야 합니다.</p>`,
    `<h3>기술 혁신</h3>
        <p>기술 혁신은 새로운 아이디어와 기술을 통해 사회와 경제를 발전시키는 과정입니다.</p>
        <ul class="serviceList">
            <li>basic package</li>
            <li>premium package</li>
            <li>elite package</li>
        </ul>`,
    `건강과 웰빙은 신체적, 정신적, 사회적 안녕을 포함하는 포괄적인 개념입니다. 균형 잡힌 식사, 규칙적인 운동, 스트레스 관리가 중요합니다. 정신 건강 또한 우선시되어야 하며, 사람들 간의 긍정적인 관계가 큰 영향을 미칩니다. 최근에는 mindfulness와 같은 웰빙 방법이 주목받고 있으며, 생활 속에서 쉽게 실천할 수 있는 방법들이 많이 제시되고 있습니다.`,
  ];
  let tabUl = document.querySelector(".tabTitle");
  let tabTitle = tabUl.children;
  let tabContentsDiv = document.querySelector(".tabContents");
  for (let i = 0; i < tabTitle.length; i++) {
    tabTitle[i].addEventListener("click", function () {
      for (j = 0; j < tabTitle.length; j++) {
        tabTitle[j].classList.remove("on");
      }

      tabTitle[i].classList.add("on");
      tabContentsDiv.innerHTML = tabContents[i];
    });
  }
};
