/* header */
fetch('/webRedesign-WildRift/include/header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.header-include').innerHTML = data;
  })

/* section .mainVisual */
// 스크롤 위치 스케일 확대
let mainVisualAccess = document.querySelector('.mainVisual-access');
let mainVisualVideo = document.querySelector('.mainVisual-video video');

// 스크롤 위치 ↑ 등장
let mainVisualLogo = document.querySelector('.mainVisual-logo');
let mainVisualDownloadButtonBox = document.querySelector('.mainVisual-download-button-box');
let descriptionBackground = document.querySelector('.description');

// console.log(mainVisualDownloadButtonBox, mainVisualLogo);

document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > 2000){
    // 영상 정지
    mainVisualVideo.pause();
    descriptionBackground.style.opacity = '1';
  } else if (scrollPosition > 1300) {
    // 버튼 떠오름
    mainVisualDownloadButtonBox.style.opacity = '1';
    mainVisualDownloadButtonBox.style.transform = 'translateX(-50%) translateY(200px)';
    descriptionBackground.style.opacity = '0';
    mainVisualVideo.play();
  } else if (scrollPosition > 1000) {
    // 로고 떠오름
    mainVisualVideo.style.filter = 'blur(7px)';
    mainVisualLogo.style.opacity = '1';
    mainVisualLogo.style.transform = 'translateX(-50%) translateY(200px) scale(1.3)';
    mainVisualDownloadButtonBox.style.opacity = '0';
    mainVisualDownloadButtonBox.style.transform = 'translateX(-50%) translateY(0)';
  } else if (scrollPosition > 700) {
    // 중앙: 영상 only
    mainVisualVideo.style.filter = 'blur(0px)';
    mainVisualLogo.style.opacity = '0';
    mainVisualLogo.style.transform = 'translateX(-50%) translateY(0) scale(1.3)';
  } else if (scrollPosition > 500) {
    // 로고 커지면서 사라짐
    mainVisualAccess.style.transform = 'scale(2) translateX(-25%)';
    mainVisualAccess.style.opacity = '0';
    mainVisualVideo.style.transform = 'scale(1)';
  }else {
    // 기본: 로고만, 영상
    mainVisualAccess.style.transform = 'scale(1) translateX(-50%)';
    mainVisualAccess.style.opacity = '1';
    mainVisualVideo.style.transform = 'scale(.3)';
    mainVisualVideo.style.filter = 'blur(0px)'
    mainVisualVideo.play();
  }
})

/* section .description */
document.addEventListener('DOMContentLoaded', () => {
  const descbuttons = document.querySelectorAll('.descbuttons button');
  const videoWrappers = document.querySelectorAll('.video-wrapper');
  const contentItems = document.querySelectorAll('.content-item');

  descbuttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // 버튼 active 토글
      descbuttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 영상 및 iframe src 전환
      videoWrappers.forEach((vw, i) => {
        const iframe = vw.querySelector('iframe');
        if (i === index) {
          vw.classList.add('active');
          if (iframe) iframe.src = iframe.dataset.src;
        } else {
          vw.classList.remove('active');
          if (iframe) iframe.src = '';
        }
      });

      // 설명 텍스트 전환
      contentItems.forEach((content, i) => {
        content.classList.toggle('active', i === index);
      });
    });
  });

  // 첫 영상 강제로 src 할당 (자동재생용)
  const firstIframe = videoWrappers[0].querySelector('iframe');
  if (firstIframe) {
    firstIframe.src = firstIframe.dataset.src;
  }
});

/* section .new-champion */
// 스킬 버튼
let skill_btns = document.querySelectorAll(".new-champion button.skill");
// 스킬 설명
let skill_descs = document.querySelectorAll(".new-champion .skill-desc-wrap")
// 스킬 버튼 클릭시 설명 on
skill_btns.forEach((skill_btn, index) => {
  skill_btn.addEventListener("click", () => {
    for (sd of skill_descs) {
      console.log(sd);
      sd.classList.remove("active");
    }
    skill_descs[index].classList.add("active");
  })
})

/* section .event */
const cards = document.querySelectorAll('.event-card');

