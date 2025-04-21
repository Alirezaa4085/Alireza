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

// راه‌اندازی ذرات
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
});