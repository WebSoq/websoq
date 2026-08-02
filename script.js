/* ==========================================================
   СКРИПТЫ САЙТА: Переключение вкладок, меню и анимации
   Разработано профессиональной командой (2026)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. Интерактив мобильного меню (бургер) */
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    if (burger) {
        burger.addEventListener('click', () => {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = '#161920';
                nav.style.padding = '20px';
                nav.style.borderBottom = '1px solid #262c36';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 968) {
                    nav.style.display = 'none';
                }
            });
        });
    }

    /* 2. Четкое переключение вкладок (Сайты / Бот) */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активные классы у кнопок
            tabBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс нажатой
            btn.classList.add('active');

            // Получаем цель вкладки
            const targetId = 'tab-' + btn.getAttribute('data-tab');

            // Скрываем все вкладки с плавной анимацией
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Показываем нужную вкладку
            const activeContent = document.getElementById(targetId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    /* 3. Интерактив для FAQ (аккордеон) */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    /* 4. Плавная анимация появления карточек при скролле */
    const cards = document.querySelectorAll('.about-card, .adv-item, .service-category, .faq-item');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });

    /* 5. Приветствие в консоли */
    console.log('%c Привет, коллега-разработчик! :3 ', 'background: #6366f1; color: #fff; padding: 5px 10px; border-radius: 4px; font-weight: bold;');
    console.log('Вкладки работают четко и раздельно. Обращайтесь за лучшими сайтами и ботами!');

});