if (cards.length > 0) {
  cards[0].classList.add('active');
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

/* section .game-mode */
// 주 모드
let main_mode_btn = document.querySelector(".game-mode .main-mode");
// 모험 모드
let adventure_mode_btn = document.querySelector(".game-mode .adventure-mode");
// 모험 모드 리스트
let adventure_mode_select_warp = document.querySelector(".adventure-mode-select-warp");
// 모험 모드 리스트 안에 li
let adventure_mode_select_warp_item = document.querySelectorAll(".adventure-mode-select-warp > ul > li");

main_mode_btn.addEventListener("click", () => {
  // 주 모드 클릭시 모험모드 active 삭제
  adventure_mode_btn.classList.remove("active");
  main_mode_btn.classList.add("active");
  adventure_mode_select_warp.classList.remove("active");
  changeInfo(0);
})
adventure_mode_btn.addEventListener("click", () => {
  // 모험 모드 클릭시 모험모드 active 삭제
  main_mode_btn.classList.remove("active");
  adventure_mode_btn.classList.add("active");
  adventure_mode_select_warp.classList.add("active");
  changeInfo(1);
})

// 모드 객체
const modeObject=[
  {
    name: "랭크 게임",
    people: "5vs5",
    //src: "videos/rankgame-gif.gif",
    src: "videos/rankgame-video.mp4",
    desc: "여러 공격로에서 공격하고 방어하며 적 넥서스를 파괴하고 승리를 쟁취하세요!"
  },
  {
    name: "무작위 총력전",
    people: "5vs5",
    //src: "https://www.youtube.com/embed/aftgU_H0L8o?autoplay=1&mute=1&loop=1&playlist=aftgU_H0L8o",
    src: "videos/random-battle-video.mp4",
    desc: "무작위 챔피언을 사용해 아군과 함께 적 넥서스를 파괴하고 승리를 쟁취하세요!"
  },
  {
    name: "아레나",
    people: "2vs2vs2",
    //src: "https://www.youtube.com/embed/e_ASru6X3zc?autoplay=1&mute=1&loop=1&playlist=e_ASru6X3zc",
    src: "videos/arena-video.mp4",
    desc: "2인 팀을 구성해 다른 팀과 맞서 싸우세요! 점수가 가장 높은 팀이 승리합니다."
  },
  {
    name: "무무작위 총력전",
    people: "5vs5",
    //src: "https://www.youtube.com/embed/LkhtA5T3nMs?&mute=1&loop=1&playlist=LkhtA5T3nMs",
    src: "videos/randomly-video.mp4",
    desc: "무작위 총력전에서 다양한 룬을 조합하며 무한한 가능성을 발견해보세요!"
  },
  {
    name: "단일 챔피언",
    people: "5vs5",
    src: "videos/single-champion-video.mp4",
    desc: "모두 동일한 챔피언으로 겨루며 누가 가장 강한지 확일할 때입니다!"
  },
  {
    name: "최후의 결전",
    people: "5vs5",
    src: "videos/final-battle-video.mp4",
    desc: "궁극의 역할군 아이템으로 정해진 한계를 뛰어넘어 보세요!"
  },
  {
    name: "대결",
    people: "1vs1",
    src: "videos/competition-video.mp4",
    desc: "상대방의 다음 수를 읽어 내야 하는 극한의 1대1모드입니다!"
  },
  {
    name: "AI 상대 대전",
    people: "5vs5",
    src: "videos/ai-battle-video.mp4",
    desc: "협곡에서 봇을 상대로 싸우며 적 넥서스를 파괴하고 승리를 쟁취하세요!"
  },
]
// 바꿔줄 모드 이름
let mode_name = document.querySelector(".mode-info-wrap .mode-name");
// 바꿔줄 모드 인원수
let mode_people = document.querySelector(".mode-info-wrap .mode-people-number");
// 바꿔줄 모드 설명
let mode_desc = document.querySelector(".mode-desc-wrap .mode-desc");
// 바꿔줄 video
let mode_video = document.querySelector(".mode-img-wrap video");
// 모험 모드 선택
adventure_mode_select_warp_item.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (amswi of adventure_mode_select_warp_item) {
      amswi.classList.remove("active");
    }
    item.classList.add("active");
    changeInfo(index + 1);
  })
})

