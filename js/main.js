const searchEl = document.querySelector('.search');       // HTML에서 요소 search class 검색 / 할당
const searchInputEl = searchEl.querySelector('input');    // searchEl에서 요소 input class 검색 / 할당

searchEl.addEventListener('click', function () {          // searchEl 누르면 event 발생
  searchInputEl.focus();                                  // seachInputEl에 js를 통해 focus를 강제 적용
});

searchInputEl.addEventListener('focus', function () {       // searchInputEl에 focus가 발생
  searchEl.classList.add('focused');                        // 특정 요소에 Class 정보를 가지고 있는 객체에서 Class 내용을 추가
  searchInputEl.setAttribute('placeholder', '통합검색');     // searchInputEl에 어떤 HTML속성을 지정
});

searchInputEl.addEventListener('blur', function () {        // searchInputEl에 focus가 해제 됐을 때 발생
  searchEl.classList.remove('focused');                     // 특정 요소에 Class 정보를 가지고 있는 객체에서 Class 내용을 추가
  searchInputEl.setAttribute('placeholder', '');            // searchInputEl에 어떤 HTML속성을 지정
});


const badgeEl = document.querySelector('header .badges');   // brower 창을 의미
window.addEventListener('scroll', _.throttle(function () {  // _.throttle(function () {}, 300) : 0.3초 단위로 함수를 실행 (제한을 걸음.)
  console.log(window.scrollY);
  if (window.scrollY > 500) {                               // windows.scrollY : 화면의 위치
    gsap.to(badgeEl, .6, {                                  // gsap : JS에서 애니메이션을 넣을 때 사용
      opacity: 0,
      display: 'none',
    }); // gsap.to(요소, 지속시간, 옵션);
  } else {
    gsap.to(badgeEl, .6, {                                  // gsap : JS에서 애니메이션을 넣을 때 사용
      opacity: 1,
      display: 'block',
    });
  }
}, 300)); // _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {                  // HTML의 visual fade-in Class를 각각 가져와서 실행
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',  // 수직 슬라이드
  autoplay: true,         // 자동 재생 여부
  loop: true              // 반복 재생 여부
});
new Swiper('.promotion .swiper-container', {
  //direction: 'horizontal',     기본값 (명시하지 않아도 됨)
  slidesPerView: 3,           // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,           // 슬라이드 사이 여백
  centeredSlides: true,       // 1번 슬라이드가 가운데 보이기
  loop: true,                 // 반복 재생 여부
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',    // 페이지 번호 요소 선택자
    clickable: true,                        // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',      // 이전 슬라이드 보는 버튼
    nextEl: '.promotion .swiper-next',      // 이후 슬라이드 보는 버튼
  },
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }
  else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});