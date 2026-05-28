// Exemplo: alerta de envio de formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado! Sua mensagem foi enviada.');
  form.reset();
});