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


const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".hero-swiper-pagination",
        clickable: true,
    },

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
        }
      }

});
const productSlider = new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 32,
    grabCursor: true,
    pagination: {
        el: ".product-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1280: {
            slidesPerView: 3,
        }
    }

});

// MENU SCROLL
var fixPx = 5;
var lastId;
var topMenu = document.getElementById("header");
var topMenuHeight = topMenu.offsetHeight + fixPx;

// All list items
var menuItems = topMenu.querySelectorAll(".nav-item");

// Anchors corresponding to menu items
var scrollItems = Array.from(menuItems).map(function(item) {
    var href = item.getAttribute("href");
    var element = document.querySelector(href);
    return element ? element : null;
}).filter(Boolean);

menuItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
        var href = this.getAttribute("href");
        var id = href.replace('#', '');
        document.querySelectorAll('.nav-item-target').forEach(function(el) {
            el.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
        var offsetTop = href === "#" ? 0 : document.querySelector(href).offsetTop - topMenuHeight + fixPx;
        window.scrollTo({
            top: offsetTop - fixPx,
            behavior: 'smooth'
        });
        closeMenu();
        e.preventDefault();
    });
});

window.addEventListener("scroll", function() {
    //var fromTop = window.pageYOffset + topMenuHeight;
    var fromTop = window.scrollY + topMenuHeight;
    var cur = scrollItems.filter(function(item) {
        return item.offsetTop - fixPx < fromTop;
    });
    cur = cur[cur.length - 1];
    var id = cur ? cur.id : "uber-uns";
    if (lastId !== id) {
        lastId = id;
        menuItems.forEach(function(item) {
            item.classList.remove("active");
        });
        var activeItem = topMenu.querySelectorAll("[href='#" + id + "']");
        if (activeItem) {
            activeItem.forEach(function(item) {
                item.classList.add("active");
            });
        }
    }
});

document.getElementById('chatbot-toggle').addEventListener('click', function() {
    if (document.getElementById('chatbot-iframe-area').classList.contains('active')) {
        document.getElementById('chatbot-iframe-area').classList.remove('active');
    } else {
        document.getElementById('chatbot-iframe-area').classList.add('active');
    }
    if (!document.getElementById('chatbot-iframe').getAttribute('src')) {
        document.getElementById('chatbot-iframe').setAttribute('src', document.getElementById('chatbot-iframe').getAttribute('data-src'));
    }

});

document.addEventListener('click', function(e) {
    if (!document.getElementById('chatbot-toggle').contains(e.target) && !document.getElementById('chatbot-iframe-area').contains(e.target)) {
        document.getElementById('chatbot-iframe-area').classList.remove('active');
    }
});