document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    // Переключение видимости мобильного меню
    menuBtn.addEventListener('click', function() {
        // Простой пример: добавление/удаление класса для изменения стилей
        navbar.classList.toggle('active'); 
    });

    // Функция для плавного скролла к секции услуг
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    const servicesSection = document.querySelector('.services-section');

    scrollArrow.addEventListener('click', function() {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});