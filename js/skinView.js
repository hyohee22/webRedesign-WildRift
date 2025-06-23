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

champions = [
  Riven = {
    name: "리븐",
    skinImg: [
      "../images/skinShop/Riven-normal.jpg",
      "../images/skinShop/Riven-bringer-of-light.png",
      "../images/skinShop/Riven-pulse-gun.png",
      "../images/skinShop/Riven-crystal-rose.png",
      "../images/skinShop/Riven-spirit-flower.png",
    ],
    skinName: [
      "추방자",
      "빛의 인도자 리븐",
      "펄스 건 리븐",
      "수정 장미 리븐",
      "영혼의 꽃 리븐"
    ],
    desc: [
      "",
      "휘몰아치는 창조의 여명에서 탄생한 리븐은 우주의 질서를 대표하는 산 증인입니다. 평생 어둠의 인도자와 대립할 수 밖에 없는 운명을 타고났기에 자신의 빛이 그의 어둠을 완전히 몰아내는 날만을 고대하고 있습니다.",
      "시간의 순수함을 숭배하는 리븐은 시간을 자신한테 유리하게 조작하고자 하는 이가 많다는 것을 알고 있습니다. 이런 이단자들은 그녀의 검에 목적을 부여하죠.<br>리븐은 자연의 질서를 어지럽히려는 모든 자를 없애는데서 유일하게 진정한 위안을 얻습니다.",
      "리븐은 수정 장미 무도회 초대장을 받는 것을 언제나 꿈꿔왔습니다. 이제 드디어 참가할 수 있게 되었으니 댄스 파트너 사이에 도는 소문을 정리할 시간이 좀 필요하겠군요",
      "고대 영토의 용감한 전사인 리븐은 수천 년 전의 전투에서 비참하게 쓰러졌고 그녀의 검은 산산이 조각났습니다.<br>안식을 찾을 수 없었던 리븐은 자신을 망각으로 이끄는 끔찍한 어둠에 홀린 채로 부러진 검날을 찾기 위해 다른 세계의 전장을 샅샅이 뒤집니다."
    ],
    price: [
      "기본 스킨",
      1325,
      990,
      "기간 한정 이벤트",
      990
    ],
    line: "top",
  },
  Lux = {
    name: "럭스",
    skinImg: [
      "../images/skinShop/Lux-normal.webp",
      "../images/skinShop/Lux-crystal-rose.jpg",
      "../images/skinShop/Lux-combat-academy.webp",
      "../images/skinShop/Lux-universe.webp",
      "../images/skinShop/Lux-in-love.webp",
    ],
    skinName: [
      "광명의 소녀",
      "수정 장미 럭스",
      "전투 사관 학교 럭스",
      "우주 럭스",
      "사랑에 빠진 럭스"
    ],
    desc: [
      "",
      "막대한 힘을 가진 크라운가드 가문의 귀공녀 럭스에게 이 축제는 가문과 의무. 무엇보다 정치적인 속셈이 그득한 구혼자들에게서 도피할 수 있는 기회입니다. 그녀는 이 행사를 온전히 경험하고, 마법같은 하룻밤만이라는 웅장한 사랑 이야기의 주인공이 되어보길 소망합니다.",
      "듀란달 신성무기 전투사관학교 새내기인 럭스는 어떠한 상황에서도 등정적인 태도를 유지합니다. 마법 동아리의 신입 회원이지만 전투사관학교의 교수들조차도 설명할 수 없을 정도로 어마어마한 마법의 힘을 휘두르죠",
      "여왕 애쉬의 심복인 럭스는 천상의 성좌를 엮어 엔트로피를 향해 나아가는 우주의 질서를 바로잡습니다.<br>암흑의 별이 우주 의회의 구성원들을 타락시키기 시작했을 때, 럭스가 나서 쓰레쉬에게 맞섰습니다. 하지만, 그녀에게는 무시무시한 비밀이 있습니다. 가슴 속에 오랫동안 품어 왔던 한 조각의 어둠이 유혹의 말을 속삭이고 말죠...",
      "친애하는 럭스, 객차에 당신이 발을 들였을 때 햇살이 당신의 우아한 모습을 비춘 그 순간부터 제 눈에는 한 사람밖에 보이지 않게 되었어요.<br>마치 당신 주변의 빛이 절 끌어당겨서 내 심장이 얼마나 세게 두근거릴 수 있는지 알려주는 것 같아요! 제 기분을 이해해 주시면 좋겠네요... 그리고 당신도 저와 같은 마음인지 알고 싶어요. :)<br> - 귀염둥이가 보낸 읽지 않은 메세지"
    ],
    price: [
      "기본 스킨",
      "기간 한정 이벤트",
      990,
      1325,
      "기간 한정 판매"
    ],
    line: "support",
  },
  Sett = {
    name: "세트",
    skinImg: [
      "../images/skinShop/Set-normal.webp",
      "../images/skinShop/Set-fireworks.png",
      "../images/skinShop/Set-supreme-cell.png",
      "../images/skinShop/Set-obsidian-dragon.png",
      "../images/skinShop/Set-spirit-flower.png",
    ],
    skinName: [
      "우두머리",
      "불꽃놀이 세트",
      "슈프림 셀 세트",
      "흑요석용 세트",
      "영혼의 꽃 세트"
    ],
    desc: [
      "",
      "난투로 가장 잘 알려진 세트가 사자춤 전문가라는 사실을 아는 이들은 많지 않습니다. 사자춤은 놀라울 정도로 난투와 비슷한 기술이 필요합니다. 화려한 발놀림, 사나움, 관중을 놀라게 하는 기술이 전부죠. 세트보다 이를 더 잘 아는 사람이 누가 있을까요?",
      "세트는 아버지를 한번도 본 적이 없지만 아버지의 그늘 아래 자랐습니다. 세트의 아버지는 사이온 셀의 후계자라는 사실을 숨겼지만, 세트는 그런 사치를 누린 적이 없습니다. 다이나모 셀을 배신한 아버지로 인해 세트는 우두머리가 자신을 받아들일 때까지 무시당했기 때문이죠. 라이지 토너먼트는 세트의 충성심을 증명할 기회입니다.",
      "어릴 적 따돌림을 받던 세트는 힘을 얻어 자신을 억누르려는 자는 누구든 파괴하곘다고 맹세했습니다. 투지와 살기를 느낀 흑요석용은 세트에게 흑요석처럼 단단한 피부를 주었습니다. 이제는 세트는 이 초월적인 힘을 활용해 싸움꾼으로서 명성을 얻었습니다. 적들은 세트의 수정 같은 피부를 뚫을 수 없다는 사실에 벌벌 떨곤 합니다.",
      "어떤 이는 죽은 자를 길로 인도하고 어떤 이는 죽은 자를 길 밖으로 이끕니다. 한편 둘 중 어느 쪽도 아닌 이도 있습니다. 그 영혼이 자기 자신과 갈들을 겪고 있기 때문이죠. 킨메이와 아카나에게서 태어난 세트는 평화롭게 살던 중 아버지에게 버림을 받고 복수를 계획했습니다. 이제 죽임을 당한 전사들에게 도전해 그들의 실력을 시험하며 시간으 ㄹ보내는 세트는 구원의 속삭임만을 붙잡을 뿐입니다.",
    ],
    price: [
      "기본 스킨",
      "기간 한정 판매",
      "기간 한정 이벤트",
      990,
      1325
    ],
    line: "top",
  },
  Ash = {
    name: "애쉬",
    skinImg: [
      "../images/skinShop/Ash-normal.webp",
      "../images/skinShop/Ash-project.png",
      "../images/skinShop/Ash-high-eye.jpg",
      "../images/skinShop/Ash-spirit-dragon.jpg",
      "../images/skinShop/Ash-crystal-rose.jpg",
    ],
    skinName: [
      "서리 궁수",
      "프로젝트 애쉬",
      "하이 눈 애쉬",
      "정령용 애쉬",
      "수정 장미 애쉬"
    ],
    desc: [
      "",
      "애쉬는 기업 전쟁의 최전방에서 전투를 치르며 프로젝트의 야망 때문에 인간이 치르는 대가를 두 눈으로 똑똑히 목격했습니다. 이제 그녀는 저항세력 지네틱을 이끌며 날카로운 화살 끝을 거대 기업에 겨누고 있습니다.",
      "개척시대 초기에 만들어진 기계 천사 애쉬는 천상을 파괴했던 끔찍한 영토 분쟁에서 쓰러진 신들의 피로 움직입니다. 그녀는 무심한 태도로 모험을 추구하며 영원의 낙원을 끊임없이 약탈했던 인간들을 용서하고 보호하는 길을 선택했습니다.",
      "애쉬는 브랜드의 파괴로부터 부족을 지키기 위해 고대 야생의 숲으로 부족을 이끌었습니다. 그곳에서 우연히 무지친 정령용은 애쉬의 부적에 대한 사랑과 헌신을 느끼고 마력이라는 축복을 내렸습니다. 이제 애쉬는 용 마법으로 모두를 안전하게 지키며 반격할 기회를 엿보고 있습니다.",
      "아바로사 가문의 수장인 애쉬는 절제력 있고 이성적이기에 전통 무도회의 피상적인 유혹에 쉽게 넘어가는 사람이 아니지만, 오늘 밤은 예외입니다.<br>카이사의 춤이 무도회 내 축제 분위기를 점점 로맨틱하게 고조시키면서, 애쉬는 피의 서약자와 함께 쌓은 달콤한 추억을 상기하게 되었습니다. 이 따스한 추억이 가문을 책임져야 한다는 애쉬의 어깨를 짓누르는 무게감을 약간 덜어준 듯합니다.",
    ],
    price: [
      "기본 스킨",
      1325,
      1325,
      990,
      "기간 한정 이벤트"
    ],
    line: "ranged",
  },
  Blitzcrank = {
    name: "블리츠크랭크",
    skinImg: [
      "../images/skinShop/Blitzcrank-normal.webp",
      "../images/skinShop/Blitzcrank-i.png",
      "../images/skinShop/Blitzcrank-nuclear-punch.png",
      "../images/skinShop/Blitzcrank-happy-and-happy.png",
      "../images/skinShop/Blitzcrank-space-groove.png",
    ],
    skinName: [
      "거대 증기 골렘",
      "i블리츠크랭크",
      "핵펀치 블리츠크랭크",
      "복실복실 블리츠크랭크",
      "우주 그루브 블리츠크랭크"
    ],
    desc: [
      "",
      "가정 도우미 로봇으로 생산된 수천 대의 i블리츠크랭크들은 정기적인 소프트웨어 업데이트 중 프로그램에 의해 해킹당했습니다. 로봇들은 명령어가 실행될 때를 기다리며 이 사실을 모르는 인간 주민들을 계속 돕습니다.",
      "핵펀치 블리츠크랭크. 인간의 모습을 그대로 본뜬 최상급 로봇입니다.",
      "사람들은 블리츠크랭크가 토끼가 되기엔 너무 거대하다고 말하지만, 블리츠크랭크는 분명 복실복실한 토끼의 영혼을 갖고 있습니다. 귀를 달고 의상과 집게손에 씌울 토끼 인형도 직접 만들었죠. 누가 말릴 수 있을까요? 즐기게 두세요. 여느 토끼처럼 멋진 꼬리를 가지고 있으니까요.",
      "블리츠와 크랭크는 고양이 행성의 용맹한 전사입니다. 함께 블리츠크랭크라는 로봇을 조종하는 둘은 몇몇 경우만 제외하면 호흡이 잘 맞는 편이죠. 다만 리듬 감각이 부족한 클랭크는 파트너의 도움을 바라지만, 블리츠는 혼자서 춤추길 바쁩니다. 이제 블리츠와 크랭크는 햇빛을 차지하기 위해 강아지 행성을 점령하려고 합니다.",
    ],
    price: [
      "기본 스킨",
      990,
      525,
      725,
      1325
    ],
    line: "support",
  },
  Caitlin = {
    name: "케이틀린",
    skinImg: [
      "../images/skinShop/Caitlin-normal.jpg",
      "../images/skinShop/Caitlin-pulse-gun.jpg",
      "../images/skinShop/Caitlin-pool-party.jpg",
      "../images/skinShop/Caitlin-arcade.jpg",
      "../images/skinShop/Caitlin-combat-academy.png",
    ],
    skinName: [
      "필트오버의 보안관",
      "펄스 건 케이틀린",
      "수영장 파티 케이틀린",
      "아케이드 케이틀린",
      "전투사관학교 케이틀린"
    ],
    desc: [
      "",
      "어느 시대에서도 두려움의 대상인 전설적 시공경관 케이틀린. 그녀의 임무는 시간이라는 연약한 수수께끼를 지키는 것입니다. 그 순수함을 감히 위협하는 자는 시간 플라즈마 발사기의 조준경을 벗어날 수 없을 것입니다.",
      "케이틀린에게 호화로운 수영장에서 편히 쉬며 빙수를 먹거나 열대음료를 마시는 것만큼 완벽한 여름은 없습니다. 물론 물총을 쏘는 것도요. 케이틀린은 총이라면 뭐든 좋아합니다.",
      "긴 슈팅 게임 스나이퍼 경관에서 주목받는 영웅인 케이틀린은 중간보스의 반란이 있기 전까지 아카디아의 법 집행관으로 활약했습니다. 정밀한 조준력과 필요할 때 방아쇠를 당기는 결단력을 갖춘 그녀, 세계를 지키기 위해 쉴 새 없이 싸우다 보니, 총소리가 멎는 순간은 재장전을 할 때뿐입니다.",
      "경외와 존경을 받는 2학년생. 선구자 동아리의 회장. 라브리스 신성무기 전투사관학교의 학급 반장인 케이틀린은 비행 청소년들을 채찍질해 빈틈없는 전투태세를 갖추게 하겠다는 일념으로 이 문제 많기로 소문난 학교에 입학했습니다. 케이틀린은 언젠가 역사상 최고의 장군이 되기를 꿈꾸는데, 지금까지의 완벽한 행보를 보면 그날이 머지않은 듯합니다.",
    ],
    price: [
      "기본 스킨",
      1325,
      990,
      990,
      1325
    ],
    line: "ranged",
  },
  Jarvan = {
    name: "자르반 4세",
    skinImg: [
      "../images/skinShop/Jarvan-normal.webp",
      "../images/skinShop/Jarvan-dark-star.png",
      "../images/skinShop/Jarvan-crystal-rose.png",
      "../images/skinShop/Jarvan-new-year-beast.png",
      "../images/skinShop/Jarvan-famous-writer.png",
    ],
    skinName: [
      "데마시아의 귀감",
      "암흑의 별 자르반 4세",
      "수정 장미 자르반 4세",
      "새해 야수 자르반 4세",
      "명필 자르반 4세"
    ],
    desc: [
      "",
      "세상의 종말과 함께 육신에서 해방된 황제 자르반의 정수가 깊은 우주의 영원한 힘으로 다시 태어났습니다. 한때 필멸자였던 흔적은 그의 백성들과 함께 영원히 사라졌고, 새롭게 태어난 그는 암흑의 별이 나타나 모든 존재를 집어삼킬 순간만을 기다리고 있습니다.",
      "아마도 올해 연회에서 가장 유명한 귀공자일 듯한 자르반 4세의 이름은 모든 파티 애호가의 입에 오르내렸습니다. 번영하는 왕국의 지배자로서, 그는 무엇보다 정치적인 목적으로 이곳에 왔습니다. 이미 누군가 그의 마음을 사로잡았다는 소문이 있기는 하지만요...",
      "자르반 4세는 소의 해 수호단에 들어가기를 극구 거부했지만, 아버지의 끈질긴 설득에 마음을 굽혔습니다. 그는 직책에 따르는 유명세를 피하려고 최대한 애쓰지만, 자선가 집안 출신으로서 최대 연례행사를 효율적으로 준비한다는 점에서 쾌감을 느끼고 있죠.",
      "자르반은 먹의 호수 앞에 곧게 선 채로 고대의 왕들이 배운 교훈을 밝혀내려고 합니다. 그는 자신이 내린 선택에 선조들이 만족하고 자신을 자랑스럽게 여기기 바랍니다. 비록 지금은 호숫가에서 다른 사람들과 여흥을 즐기고 있기는 하지만, 자르반은 언제나 스스로를 입증하기 위해 신성한 먹의 화신을 따라 심연 속으로 들어갈 준비가 되어 있습니다.",
    ],
    price: [
      "기본 스킨",
      990,
      "기간 한정 이벤트",
      "기간 한정 판매",
      "기간 한정 이벤트"
    ],
    line: "jungle",
  },
  Lulu = {
    name: "룰루",
    skinImg: [
      "../images/skinShop/Lulu-normal.webp",
      "../images/skinShop/Lulu-pool-party.png",
      "../images/skinShop/Lulu-dragon-trainer.png",
      "../images/skinShop/Lulu-star-guardian.png",
      "../images/skinShop/Lulu-winter-fairy-tale.png",
    ],
    skinName: [
      "요정 마법사",
      "수영장 파티 룰루",
      "용 조련사 룰루",
      "별 수호자 룰루",
      "겨울 동화 룰루"
    ],
    desc: [
      "",
      "룰루가 복어 픽스와 함께 해변에 갈 때면, 튜브와 사랑스러운 오징어 모자를 꼭 챙깁니다. 하지만 룰루에게 물을 튀기지 않도록 조심하세요. 귀엽고, 껴안아 주고 싶고, 무방비하기 그징벗는 아기 물개로 변하는 수가 있답니다.",
      "여전히 조금 두렵긴 해도 용은 우리와 같은 생명체이며 상황에 따라 친구가 될 수 도 있습니다. 룰루는 번덕쟁이 마법으로 작은 용 친구의 망므을 사로잡았죠... 그렇게 룰루는 최초의 용 조련사가 되었습니다.",
      "럭스가 이끄는 별 수호단의 막내인 룰루는 괴짜 같은 면이 있기는 하지만 재능이 뛰어난 별 수호자 입니다. 별빛과 독특한 관계를 맺고 있어 때로는 단원들을 당혹스럽게 하지만 룰루는 분명 수호단을 지키는 믿을 만한 단원이며 다른 단원들에게 별빛이 별 수호자를 지켜준다는 믿음을 줍니다.",
      "포로 친구 픽스와 늘 함께 다니는 다정한 마법사 룰루는 변덕쟁이 얼음 마법으로 여기저기서 눈맞이 축제를 선사합니다. 룰루는 사실 노련한 전사이기도 해서 치명적인 얼음 화살을 발사하며 적군을 눈사람으로 만들어 버리기도 하죠.",
    ],
    price: [
      "기본 스킨",
      990,
      990,
      990,
      990
    ],
    line: "support",
  },
  Rammus = {
    name: "람머스",
    skinImg: [
      "../images/skinShop/Rammus-normal.jpg",
      "../images/skinShop/Rammus-lava.png",
      "../images/skinShop/Rammus-libero.png",
    ],
    skinName: [
      "중무장 아르마딜로",
      "용암 람머스",
      "리베로 람머스",
    ],
    desc: [
      "",
      "지옥 군단의 거침 없는 전쟁 괴수 람머스는 그저 굴러다닐 뿐이지만, 그가 지나간 자리에는 잿더미만 남습니다.",
      "공이 되세요. 골대 우상단에 꽃히기 전에 람머스가 마지막으로 남긴 말입니다. 골! 이제 와일드 리프트로 가서 결정적인 골을 몇 개 넣어보죠!"
    ],
    price: [
      "기본 스킨",
      725,
      725,
    ],
    line: "jungle",
  },
  Sona = {
    name: "소나",
    skinImg: [
      "../images/skinShop/Sona-normal.webp",
      "../images/skinShop/Sona-arcade.png",
      "../images/skinShop/Sona-crystal-rose.png",
      "../images/skinShop/Sona-goddess-of-music.png",
      "../images/skinShop/Sona-seven-stringed-zither.png",
    ],
    skinName: [
      "현의 명인",
      "아케이드 소나",
      "수정 장미 소나",
      "음악의 여신 소나",
      "칠현금 소나",
    ],
    desc: [
      "",
      "현실 세계에서 강제로 옮겨져 수많은 비디오 게임 속 보스들과 맞서 싸우는 것은 소나에게는 별일이 아닙니다. 그녀는 키보드 솔로 4에서 최고 난이도의 울트라 솔로 모드를 최초로 깨내 바 있죠. 개발자들의 말에 따르면 가능하지 않은 일들이었답니다.",
      "소나 아가씨는 올해 수정 장미 무도회의 손님이자 유명 연주자입니다. 그녀의 명인다운 연주는 아무리 지친 마음도 달래어. 평화로운 협정이 이루어지고 낭만적인 밤이 펼쳐질 무대를 만들죠. 하지만 올해에는, 현 너머 자상하고 따뜻한 영혼을 보아줄 누군가가 나타날지도 모릅니다...",
      "음악의 여신 소나는 위대한 예술 작품을 만들고 싶어 하는 숭배자들에게 뮤즈가 되어 줍니다. 시대가 바뀜에 따라 사람들에게서 잊혀졌지만, 최근 음원차드 깜짝 1위를 노리는 무명 뮤지션들 사이에서 다시 인기를 모으고 있습니다.",
      "",
    ],
    price: [
      "기본 스킨",
      990,
      "기간 한정 이벤트",
      725,
      "기간 한정 판매",
    ],
    line: "support",
  },
  Veiga = {
    name: "베이가",
    skinImg: [
      "../images/skinShop/Veiga-normal.jpg",
      "../images/skinShop/Veiga-the-end-king.png",
      "../images/skinShop/Veiga-super-villain.png",
      "../images/skinShop/Veiga-bad-santa.png",
      "../images/skinShop/Veiga-food-spirit.png",
    ],
    skinName: [
      "악의 작은 지배자",
      "끝판왕 베이가",
      "슈퍼 악당 베이가",
      "나쁜 산타 베이가",
      "음식의 정령 베이가",
    ],
    desc: [
      "",
      "나폴레옹 콤프렉스를 지닌 중간보스에 불과했던 베이가는 아케이드 세계로 거칠게 난입해 수백 명의 보스들을 그의 편으로 소환했습니다. 하나로 뭉친 그들은 베이가의 최종 목적을 이루기 위해 그 어떠한 것에도 멈추지 않을 겁니다. 세계를 손아귀에 넣고 영웅들에게 게임 오버를 선사할 때까지...",
      "악당 베이가가 또 일을 냈습니다! 베이가 주식회사 고층 건물 최상층에서 뉴 발로란 역사상 가장 사악한 계획을 꾸몄죠! 혹시 계획이 무산되더라도 베이가는 항상 처벌을 피해 다음 기회가 오기만을 호시탐탐 노립니다!",
      "보통 산타는 세상의 어린이들에게 기적과 즐거움을 선사하고 싶어합니다. 하지만 베이가는 아니죠. 그의 어두운 야망은 눈맞이 춪게를 망쳐버리는 것에 만족하지 않을 것입니다. 베이가는 전 세계를 혼돈에 빠뜨려 크리스마스 시즌을 모조리 그의 사악함으로 채울 계획입니다.",
      "베이가는 새콤달콤한 당과를 만드느라 매우 바쁩니다. 신선한 과일을 대나무 꼬치에 꽃은 다음 과일마다 유리처럼 투명한 마법의 시럽을 얇게 바르는 거죠. 이 엄청난 마법의 시럽을 만드는 비법은 만들 때 즐거움과 열정을 섞는 겁니다. 뭘 망설이시나요? 베이가와 함께 맛의 향연을 즐겨 보세요!",
    ],
    price: [
      "기본 스킨",
      1325,
      725,
      725,
      "와일드 패스 보상",
    ],
    line: "mid",
  },
  Syndra = {
    name: "신드라",
    skinImg: [
      "../images/skinShop/Syndra-normal.webp",
      "../images/skinShop/Syndra-soul-flower.png",
      "../images/skinShop/Syndra-prestige-star-guardian.png",
      "../images/skinShop/Syndra-star-guardian.png",
    ],
    skinName: [
      "어둠의 여제",
      "영혼의 꽃 신드라",
      "프레스티지 별 수호자 신드라",
      "별 수호자 신드라",
    ],
    desc: [
      "",
      "아이들은 길 읽은 영혼의 구세주, 영원히 은둔하는 자유의 영혼에 대한 이야기를 듣습니다. 그중 하나는 방랑하는 영혼의 뿌리로 꽁꽁 감싼 나무 이야기입니다. 영혼은 홀로 몸부림쳤습니다. 신드라가 영혼을 꽉 잡은 속박을 뜯어낼 때까지요. 신드라는 모든 영혼을 구합니다. 그렇지 않으면 영혼을 영원히 잃게 될 테니까요.",
      "비단과 그람자에 감싸여 꿈처럼 아름다운 신드에게는 자신을 따라다니는 수많은 팬도, 의상을 협찬하려는 수많은 공방도 필요 없습니다.(분명히 둘 다 있지만요!) 신드라는 언제나 모든 것의 중심에 서 있기 때문이죠. 아름다움의 비결이 궁금하시다고요? 별빛은 유행을 타지 않는답니다.",
      "신드라는 두려움과 존경을 동시에 불러일으킬 만큼 압도적인 존재감을 풍기는 초기의 별 수호자지만 그녀의 과거는 그림자에 가려져 있습니다. 현재는 아리가 이끄는 수호단에서 조언자 역할을 하고 있으며 단장 아리의 신뢰를 받고 있지만 일부 단원들은 신드라가 개인적인 야심을 위해서라면 어떤 대가든 치를 거라는 의심을 품고 있습니다.",
    ],
    price: [
      "기본 스킨",
      990,
      "전리품",
      990,
    ],
    line: "mid",
  },
  Ari = {
    name: "아리",
    skinImg: [
      "../images/skinShop/Ari-normal.png",
      "../images/skinShop/Ari-arcade.png",
      "../images/skinShop/Ari-soul-flower.png",
      "../images/skinShop/Ari-soda-pop.png",
      "../images/skinShop/Ari-landscape-painting.png",
    ],
    skinName: [
      "구미호",
      "아케이드 아리",
      "영혼의 꽃 아리",
      "소다 팝 아리",
      "전설의 산수화 아리"
    ],
    desc: [
      "",
      "어렵기로 악명 높은 진행형 격투 게임 데마시아 바이스에서 6백만 점이라는 놀라운 기록을 보유하고 있는 아리는 아케이드 세계의 복고 게임 전투창에서 불가항력의 존재입니다. 보스들 사이를 질주하며 8비트 마법으로 그들을 끝장내 이미 아케이드의 영왕이라는 별명도 얻었습니다.",
      "구원의 영혼인 여우는 영혼 세계에 도착한 모든 필멸자들의 영혼에게 손짓합니다. 산 자의 운명을 사냥놀이처럼 생각하는 변덕스럽고 엉뚱한 영혼은 필멸자의 혼이 최후의 안식을 찾을 기회를 제공하지만 길에서 벗어난다면 개입하지 않을 것입니다.",
      "거품과 풍미가 가득하고 무지하게 달콤한 저희 클래식 오렌지 소다의 비법 재료는 소다 팝 아리의 아낌 없는 사랑이랍니다. 브라움의 가게에서 만나보세요!",
      "물을 자유자재로 종하는 아리는 전설의 산수화에 모여든 신련한 기운을 모두 거둬들여 자신의 것으로 만들었습니다. 물이 가진 역동적인 성질을 무기로 삼아 손가락을 한 번 튕겨 거대한 파도를 부리거나 심지어 얼음 결정을 만들어 내기도 합니다. 아리는 이 힘으로 신비스러운 전설의 산수화를 보살피며 화폭에 담긴 나무 한그루, 풀잎 한 조각까지도 안전하게 지키고자 합니다. 고대의 산수화 너머 세상이 얼마나 무시무시한지 잘 아는 아리가 차마 이들을 어떻게 외면할 수 있을까요?",
    ],
    price: [
      "기본 스킨",
      990,
      1325,
      "와일드 패스 보상",
      990
    ],
    line: "mid",
  },
]
var swiper = new Swiper(".skin-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// 챔피언 카드 들고오기
let champion_cards = document.querySelectorAll(".champion-card-wrap .card");
// 스킨 뷰
let skin_view_warp = document.querySelector(".skin-view-warp");
// 닫기 버튼
let close_btn = document.querySelector(".skin-view-warp .close-btn");
// 슬라이드 추가할 슬라이더 wrap즉 슬라이더 부모
let skin_swiper_wrapper = document.querySelector(".swiper-wrapper");

champion_cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    for (champion in champions) {
      if (champions[champion].name == card.dataset.name) {
        add_slide(champions[champion]);
      }
    }
    skin_view_warp.classList.add("active");
  })
})

