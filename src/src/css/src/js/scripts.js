document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Получение данных формы
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Валидация и отправка данных (например, через AJAX)
        // Здесь можно добавить код для отправки данных на сервер

        // После успешной отправки перенаправляем пользователя в телеграм
        alert('Спасибо за ваше сообщение!');
        window.location.href = 'https://t.me/ru_archi';
    });
});
