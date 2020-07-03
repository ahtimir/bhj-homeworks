'use strict';
const chat = document.querySelector('.chat-widget'),
    chatInput = document.getElementById('chat-widget__input'),
    chatContainer = document.querySelector('.chat-widget__messages-container'),
    messages = document.querySelector('.chat-widget__messages'),
    responses = ['Ваш номер в очереди — undefined', 'Ваше сообщение важно для нас', 
    'Спасибо за обращение, ждите звонка', '...пишет сообщение...', 'Напоминаем, что все сообщения записываются', 
    'Оцените мою работу по 5-бальной шкале', 'У вас будут еще вопросы ко мне?',
    'Мы скоро вам ответим по этому вопросу', 'Обращайтесь ещё', 'Не забудьте подписаться на нашу рассылку',
    'Ваша заявка сохранена', 'Мы перезвоним вам через ${} минут'];
   
//закрытие не предусмотрено :)
function activateChat() {
    if (!chat.classList.contains('chat-widget_active')) {
        chat.classList.add('chat-widget_active');
        getAttention();
    };
};

function getTime() {
    let messageDate = new Date();
    let hours = messageDate.getHours();
    let minutes = messageDate.getMinutes();
    
    if (hours < 10) {
        hours = '0' + hours;
    };
    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    return (hours + ':' + minutes);
};

function sendMessage(message) {
    messages.insertAdjacentHTML('beforeEnd',`
    <div class="message message_client">
        <div class="message__time">${getTime()}</div>
            <div class="message__text">${message}</div>
        </div>
    `);
};

function botMessage(message) {
    messages.insertAdjacentHTML('beforeEnd',`
    <div class="message">
        <div class="message__time">${getTime()}</div>
            <div class="message__text">${message}</div>
        </div>
    `);
};

function getAttention() {
    let remindInterval = setInterval(() => {
        botMessage('Напишите нам, мы онлайн!');
        autoScroll();
    }, 30000);

    chatInput.addEventListener('input', () => clearInterval(remindInterval));
};

function autoScroll() {
    chatContainer.scrollTop = 99999999;
};

//открытие чата 
chat.addEventListener('click', activateChat);


chatInput.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' || chatInput.value == '') {
        return;
    } else {
        sendMessage(chatInput.value);
        botMessage(responses[Math.floor(Math.random() * responses.length)]);
        getAttention();
        autoScroll();
        chatInput.value = '';
    }
});
    

