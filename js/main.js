// Inicializa a aplicação carregando a página inicial
renderPage('main');

// Toda vez que o hash mudar, ele chama a função novamente
window.addEventListener('hashchange', async () => {
  const page = window.location.hash.substring(1);
  if (page) {
    await renderPage(page);

    // Verifica se a página é "photo" e chama renderPhotos
    if (page === 'photo') {
      renderPhotos();
    }
  }
});
