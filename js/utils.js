// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random.

const getRandomInt = (minValue, maxValue) => {
  if (
    typeof minValue !== 'number' ||
    typeof maxValue !== 'number' ||
    minValue < 0 ||
    minValue > maxValue ||
    minValue === maxValue
  ) {
    return NaN;
  }

  const minInt = Math.ceil(minValue);
  const maxInt = Math.floor(maxValue);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
getRandomInt(1, 20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник: https://learn.javascript.ru/number.
const getRandomFloat = (minValue, maxValue, decimalPlaces) => {
  if (
    typeof minValue !== 'number' ||
    typeof maxValue !== 'number' ||
    typeof decimalPlaces !== 'number' ||
    minValue < 0 ||
    minValue > maxValue ||
    minValue === maxValue
  ) {
    return NaN;
  }

  const randomNumber = Math.random() * (maxValue - minValue + 1) + minValue;

  return Number(randomNumber.toFixed(decimalPlaces));
};

// функция, которая помогает вернуть рандомный элемент массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInt(0, elements.length - 1)];

// функция, коорая возвращает индекс для аватара
const getAvatar = (lower = 1, upper = 10) => {
  const zeroLength = 2;
  const randomIndex = getRandomInt(lower, upper);

  return randomIndex < 10 ? `img/avatars/user${String(randomIndex).padStart(zeroLength, 0)}.png` : 'img/avatars/user/10.png';
};

// функция, которая помогает вернуть массив строк features — массив случайной длины из заданных значений
const getFeatures = ([...arrayName], maxLength) =>
  Array.from(
    { length: Math.min(arrayName.length, (1 + Math.random() * maxLength) | 0) },
    () => arrayName.splice((Math.random() * arrayName.length) | 0, 1)[0]
  );

// функция, которая помогает вернуть массив случайной длины photos из заданных значений
const getRandomPhotos = (elements) => {
  let currentIndex = elements.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [elements[currentIndex], elements[randomIndex]] = [
      elements[randomIndex],
      elements[currentIndex],
    ];
  }
  return elements.slice(getRandomInt(0, elements.length));
};

export {getRandomInt, getRandomFloat, getRandomArrayElement, getAvatar, getFeatures, getRandomPhotos};
