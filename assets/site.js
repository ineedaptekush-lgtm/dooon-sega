const form = document.querySelector('#lead-form');
const car = document.querySelector('#car');
const service = document.querySelector('#service');
const message = document.querySelector('#message');
const whatsappMessage = document.querySelector('#whatsapp-message');

function updateMessage() {
  const lines = [
    'Здравствуйте! Хочу обсудить работы в СТО «Дон Сега».',
    `Автомобиль — ${car.value.trim()}`,
    `Вид работ — ${service.value}`,
  ];

  if (message.value.trim()) {
    lines.push(`Детали — ${message.value.trim()}`);
  }

  whatsappMessage.value = lines.join('\n');
}

for (const field of [car, service]) {
  const error = document.querySelector(`#${field.id}-error`);

  field.addEventListener('invalid', () => {
    field.setAttribute('aria-invalid', 'true');
    error.textContent = field === car ? 'Укажите марку и модель автомобиля.' : 'Выберите вид работ.';
  });

  field.addEventListener('input', () => {
    field.removeAttribute('aria-invalid');
    error.textContent = '';
  });
}

for (const link of document.querySelectorAll('[data-service]')) {
  link.addEventListener('click', () => {
    service.value = link.dataset.service;
    service.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

form.addEventListener('input', updateMessage);
form.addEventListener('submit', updateMessage);
updateMessage();
