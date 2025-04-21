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

// راه‌اندازی پس از بارگذاری DOM
document.addEventListener('DOMContentLoaded', () => {
    // ابتدا مطمئن شویم particles-js وجود دارد
    const particlesEl = document.getElementById('particles-js');
    if (!particlesEl) {
        console.error("Element #particles-js not found!");
        return;
    }

    // سپس کتابخانه را بررسی کنیم
    if (typeof particlesJS === 'undefined') {
        console.error("particlesJS library not loaded!");
        return;
    }

    // در نهایت ذرات را بارگذاری کنیم
    particlesJS.load('particles-js', './assets/particles.json', function() {
        console.log("ذرات با موفقیت بارگذاری شدند!");
    });

    // اجرای افکت تایپینگ
    typingEffect();
});