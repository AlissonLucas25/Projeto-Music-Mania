// Função para criar o card da foto, recebe o objeto da musica por parâmetro
const createCard = ({ name, description, img }) => {
  const divElement = document.createElement('div');
  const imgElement = document.createElement('img');
  const h1Element = document.createElement('h1');
  const pElement = document.createElement('p');

  divElement.classList.add('card');
  imgElement.src = img;
  imgElement.classList.add('photo');
  h1Element.innerText = name;
  h1Element.classList.add('title');
  pElement.innerText = description;
  pElement.classList.add('text-content');

  divElement.appendChild(imgElement);
  divElement.appendChild(h1Element);
  divElement.appendChild(pElement);
  return divElement;
};

const renderPhotos = () => {
  const cardContainerElement = document.querySelector('.card-container');
  const musicList = [
    {
      name: 'The Doors',
      description: 'Banda da década de 70',
      img: 'https://i.pinimg.com/originals/70/e8/87/70e887d33441142b44719053603925f5.jpg',
    },
    {
      name: 'Queen',
      description: 'Banda da década de 80',
      img: 'https://images3.alphacoders.com/805/805820.jpg',
    },
    {
      name: 'Red Hot Chili Peppers',
      description: 'Banda da década de 90',
      img: 'https://images7.alphacoders.com/633/633647.jpg',
    },
    {
      name: 'Coldplay',
      description: 'Banda anos 2000',
      img: 'https://wallpapers.com/images/featured/coldplay-ldljmsho01pgdics.jpg',
    },
  ];

  if (cardContainerElement) {
    musicList.forEach((music) => {
      const cardElement = createCard(music);
      cardContainerElement.appendChild(cardElement);
    });
  }
};
