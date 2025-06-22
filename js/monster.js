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

/* page: monster-list */
/* section .monster */
// 카테고리 ↔ 콘텐츠 탭 구조
let monsterCategoryTabBtn = document.querySelectorAll('.monster-category');
let monsterCategoryContent = document.querySelectorAll('.monster-content');

monsterCategoryTabBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // 모든 탭, 콘텐츠의 active 제거
    monsterCategoryTabBtn.forEach((button) => {
      button.classList.remove('active');
    });
    monsterCategoryContent.forEach((content) => {
      content.classList.remove('active');
    });

    // 클릭된 탭과 해당 콘텐츠에 active 추가
    btn.classList.add('active');
    monsterCategoryContent[index].classList.add('active');
  });
});

// 몬스터 아이콘 클릭 → 해당 슬라이드 이동
// 모든 슬라이더 요소들을 찾아 스와이퍼 인스턴스 생성
const swiperInstances = []; // 각 monster-swiper에 대응하는 Swiper 인스턴스 저장

document.querySelectorAll('.monster-swiper').forEach((swiperEl, index) => {
  const swiper = new Swiper(swiperEl, {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
    on: {
      slideChange: function () {
        const realIndex = this.realIndex; // 루프 모드에서 실제 인덱스
        const contentEl = document.querySelectorAll('.monster-content')[index];
        const iconItems = contentEl.querySelectorAll('.monster-icon-list ul li');

        iconItems.forEach((li, liIndex) => {
          li.classList.toggle('active', liIndex === realIndex);
        });
      },
    },
  });

  swiperInstances.push(swiper);
});


// 각 monster-icon-list와 연결된 스와이퍼 찾아서 아이콘 클릭 이벤트 설정
document.querySelectorAll('.monster-content').forEach((contentEl, contentIndex) => {
  const icons = contentEl.querySelectorAll('.monster-icon-list ul li a');

  icons.forEach((iconEl, slideIndex) => {
    iconEl.addEventListener('click', (e) => {
      e.preventDefault();

      // 해당 monster-content 안에 있는 스와이퍼 인스턴스 찾아서 슬라이드 이동
      const swiper = swiperInstances[contentIndex];
      if (swiper && typeof swiper.slideToLoop === 'function') {
        swiper.slideToLoop(slideIndex);
      }

      // 슬라이드에 일치하는 몬스터 아이콘에 active 클래스 추가
      const iconItems = contentEl.querySelectorAll('.monster-icon-list ul li');
      iconItems.forEach((li) => li.classList.remove('active')); // 모두 제거
      iconEl.closest('li').classList.add('active'); // 클릭된 아이콘만 추가
    });
  });
});

/* page: monster-상세페이지 */
/* section .monster-more-info */
// 스크롤시 요소 사라짐
let monsterInfoTitleAnchor = document.querySelector('.monster-info-title-anchor');
let monsterBasicInfo = document.querySelector('.monster-basic-info');
let monsterStatisticsInfo = document.querySelector('.monster-statistics-info');
let monsterBountyInfo = document.querySelector('.monster-bounty-info');
let monsterBuffInfo = document.querySelector('.monster-buff-info');

console.log(monsterBasicInfo, monsterStatisticsInfo, monsterBountyInfo, monsterBuffInfo)

document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 50){
    monsterInfoTitleAnchor.style.opacity = '0';
    monsterInfoTitleAnchor.style.transform = 'translateY(-50px)';
  } else {
    monsterInfoTitleAnchor.style.opacity = '1';
    monsterInfoTitleAnchor.style.transform = 'translateY(0)';
  }

  if (scrollPosition > 150) {
    monsterBasicInfo.style.opacity = '0';
    monsterBasicInfo.style.transform = 'translateY(-50px)';
  } else {
    monsterBasicInfo.style.opacity = '1';
    monsterBasicInfo.style.transform = 'translateY(0)';
  }

  if (scrollPosition > 600) {
    monsterStatisticsInfo.style.opacity = '0';
    monsterStatisticsInfo.style.transform = 'translateY(-50px)';
  } else {
    monsterStatisticsInfo.style.opacity = '1';
    monsterStatisticsInfo.style.transform = 'translateY(0)';
  }

  if (scrollPosition > 900) {
    monsterBountyInfo.style.opacity = '0';
    monsterBountyInfo.style.transform = 'translateY(-50px)';
  } else {
    monsterBountyInfo.style.opacity = '1';
    monsterBountyInfo.style.transform = 'translateY(0)';
  }

  if (scrollPosition > 1200) {
    monsterBuffInfo.style.opacity = '0';
    monsterBuffInfo.style.transform = 'translateY(-50px)';
  } else {
    monsterBuffInfo.style.opacity = '1';
    monsterBuffInfo.style.transform = 'translateY(0)';
  }
});


/* section .monster-more-monster */
// 스와이퍼
var monsterSwiper = new Swiper(".monster-more-swiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});