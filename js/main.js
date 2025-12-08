// Плавное появление при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.remove("fade-out");
  document.body.classList.add("fade-in");
});

// Плавный переход между страницами через навигацию
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // отключаем мгновенный переход
    const href = this.getAttribute('href');
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 300); // совпадает с CSS transition
  });
});