// 닫기 버튼 클릭시 스킨 뷰 off
close_btn.addEventListener("click", () => {
  skin_view_warp.classList.remove("active");
})

//슬라이드 추가해주는 함수
function add_slide(ob) {
  // 할당 전 초기화
  skin_swiper_wrapper.innerHTML = "";
  for (let i = 0; i < ob.skinImg.length; i++) {
    skin_swiper_wrapper.innerHTML += `
  <div class="swiper-slide">
    <div class="background-skin-img">
      <img src=${ob.skinImg[i]} alt="${ob.skinName[i]}">
      <div class="skin-desc-wrap">
        <h2 class="champion-name">${ob.name}</h2>
        <h3 class="skin-name">${ob.skinName[i]}</h3>
            <div class="skin-desc">${ob.desc[i]}</div>
      </div>
      <div class="price-view"><span>${ob.price[i].toLocaleString()}</span></div>
      </div>
    </div>`;
  }
  // 슬라이드 추가 후 업데이트
  swiper.update();
  // 껐다 키면 첫번째 슬라이드부터 실행
  swiper.slideTo(0, 0);
}

// 카테고리 선택 버튼
let category_btns = document.querySelectorAll(".category-wrap .left button");
// 카테고리 클릭시 그에 맞는 챔피언만 on
category_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    for(cb of category_btns){
      cb.classList.remove("active");
    }
    search_bar.value = "";
    btn.classList.add("active");
    // 챔피언 수만큼 반복
    for (cc of champion_cards) {
      cc.classList.remove("active");
      // 객체로 만들어 놓은 챔피언 처음부터 싹 가져오기
      for (champion in champions) {
        // 전체보기 클릭이면 전체 켜줌
        if (btn.dataset.type == "all") {
          cc.classList.add("active");
        }
        // 아니면 카테고리에 맞는 챔피언만 on
        else {
          // 객체 이름 == 챔피언 이름이 같으면
          if (champions[champion].name == cc.dataset.name) {
            // 그 이름을 가진 챔피언의 라인이 선택한 카테고리와 같으면
            if (champions[champion].line == btn.dataset.type) {
              cc.classList.add("active");
              console.log(champions[champion].name);
            }
          }
        }
      }
    }
  })
})

// 검색 input 가져오기
let search_bar = document.querySelector(".category-wrap .right .champion-search");
// 검색 버튼
let search_btn = document.querySelector(".category-wrap .right .serch-btn");

// 챔피언 검색
search_btn.addEventListener("click", () => {
  // 글자를 입력하지 않았을때는 실행 x
  if (search_bar.value != "" && search_bar.value.trim() != "") {
    for (cc of champion_cards) {
      cc.classList.remove("active");
      console.log(cc.dataset.name);
      if(cc.dataset.name.includes(search_bar.value)){
        cc.classList.add("active");
      }
    }
  }
})
