/* header */
fetch('/webRedesign-WildRift/include/header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.header-include').innerHTML = data;
  })

/* footer */
fetch('/webRedesign-WildRift/include/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;

    /* top-btn */
    const scrollBtn = document.querySelector('.scroll-top-btn');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
    });

    scrollBtn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })

const videoSources = [
  "/videos/darius-skill01.mp4",
  "/videos/darius-skill02.mp4",
  "/videos/darius-skill03.mp4",
  "/videos/darius-skill04.mp4",
  "/videos/darius-skill05.mp4"
  ];

  const descriptions = [
    "<em>과다출혈</em><br>다리우스의 기본 공격과 스킬 공격은 적에게 출혈을 일으켜 5초 동안 물리 피해를 입힙니다.<br>최대 5회까지 중첩됩니다. 최대 중첩 시 다리우스가 분노하며 공격력이 크게 증가합니다.",
    "<em>학살</em><br>다리우스가 도끼를 큰 원의 형태로 휘두릅니다. 도씨날에 맞는 적들은 도끼자루에 맞은 적들보다 더 큼 피해를 입습니다.<br>다리우스는 도끼날에 맞은 적 챔피언과 대형 몬스터의 수에 비례하여 체력이 회복됩니다.",
    "<em>마비의 일격</em><br>다리우스의 다음 공격은 적의 대동맥을 가격합니다.<br>적들이 출혈을 일으키면서 이동 속도가 감소합니다.",
    "<em>포획</em><br>다리우스가 도끼날을 날카롭게 세워, 물리 피해를 가할 때 대상의 방어력 중 일정 비율을 무시합니다.<br>스킬을 사용하면 다리우스가 도끼의 갈고리 부분으로 적들을 휘감아 자기 쪽으로 끌어당깁니다.",
    "<em>녹서스의 단두대</em><br>다리우스가 적 챔피언에게 뛰어올라 치명적 타격을 가해 고정 피해를 입힙니다.<br>대상에 중첩된 과다출혈에 비례하여 피해량이 증가합니다.<br>녹서스의 단두대로 적을 처치하는 경우, 잠시동안 재사용 대기시간이 초기화됩니다."
  ];

  function changeSkill(index) {
    const video = document.getElementById('skillVideo');
    const desc = document.getElementById('skillDesc');

    video.src = videoSources[index];
    video.play();
    desc.innerHTML = descriptions[index];
  }
