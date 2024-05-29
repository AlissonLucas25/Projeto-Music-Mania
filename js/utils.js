const divElement = document.querySelector('.content');
const loadingElement = document.querySelector('.loading-message');

// Função para renderizar o conteúdo da página
const renderPage = async (page) => {
  try {
    loadingElement.style.display = 'block';
    const response = await fetch(`/pages/${page}.html`); // Recupera as informações da página HTML
    if (!response.ok) {
      throw new Error('Erro na rede');
    }
    const data = await response.text(); // Aguarda o retorno do fetch
    divElement.innerHTML = data; // Insere o conteúdo carregado do data na div
    window.location.hash = page;
  } catch (error) {
    console.error('Erro ao carregar o HTML:', error);
  } finally {
    loadingElement.style.display = 'none'; // Remove o loading
  }
};
