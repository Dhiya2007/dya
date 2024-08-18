ScrollReveal({reset:false,distance:"80px",duration:2e3,delay:200});ScrollReveal().reveal(".home-content, .heading, .cards",{origin:"top"});ScrollReveal().reveal(".home-img, services-container,.btt, portfolio-box, contact form, .card-item, .about-content p",{origin:"bottom"});ScrollReveal().reveal(".home-content h1, .about-img, .cards, .Services-box",{origin:"left"});ScrollReveal().reveal(".home-content p, .about-content",{origin:"bottom"});ScrollReveal().reveal(".about-content, .heading-ms",{origin:"top"});ScrollReveal().reveal(".navbar",{origin:"right"});const typed=new Typed(".multiple-text",{strings:["a Programmer","an Editor","an artist","a Designer"],typeSpeed:100,backSpeed:100,backDelay:1e3,loop:true});document.addEventListener("DOMContentLoaded",function(){let observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("start-animation");observer.unobserve(entry.target)}})},{threshold:.1});let elements=document.querySelectorAll(".skill-per");elements.forEach(element=>{observer.observe(element)})});const scrollers=document.querySelectorAll(".scroller");if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){addAnimation()}function addAnimation(){scrollers.forEach(scroller=>{scroller.setAttribute("data-animated",true);const scrollerInner=scroller.querySelector(".scroller__inner");const scrollerContent=Array.from(scrollerInner.children);scrollerContent.forEach(item=>{const duplicatedItem=item.cloneNode(true);duplicatedItem.setAttribute("aria-hidden",true);scrollerInner.appendChild(duplicatedItem)})})}document.getElementById("reviewForm").addEventListener("submit",function(event){setTimeout(()=>{event.target.reset()},3e3)});document.querySelectorAll(".stars-container .star").forEach(star=>{star.addEventListener("click",function(){const value=this.getAttribute("data-value");document.getElementById("stars").value=value;updateStars(value)});star.addEventListener("mouseover",function(){const value=this.getAttribute("data-value");updateStars(value)});star.addEventListener("mouseout",function(){const value=document.getElementById("stars").value;updateStars(value)})});function updateStars(value){document.querySelectorAll(".stars-container .star").forEach(star=>{if(parseInt(star.getAttribute("data-value"))<=value){star.classList.add("checked")}else{star.classList.remove("checked")}})}document.getElementById("reviewForm").addEventListener("submit",function(event){const emailInput=document.getElementById("email");const emailValue=emailInput.value;const gmailPattern=/^[^\s@]+@gmail\.com$/;if(!gmailPattern.test(emailValue)){alert("  تستخدم بريد مزيف  - _ -  ؟                                                               استخدم بريد حقيقي ليتم ارسال الرسالة");emailInput.focus();event.preventDefault()}});document.addEventListener("DOMContentLoaded",function(){var icon=document.querySelector(".profile-preview-btn");var selectItems=document.querySelector(".select-items");var selectedImage=document.getElementById("profile-picture-preview");icon.addEventListener("click",function(){selectItems.classList.toggle("select-hide");selectItems.style.display=selectItems.style.display==="none"||!selectItems.style.display?"grid":"none"});document.querySelectorAll(".select-items div").forEach(function(item){item.addEventListener("click",function(){var imgSrc=item.getAttribute("data-img");selectedImage.src=imgSrc;selectItems.style.display="none"})});document.addEventListener("click",function(event){if(!event.target.closest(".profile-preview-btn")&&!event.target.closest(".select-items")){selectItems.style.display="none"}})});function setImageValue(value){document.getElementById("img-value").value=value}const sidebar=document.getElementById("sidebar");const toggleButton=document.getElementById("navbar-toggle");const closeButton=document.getElementById("closebtn");function toggleSidebar(){if(sidebar.classList.contains("open")){sidebar.classList.remove("open");sidebar.classList.add("close");toggleButton.classList.remove("open")}else{sidebar.classList.remove("close");sidebar.classList.add("open");toggleButton.classList.add("open")}}toggleButton.addEventListener("click",toggleSidebar);closeButton.addEventListener("click",toggleSidebar);document.addEventListener("click",function(event){if(sidebar.classList.contains("open")&&!toggleButton.contains(event.target)&&!sidebar.contains(event.target)){sidebar.classList.remove("open");sidebar.classList.add("close");toggleButton.classList.remove("open")}});const sidebarLinks=sidebar.querySelectorAll("a");sidebarLinks.forEach(link=>{link.addEventListener("click",function(){if(sidebar.classList.contains("open")){sidebar.classList.remove("open");sidebar.classList.add("close");toggleButton.classList.remove("open")}})});
document.addEventListener("DOMContentLoaded", function() {
            const dateElements = document.querySelectorAll('.date');

            dateElements.forEach(element => {
                const dateStr = element.getAttribute('data-date');
                const commentDate = new Date(dateStr);
                const currentDate = new Date();
                const timeDiff = currentDate - commentDate;
                const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const weeksDiff = Math.floor(daysDiff / 7);
                const monthsDiff = Math.floor(daysDiff / 30);
                
                let displayText = '';

                if (daysDiff < 1) {
                    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
                    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
                    if (hoursDiff < 1) {
                        displayText = `قبل ${minutesDiff} دقيقة${minutesDiff === 1 ? '' : ''}`;
                    } else {
                        displayText = `قبل ${hoursDiff} ساعة${hoursDiff === 1 ? '' : ''}`;
                    }
                } else if (daysDiff <= 2) {
                    displayText = `قبل ${daysDiff} يوم`;
                } else if (daysDiff <= 6) {
                    displayText = `قبل ${daysDiff} أيام`;
                } else if (weeksDiff <= 2) {
                    displayText = `قبل ${weeksDiff} أسبوع${weeksDiff === 1 ? '' : ''}`;
                } else if (weeksDiff <= 4) {
                    displayText = `قبل ${weeksDiff} أسابيع`;
                } else if (monthsDiff <= 2) {
                    displayText = `قبل ${monthsDiff} شهر${monthsDiff === 1 ? '' : ''}`;
                } else {
                    displayText = `قبل ${monthsDiff} أشهر`;
                }
                
                element.textContent = displayText;
            });
        });
        const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const eduText = this.previousElementSibling;
        eduText.style.display = eduText.style.display === 'block' ? 'none' : 'block';

        // تغيير النص في الزر بين "Read More" و "Read Less"
        if (eduText.style.display === 'block') {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});
