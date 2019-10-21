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
  let ul = document.createElement('ul');
  let li;

  for (let key in object) {
    li = document.createElement('li');
    li.textContent = key;
    if (typeof object[key] === 'object' && object[key] !== null) {
      li.append(takeHtmlData(object[key]))
    }
    ul.append(li);
  }
  
  return ul;
}

container.append(takeHtmlData(data));


