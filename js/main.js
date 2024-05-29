// Recebe dois parâmetros, a lista de botões e o nome das páginas
const redirectPage = (list, pages) => {
  list.forEach((btn, index) => {
    if (btn) {
      btn.addEventListener('click', () => {
        if (pages[index]) {
          window.location.hash = pages[index]; // Se a página existir, altera o hash
        }
      });
    }
  });
};

const navigate = () => {
  const navBtnElements = document.querySelectorAll('.nav-item'); // Lista de botões do Header
  const newsBtnElements = document.querySelectorAll('.new-btn'); // Lista de botões do News
  const pagesHeader = ['main', 'page1', 'page2']; // Lista de páginas do Header (exemplo)
  const pagesNews = ['photo', 'news1', 'news2']; // Lista de páginas do News (exemplo)

  if (navBtnElements.length > 0) {
    redirectPage(navBtnElements, pagesHeader);
  }

  if (newsBtnElements.length > 0) {
    redirectPage(newsBtnElements, pagesNews);
  }
};

// Inicializa a aplicação carregando a página inicial
renderPage('main').then(() => {
  navigate();
});

// Toda vez que o hash mudar, ele chama a função novamente
window.addEventListener('hashchange', async () => {
  const page = window.location.hash.substring(1);
  if (page) {
    await renderPage(page);
    navigate(); // Re-inicializa os botões após renderizar a nova página

    // Verifica se a página é "photo" e chama renderPhotos
    if (page === 'photo') {
      renderPhotos();
    }
  }
});
