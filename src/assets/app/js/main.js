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

//Menu
document.addEventListener('DOMContentLoaded', function() {
    // Check window width before running dropdown positioning code
    function shouldExecute() {
        return window.innerWidth > 1280;
    }

    function calculateDropdownPositions() {
        if (!shouldExecute()) return;

        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        
        dropdownMenus.forEach(menu => {
            const parentLi = menu.closest('li');
            const parentLink = parentLi.querySelector('a'); 
            const pcMenu = parentLi.closest('.pc-menu');
            
            const pcMenuLeft = pcMenu.getBoundingClientRect().left;
            
            const linkRect = parentLink.getBoundingClientRect();
            const linkLeft = linkRect.left;
            const linkWidth = linkRect.width;
            
            const linkCenter = linkLeft + (linkWidth / 2);
            
            const leftValue = linkCenter - pcMenuLeft;
            
            menu.style.setProperty('--left', `${leftValue}px`);
        });
    }
 
    // Only run initial calculation if window width > 1280px
    if (shouldExecute()) {
        calculateDropdownPositions();
    }
 
    // Check window width before running on resize
    window.addEventListener('resize', calculateDropdownPositions);
});

document.addEventListener('DOMContentLoaded', function() {
    function slideUp(element, duration = 300) {
        if (window.innerWidth > 1280) return; // Don't run if window width > 1280px

        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.offsetHeight; // force repaint
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        
        setTimeout(() => {
            element.style.display = 'none';
            element.style.removeProperty('height');
            element.style.removeProperty('padding-top');
            element.style.removeProperty('padding-bottom');
            element.style.removeProperty('margin-top');
            element.style.removeProperty('margin-bottom');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }
 
    function slideDown(element, duration = 300) {
        if (window.innerWidth > 1280) return; // Don't run if window width > 1280px

        element.style.removeProperty('display');
        let display = window.getComputedStyle(element).display;
        if (display === 'none') display = 'block';
        element.style.display = display;
        
        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight; // force repaint
        
        element.style.transitionProperty = 'height, margin, padding';
        element.style.transitionDuration = duration + 'ms';
        element.style.height = height + 'px';
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        
        setTimeout(() => {
            element.style.removeProperty('height');
            element.style.removeProperty('overflow');
            element.style.removeProperty('transition-duration');
            element.style.removeProperty('transition-property');
        }, duration);
    }
 
    const toggleButtons = document.querySelectorAll('.toggle-mobile-submenu');
    
    // Only add event listeners if window width <= 1280px
    if (window.innerWidth <= 1280) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const parentLi = this.closest('li');
                const dropdownMenu = parentLi.querySelector('.dropdown-menu');
                
                this.classList.toggle('is-active');
                
                if (dropdownMenu.style.display === 'none' || !dropdownMenu.style.display) {
                    slideDown(dropdownMenu);
                } else {
                    slideUp(dropdownMenu);
                }
            });
        });
    }
});