function changeInfo(num){
  // 모드 이름 변경
  mode_name.textContent = modeObject[num].name;
  // 모드 인원수 변경
  mode_people.textContent = modeObject[num].people;
  // 모드 설명 변경
  mode_desc.textContent = modeObject[num].desc;
  // 이미지 주소 변경
  //mode_gif.src = modeObject[num].src;
  mode_video.src = modeObject[num].src;
  mode_video.play();
}

// 게임 모드에 스크롤하면 영상 재생하게 할거임 아직 미완성
let game_mode_section = document.querySelector(".game-mode");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mode_video.play();
      } else {
        mode_video.pause();
      }
    });
  },
  {
    threshold: 0.5, // 화면의 50% 이상 보이면 재생
  }
);
observer.observe(game_mode_section);

/* section 챔피언 리스트 */
// 1. 각 character-swiper마다 Swiper 인스턴스 생성해서 배열에 저장
const swiperInstances = [];
document.querySelectorAll('.character-swiper').forEach((el) => {
  const swiper = new Swiper(el, {
    direction: "vertical",
    slidesPerView: 3.5,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: true,
    },
    navigation: {
      nextEl: el.querySelector(".custom-next"),
      prevEl: el.querySelector(".custom-prev"),
    },
  });
  swiperInstances.push(swiper);
});


const characterButtons = document.querySelectorAll('.position-btn button');
const characterWrappers = document.querySelectorAll('.character-wrapper');

characterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    // 🔊 효과음 재생
    const soundPath = `sounds/${target}.wav`;
    const sound = new Audio(soundPath);
    sound.currentTime = 0;
    sound.play();

    // 🔁 캐릭터 전환
    characterWrappers.forEach((wrap) => {
      if (wrap.classList.contains(target)) {
        wrap.classList.add('active');
      } else {
        wrap.classList.remove('active');
      }
    });

    // 🔄 스와이퍼 강제 업데이트 + loop 재생성 + autoplay 재시작
    setTimeout(() => {
      const activeWrapper = document.querySelector('.character-wrapper.active');
      const activeSwiperEl = activeWrapper?.querySelector('.character-swiper');
      // 여기서 swiperInstances 배열에서 일치하는 인스턴스 찾기
      const activeSwiper = swiperInstances.find(swiper => swiper.el === activeSwiperEl);

      if (activeSwiper) {
        activeSwiper.loopDestroy();
        activeSwiper.loopCreate();
        activeSwiper.update();
        activeSwiper.autoplay.start();
      }
    }, 100);
  });
});

/* section .playlist */
// 플레이 리스트 메뉴 제어
let musicMenuBtn = document.querySelectorAll('.music-menu-button');
let musicMenu = document.querySelector('.music-menu-box');
let musicMenuCloseBtn = document.querySelector('.music-menu-close-button');

musicMenuBtn.forEach(button => {
  button.addEventListener('click', () => {
    musicMenu.classList.toggle('active');
  });
});

musicMenuCloseBtn.addEventListener('click', () => {
  musicMenu.classList.remove('active');
});

// 배경 변경 함수
function updateBackground(index) {
  let musicBackground = document.querySelectorAll('.music-background-wrap ul li');
  musicBackground.forEach((bg, i) => {
    if (i === index) {
      bg.classList.add('active');
    } else {
      bg.classList.remove('active');
    }
  });
}

// 배경 초기화
updateBackground(0);

// 플레이 리스트 음악 제어
// 오디오 리스트
let musicAudio = document.querySelectorAll('.music-progress-bar audio');

// 음악 재생 제어
let musicPlayBtn = document.querySelectorAll('.music-on-button');
let musicPauseBtn = document.querySelectorAll('.music-off-button');

// 음악 커버
let musicCoverImg = document.querySelectorAll('.music-cover');

