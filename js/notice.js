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


const noticesData = [
  {
    title: "🚨 6월 25일 서버 점검 안내",
    date: "2025-06-20",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
    content: "6월 25일(화) 새벽 2시부터 4시까지 서버 점검이 예정되어 있습니다. 점검 시간 동안 서비스가 중단됩니다."
  },
  {
    title: "🎉 여름 이벤트 시작!",
    date: "2025-06-19",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: "여름 맞이 특별 이벤트가 시작되었습니다! 로그인만 해도 포인트 지급, 다양한 경품 이벤트에 참여해보세요."
  },
  {
    title: "🆕 신규 기능 안내: 다크 모드 추가",
    date: "2025-06-17",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    content: "사용자 편의를 위해 다크 모드를 도입했습니다. 환경설정에서 활성화하여 편안한 화면을 경험해보세요."
  },
  {
    title: "🚨 6월 25일 서버 점검 안내",
    date: "2025-06-20",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
    content: "6월 25일(화) 새벽 2시부터 4시까지 서버 점검이 예정되어 있습니다. 점검 시간 동안 서비스가 중단됩니다."
  },
  {
    title: "🎉 여름 이벤트 시작!",
    date: "2025-06-19",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: "여름 맞이 특별 이벤트가 시작되었습니다! 로그인만 해도 포인트 지급, 다양한 경품 이벤트에 참여해보세요."
  },
  {
    title: "🆕 신규 기능 안내: 다크 모드 추가",
    date: "2025-06-17",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    content: "사용자 편의를 위해 다크 모드를 도입했습니다. 환경설정에서 활성화하여 편안한 화면을 경험해보세요."
  },  {
    title: "🚨 6월 25일 서버 점검 안내",
    date: "2025-06-20",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
    content: "6월 25일(화) 새벽 2시부터 4시까지 서버 점검이 예정되어 있습니다. 점검 시간 동안 서비스가 중단됩니다."
  },
  {
    title: "🎉 여름 이벤트 시작!",
    date: "2025-06-19",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: "여름 맞이 특별 이벤트가 시작되었습니다! 로그인만 해도 포인트 지급, 다양한 경품 이벤트에 참여해보세요."
  },
  {
    title: "🆕 신규 기능 안내: 다크 모드 추가",
    date: "2025-06-17",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    content: "사용자 편의를 위해 다크 모드를 도입했습니다. 환경설정에서 활성화하여 편안한 화면을 경험해보세요."
  },
  {
    title: "🚨 6월 25일 서버 점검 안내",
    date: "2025-06-20",
    image: "../images/notice-img01.png",
    content: "6월 25일(화) 새벽 2시부터 4시까지 서버 점검이 예정되어 있습니다. 점검 시간 동안 서비스가 중단됩니다."
  },
  {
    title: "🎉 여름 이벤트 시작!",
    date: "2025-06-19",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    content: "여름 맞이 특별 이벤트가 시작되었습니다! 로그인만 해도 포인트 지급, 다양한 경품 이벤트에 참여해보세요."
  },
  {
    title: "🆕 신규 기능 안내: 다크 모드 추가",
    date: "2025-06-17",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    content: "사용자 편의를 위해 다크 모드를 도입했습니다. 환경설정에서 활성화하여 편안한 화면을 경험해보세요."
  }
];

const container = document.getElementById('noticeContainer');
const template = document.getElementById('noticeTemplate').firstElementChild;

noticesData.forEach(notice => {
  const card = template.cloneNode(true);
  card.querySelector('.notice-img').src = notice.image;
  card.querySelector('.notice-img').alt = notice.title;
  card.querySelector('.notice-front .title').textContent = notice.title;
  card.querySelector('.notice-front .date').textContent = notice.date;
  card.querySelector('.notice-back .title').textContent = notice.title;
  card.querySelector('.notice-back .content').innerHTML = notice.content.replace(/\n/g, '<br>');

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  container.appendChild(card);
});