const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Hola ',
    'Klk',
    'Hello',
    'Bonjour',
]

button.addEventListener('click', (e) => createNotification());

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}