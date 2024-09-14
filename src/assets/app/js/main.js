const menuOpenBtn = document.getElementById('open-menu');
const menuCloseBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
    mobileMenu.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
}
function openMenu() {
    mobileMenu.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
}

menuOpenBtn.addEventListener('click', function() {
    openMenu();
});

menuCloseBtn.addEventListener('click', function() {
    closeMenu();
});



const logoSlider = new Swiper('.logo-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1440: {
            slidesPerView: 6,
        },
        1640: {
            slidesPerView: 7,
        }
      }

});

document.querySelectorAll('.promotion-animated-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.closest('.promotion-animated-group')?.classList.add('is-hover');
    });

    item.addEventListener('mouseleave', function() {
        this.closest('.promotion-animated-group')?.classList.remove('is-hover');
    });
});