// 음악 재생
musicPlayBtn.forEach(button => {
  button.addEventListener('click', () => {
    // 모든 오디오 정지, 버튼 상태 초기화, 커버 이미지 애니메이션 제거
    musicAudio.forEach(audio => audio.pause());
    musicPlayBtn.forEach(btn => btn.style.display = 'none');
    musicPauseBtn.forEach(btn => btn.style.display = 'block');
    musicCoverImg.forEach(img => img.classList.remove('active'));

    // 현재 슬라이드 요소 로드
    let slide = button.closest('.swiper-slide');
    let audio = slide.querySelector('audio');
    let pauseBtn = slide.querySelector('.music-off-button');
    let coverImg = slide.querySelector('.music-cover');
    
    // 음악 처음부터 재생!
    audio.currentTime = 0;
    audio.play();
    updatePlayingList();

    // 버튼 스타일 변경, 커버 이미지 애니메이션 추가
    button.style.display = 'none';
    pauseBtn.style.display = 'block';
    coverImg.classList.add('active');
  })
})

// 음악 정지
musicPauseBtn.forEach(button => {
  button.addEventListener('click', () => {
    // 현재 슬라이드 요소 로드
    let slide = button.closest('.swiper-slide');
    let audio = slide.querySelector('audio');
    let playBtn = slide.querySelector('.music-on-button');
    let coverImg = slide.querySelector('.music-cover');

    // 음악 멈춤!
    audio.pause();
    updatePlayingList ();

    // 버튼 스타일 변경, 커버 이미지 애니메이션 제거
    button.style.display = 'none';
    playBtn.style.display = 'block';
    coverImg.classList.remove('active');
  })
})

// 스와이퍼 슬라이드 넘길 때, 모든 음악 정지 + 버튼 초기화
function musicSlide () {
  musicAudio.forEach(audio => audio.pause());
  musicPlayBtn.forEach(btn => btn.style.display = 'block');
  musicPauseBtn.forEach(btn => btn.style.display = 'none');
}

// 음악 재생시 리스트에 표시
let musicListItems = document.querySelectorAll('.music-list li');

function updatePlayingList () {
  musicAudio.forEach((audio, idx) => {
    if (!audio.paused && !audio.ended) {
      // 리스트 전체 초기화
      musicListItems.forEach(item => item.classList.remove('active'));
  
      // 리스트 항목 활성화
      musicListItems[idx].classList.add('active');
    }
  });
}

// 리스트 항목 클릭시 해당 슬라이드 이동
musicListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    musicSwiper.slideToLoop(index);
  });
});

// 음악 타이머 표시 + 진행 바 제어
let musicCurrentTimer = document.querySelectorAll('.music-current-timer');
let musicDurationTimer = document.querySelectorAll('.music-duration-timer');
let musicProgressBar = document.querySelectorAll('.music-progress-bar');
let musicProgress = document.querySelectorAll('.music-bar');

musicAudio.forEach((audio, index) => {
  // 음악 전체 시간 로드
  audio.addEventListener('loadeddata', () => {
    let duration = audio.duration;
    let min = Math.floor(duration / 60);
    let sec = Math.floor(duration % 60).toString().padStart(2, '0');
    musicDurationTimer[index].innerText = `${min}:${sec}`;
  });

  // 음악 진행 시간 업데이트
  audio.addEventListener('timeupdate', () => {
    let current = audio.currentTime;
    let duration = audio.duration;
    let min = Math.floor(current / 60);
    let sec = Math.floor(current % 60).toString().padStart(2, '0');

    // 음악 진행 시간에 따른 바 너비 업데이트
    musicCurrentTimer[index].innerText = `${min}:${sec}`;
    let progressPercent = (current / duration) * 100;
    musicProgress[index].style.width = `${progressPercent}%`;
  });
});

// 재생바 클릭 이벤트
musicProgress.forEach((progress, idx) => {
  progress.parentElement.addEventListener('click', (e) => {
    let width = progress.parentElement.clientWidth;
    let offsetX = e.offsetX;
    let audio = musicAudio[idx];
    audio.currentTime = (offsetX / width) * audio.duration;
  });
});

// 스와이퍼
var musicSwiper = new Swiper(".music-swiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: -400,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    // 슬라이드가 바뀔 때마다...
    slideChange: function () {
      // 배경 변경 함수 실행
      updateBackground(this.realIndex);
      // 음악 정지 + 버튼 초기화 실행
      musicSlide();
    }
  }
});

/* section 다른 게임 둘러보기 */

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