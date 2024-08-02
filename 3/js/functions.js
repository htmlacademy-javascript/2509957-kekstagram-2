// Проверка длины строки

function checkStrLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStrLength('проверяемая строка', 20);
checkStrLength('проверяемая строка', 18);
checkStrLength('проверяемая строка', 10);

// Проверка палиндрома

function isPalindrome(str) {
  let reverseStr = '';
  const normalizeStr = str.replaceAll(' ', '').toLowerCase();
  for (let i = normalizeStr.length - 1; 0 <= i; --i) {
    reverseStr += normalizeStr[i];
  }
  return normalizeStr === reverseStr.toLowerCase();
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');


// Дополнительное задание

function getNumber(str) {
  str = str.toString();
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      res += str[i];
    }
  }
  return parseInt(res, 10);
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');

getNumber(2023);
getNumber(-1);
getNumber(1.5);
