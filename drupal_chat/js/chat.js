(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.drupalChat = {
    attach(context) {
      once('drupal-chat', '.drupal-chat', context).forEach((chat) => {
        const endpoint = drupalSettings.drupal_chat.endpoint;
        const chatWindow = chat.querySelector('.chat-window');
        const input = chat.querySelector('.chat-question');
        const button = chat.querySelector('.chat-send');

        function appendMessage(text, sender) {
          const div = document.createElement('div');
          div.className = 'chat-message ' + sender;
          div.textContent = text;
          chatWindow.appendChild(div);
          chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        function sendMessage() {
          const question = input.value.trim();
          if (!question) {
            return;
          }
          appendMessage(question, 'user');
          input.value = '';
          fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: question, temperature: 0.2, max_tokens: 100 }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.answer) {
                appendMessage(data.answer, 'assistant');
              }
            })
            .catch((err) => {
              appendMessage(Drupal.t('Error: ') + err.message, 'error');
            });
        }

        button.addEventListener('click', sendMessage);
        input.addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
          }
        });
      });
    },
  };
})(Drupal, drupalSettings, once);
