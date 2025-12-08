document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    // Переключение видимости мобильного меню
    menuBtn.addEventListener('click', function() {
        // Простой пример: добавление/удаление класса для изменения стилей
        navbar.classList.toggle('active'); 
        
        // В CSS вам нужно добавить стили для .navbar.active
        /* Пример CSS для мобильного меню (добавить в style.css):
        @media (max-width: 992px) {
            .navbar {
                display: none;
                position: absolute;
                top: 70px; 
                left: 0;
                width: 100%;
                background-color: var(--card-dark-bg);
                padding: 20px 0;
                flex-direction: column;
                z-index: 999;
            }
            .navbar.active {
                display: flex;
            }
            .navbar a {
                margin: 10px 0;
                text-align: center;
            }
        }
        */
    });

    // Функция для плавного скролла к секции услуг
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    const servicesSection = document.querySelector('.services-section');

    scrollArrow.addEventListener('click', function() {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});