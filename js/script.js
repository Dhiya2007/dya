
/*==================== scroll reveal ====================*/

ScrollReveal({
  reset: false,
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





 document.getElementById('reviewForm').addEventListener('submit', function(event) {

    // السماح بالإرسال الافتراضي للنموذج
    setTimeout(() => {
      event.target.reset(); // مسح البيانات بعد التأخير
    }, 3000); // تأخير 5 ثوانٍ

    // لا نحتاج إلى منع الإرسال، النموذج سيُرسل كالمعتاد
  });
    document.querySelectorAll('.stars-container .star').forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            document.getElementById('stars').value = value;
            updateStars(value);
        });
        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');
            updateStars(value);
        });
        star.addEventListener('mouseout', function() {
            const value = document.getElementById('stars').value;
            updateStars(value);
        });
    });

    function updateStars(value) {
        document.querySelectorAll('.stars-container .star').forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= value) {
                star.classList.add('checked');
            } else {
                star.classList.remove('checked');
            }
        });
    }
    
    

  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    // تعبير منتظم للتحقق من صحة عنوان البريد الإلكتروني لنطاق @gmail.com
    const gmailPattern = /^[^\s@]+@gmail\.com$/;

    if (!gmailPattern.test(emailValue)) {
     alert('  تستخدم بريد مزيف  - _ -  ؟                                                               استخدم بريد حقيقي ليتم ارسال الرسالة');
      emailInput.focus(); // وضع التركيز على حقل البريد الإلكتروني
      event.preventDefault(); // منع إرسال النموذج
    }
  });
    document.addEventListener('DOMContentLoaded', function() {
        var icon = document.querySelector('.profile-preview-btn');
        var selectItems = document.querySelector('.select-items');
        var selectedImage = document.getElementById('profile-picture-preview');

        icon.addEventListener('click', function() {
            selectItems.classList.toggle('select-hide');
            selectItems.style.display = selectItems.style.display === 'none' || !selectItems.style.display ? 'grid' : 'none';
        });

        document.querySelectorAll('.select-items div').forEach(function(item) {
            item.addEventListener('click', function() {
                var imgSrc = item.getAttribute('data-img');
                selectedImage.src = imgSrc; // Update the selected image
                selectItems.style.display = 'none'; // Hide the list after selection
            });
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.profile-preview-btn') && !event.target.closest('.select-items')) {
                selectItems.style.display = 'none'; // Hide the list if clicking outside
            }
        });
    });
    
    function setImageValue(value) {
        document.getElementById('img-value').value = value;
    }
