
// JavaScript Vanilla para funcionalidades simples do site estático
document.addEventListener('DOMContentLoaded', () => {
  // Atualiza o ano no rodapé automaticamente
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  // Adiciona um efeito de clique suave em todos os links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
        console.log('Link clicado:', link.textContent.trim());
      }
    });
  });

  console.log('Site estático carregado com sucesso.');
});
