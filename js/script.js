/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');
  
  if(top >= offset && top < offset + height){
    navLinks.forEach(links => { 
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
  };
});
    /*==================== sticky navbar ====================*/
    let header = document.querySelector ('header');
    header.classList.toggle('sticky', window.scrollY > 100);
        /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};






/*==================== scroll reveal ====================*/

ScrollReveal({
  reset: true,
  distance: '80px',
  duration:2000,
  delay:200
  });
  
  ScrollReveal().reveal('.home-content, .heading, .cards', { origin: 'top' });
  
  ScrollReveal().reveal('.home-img, services-container,.btt, portfolio-box, contact form, .card-item, .about-content p', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img, .cards, .Services-box', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'bottom' });
  ScrollReveal().reveal('.about-content, .heading-ms', { origin: 'top' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
  strings: ['a Programmer', 'an Editor','an artist', 'a Designer'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});






document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('start-animation');
        observer.unobserve(entry.target); // لإيقاف المراقبة بعد بدء الأنميشن
      }
    });
  }, { threshold: 0.1 });

  let elements = document.querySelectorAll('.skill-per');
  elements.forEach(element => {
    observer.observe(element);
  });
});



      const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

      // Cards
        let card1 = document.getElementById("card1"),
            card2 = document.getElementById("card2"),
            card3 = document.getElementById("card3"),
            card4 = document.getElementById("card4"),
            card5 = document.getElementById("card5"),
            card_length = document.querySelectorAll(".card--card");

        // container
        let container = document.getElementById("container");

        // Card List
        let card_list = [card1, card2, card3, card4, card5];

        // next function
        let counter = 1;
        function next() {
            console.log("next:" + counter)
            if (counter < card_length.length) {
                card_list[counter].classList.add("active");
                backgroundFunc(counter);
                counter += 1;
            }
            else {
                counter = card_length.length;
            }
        }

        function prev() {
            if (counter > 1) {
                card_list[counter - 1].classList.remove("active");
                counter -= 1;
            }
            else {
                counter = 1;
            }
            backgroundFunc(counter-1);
            console.log("prev:" + counter)
        }
        
        // background function
        function backgroundFunc(x) {
            if (x == 0) {
                container.style.background = "";
            }
            else if (x == 1) {
                container.style.background = "";
            }
            else if (x == 2) {
                container.style.background = "";
            }
            else if (x == 3) {
                container.style.background = ""
            }
        }

  