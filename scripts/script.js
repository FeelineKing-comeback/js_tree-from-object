let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const container = document.querySelector('#tree');

function takeHtmlData(object) {
  const ul = document.createElement('ul');

  for (let key in object) {
    const li = document.createElement('li');
    li.textContent = key;
    if (typeof object[key] === 'object' && object[key] !== null && Object.keys(object[key]).length > 0) {
      li.append(takeHtmlData(object[key]));
    }
    ul.append(li);
  }
  
  return ul;
}

container.append(takeHtmlData(data));


