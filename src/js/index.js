document.addEventListener("DOMContentLoaded", () => {
  const imagenes = new Swiper(".imagenes", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
      depth: 200,
      modifer: 1,
      slidesShadows: false,
      rotate: 0,
      stretch: 0,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  const testimonios = new Swiper(".testimonios", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0, // Empieza en el cuarto slide (índice 3) */
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    controller: {
      inverse: true,
    },
  });
});

function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}
