// Inicializa o WebSocket
var socket = new WebSocket('ws://localhost:8765');

// Espera por mensagens do servidor
socket.onmessage = function(event) {
  mostrarMensagem("Bot", event.data, "bot");
};

// Lida com o envio do formulário
window.onload = function() {
  var form = document.getElementById('form');
  var input = document.getElementById('input');

  form.onsubmit = function(event) {
    event.preventDefault();

    var mensagem = input.value;
    if (!mensagem) return;

    mostrarMensagem("Você", mensagem, "user");
    socket.send(mensagem);
    input.value = '';
  };
};

// Função para adicionar mensagem no chat
function mostrarMensagem(remetente, texto, classe) {
  var chat = document.getElementById('chat');
  var div = document.createElement('div');
  div.className = 'msg ' + classe;
  div.textContent = remetente + ": " + texto;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
