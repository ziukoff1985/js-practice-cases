/**
 * timedDismissNotification
 * - Автоматично показує сповіщення з можливістю самостійного закриття.
 * - Додає/видаляє клас is-visible для контролю видимості.
 * - Ховає сповіщення через заданий час.
 * - Ховає сповіщення при кліці та очищує таймер.
 */

// Огляд функцій:
//  - showNotification(): Показує сповіщення і встановлює таймер для автоматичного приховування.
//  - onNotificationClick(): Ховає сповіщення при кліці та очищає таймер.
//  - hideNotification(): Прибирає клас is-visible, роблячи сповіщення невидимим.

const NOTIFICATION_DELAY = 50000;
const notification = document.querySelector('.js-alert');
let timerId = null;

notification.addEventListener('click', onNotificationClick);

showNotification();

function showNotification() {
  notification.classList.add('is-visible');

  timerId = setTimeout(() => {
    console.log('hide');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function onNotificationClick() {
  hideNotification();
  clearTimeout(timerId);
}

function hideNotification() {
  notification.classList.remove('is-visible');
}
