import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
  'Апдейты в ленту для вас, друзья!',
  'Смотрите, какой кадр',
  'Зацените, что попало на фото',
  'Жду ваших реакций',
  'Я правда не знаю, что интересного выложить, поэтому будет это',
  'Здесь могла бы быть умная цитата...'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Святослав',
  'Игорь',
  'Кристина',
  'Анатолий',
  'Элла',
  'Мария',
  'Вика',
  'Ольга',
  'Света',
  'Женя',
  'Саша',
  'Ирина',
  'Лёня',
  'Софа'
];

const createComments = () => {
  const idComments = createRandomIdFromRangeGenerator(1, 1000);
  const resultComments = [];

  for (let i = 0; i <= getRandomInteger(0, 30); i++) {
    const comment = {
      id: idComments(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    };
    resultComments.push(comment);
  }
  return resultComments;
};

const randomIdIndex = createRandomIdFromRangeGenerator(1, 25);
const randomUrlIndex = createRandomIdFromRangeGenerator(1, 25);

const createDescriptionPhoto = () => ({
  id: randomIdIndex(),
  url: `photos/${randomUrlIndex()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const createDescriptionsPhotos = () => Array.from({length: 25}, createDescriptionPhoto);

export {createDescriptionsPhotos};
