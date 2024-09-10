import {createDescriptionsPhotos} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureBlock = document.querySelector('.pictures');

const miniatures = createDescriptionsPhotos();

const similarMiniaturesElement = document.createDocumentFragment();

miniatures.forEach(({url, description, likes, comments}) => {
  const miniatureElement = pictureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__img').alt = description;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;
  similarMiniaturesElement.appendChild(miniatureElement);
});

pictureBlock.appendChild(similarMiniaturesElement);
