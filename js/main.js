// افکت تایپینگ
const typingEffect = () => {
    const text = "توسعه‌دهنده فول‌استک | علاقه‌مند به هوش مصنوعی";
    let index = 0;
    const element = document.querySelector(".typing-effect");
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    };
    type();
};

// تغییر تم
const setupThemeToggle = () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
};

// نمودار مهارت‌ها
const initSkillsChart = () => {
    if (!document.getElementById('skillsChart')) return;

    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'UI/UX'],
            datasets: [{
                label: 'سطح مهارت',
                data: [95, 85, 80, 75, 70, 90],
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: '#3b82f6',
                pointBackgroundColor: '#3b82f6',
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: { color: '#64748b' },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: { font: { size: 14 } }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
};

// اعتبارسنجی فرم
const setupFormValidation = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '1px solid #f43f5e';
                isValid = false;
            } else {
                input.style.border = '1px solid #3b82f6';
            }
        });

        if (isValid) {
            alert('پیام شما با موفقیت ارسال شد!');
            form.reset();
        }
    });
};

// پارالکس و انیمیشن‌ها
const initAnimations = () => {
    // پارالکس هدر
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.querySelector('header').style.backgroundPositionY = `-${scrollY * 0.5}px`;
    });

    // انیمیشن‌های GSAP
    gsap.from(".section", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section",
            start: "top 80%",
        }
    });
};

// بارگذاری ذرات
const initParticles = () => {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS.load('particles-js', './assets/particles.json', () => {
            console.log("ذرات بارگذاری شدند!");
        });
    }
};

// اجرای کلی
document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
    initParticles();
    setupFormValidation();
    setupThemeToggle();
    initSkillsChart();
    initAnimations();
});