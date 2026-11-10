/**
 * Clínica Horizonte Odontologia — Projeto Demonstrativo da Prisma
 * Interatividade estritamente demonstrativa dos botões de solicitação de atendimento.
 */

document.addEventListener('DOMContentLoaded', () => {
  const DEMO_MESSAGE = 'Esta é uma demonstração. Nenhuma solicitação de atendimento foi enviada.';

  // Seleciona todos os botões de ação demonstrativa do site
  const actionButtons = document.querySelectorAll('#btn-hero, #btn-contato, #btn-final');

  actionButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Localiza o contêiner imediato do botão para posicionar a mensagem
      const container = button.closest('.action-group') || button.parentElement;

      // Verifica se o elemento de alerta já existe no contêiner para não duplicar
      let feedbackEl = container.querySelector('.demo-feedback');

      if (!feedbackEl) {
        // Cria o elemento com atributos para leitores de tela
        feedbackEl = document.createElement('p');
        feedbackEl.className = 'demo-feedback';
        feedbackEl.setAttribute('role', 'alert');
        feedbackEl.setAttribute('aria-live', 'polite');
        feedbackEl.textContent = DEMO_MESSAGE;

        // Insere imediatamente abaixo do botão acionado
        button.insertAdjacentElement('afterend', feedbackEl);

        // Dispara a transição suave de opacidade e deslocamento
        requestAnimationFrame(() => {
          feedbackEl.classList.add('visible');
        });
      } else {
        // Se já existir, garante o texto e a visibilidade ativa sem duplicar
        feedbackEl.textContent = DEMO_MESSAGE;
        feedbackEl.classList.add('visible');
      }
    });
  });
});

