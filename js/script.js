function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("body")

  const headerNav = document.querySelector('.header__nav')
  const headerBurger = document.querySelector('.header__burger')
  const headerLinks = document.querySelectorAll(".header__link")

  const videoPlay = document.getElementById("video__play")
  const videoBlock = document.getElementById("videoBlock")
  const video = document.getElementById("video")

  const reviewsAvatar = Array.from(document.querySelectorAll(".reviews__avatar"))
  const reviewItems = document.querySelectorAll(".review__item")
  const autors = document.querySelectorAll(".autor")
  let currentReview = 2;

  // меню бургер
  headerBurger.addEventListener('click', () => {
    if (Array.from(headerBurger.classList).indexOf('active') != -1) {
      headerBurger.classList.remove('active')
      headerNav.classList.remove('active')
      body.classList.remove('lock')
    } else {
      headerBurger.classList.add('active')
      headerNav.classList.add('active')
      body.classList.add('lock')
    }
  })

  // плавная прокрутка
  headerLinks.forEach(link => {
    link.addEventListener('click', () => {
      let id = link.getAttribute("href").slice(1)
      scrollSmooth(document.getElementById(id))
      headerBurger.classList.remove('active')
      headerNav.classList.remove('active')
      body.classList.remove('lock')
    })
  })

  // просмотр видео
  videoPlay.addEventListener("click", () => {
    video.src = "https://www.youtube.com/embed/KvUgaHTNit4"
    videoBlock.classList.remove('d-none')
    video.classList.add('video__anim')
    body.classList.add('lock')
  })

  videoBlock.addEventListener("click", () => {
    video.src = ''
    videoBlock.classList.add('d-none')
    body.classList.remove('lock')
  })

  // переключение отзывов
  reviewsAvatar.forEach(item => {
    item.addEventListener('click', () => {
      reviewsAvatar.forEach(avatar => {
        avatar.classList.remove('active')
      })

      reviewItems.forEach(review => {
        review.classList.remove("active")
      })

      autors.forEach(autor => {
        autor.classList.remove('active')
      })

      lastReview = currentReview
      currentReview = reviewsAvatar.indexOf(item)
      reviewItems[currentReview].classList.add('active')
      autors[currentReview].classList.add('active')
      item.classList.add('active')
    })
  })

})

const scrollSmooth = el => {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: 'smooth'
  })
}

