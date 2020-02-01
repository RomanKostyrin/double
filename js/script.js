let overlay = document.querySelector(".overlay");
let top30 = document.querySelector(".popup--top"); 
let faq = document.querySelector(".popup--faq"); 
let popups = document.querySelectorAll(".popup");
let top30button = document.querySelector(".navigation__text--top"); 
let faqbutton = document.querySelector(".navigation__text--faq"); 
var closeButtons = document.querySelectorAll(".popup__close-button");
let $ellipseEmpty = document.querySelector(".ellipses");
let ellipse = document.querySelector(".ellipse");
let duringTime = 11000;
let faqList = document.querySelectorAll(".popup--faq__question");
let cardsData = [    
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 1.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 2.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 1.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 2.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 3.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 4.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 1.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 2.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 3.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 4.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 1.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 2.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 3.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 4.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 1.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 2.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 3.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 4.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 3.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 4.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 5.10,
    deg: 0
  },
  {
    imgUrl: 'img/avatar1.jpg',
    eth: '15487CE78SDW91E5AW',
    value1: 6.10,
    deg: 0
  }
];

faqList.forEach(function(element) {
  element.addEventListener("click", function(event) {
      element.nextElementSibling.classList.toggle("visually-hidden");
      element.previousElementSibling.classList.toggle("popup--faq__element-active");
  });
});


function addVisHidden(...value) {
  value.forEach(function(element) {
    element.classList.add("visually-hidden");
  })
}

function removeVisHidden(...value) {  
  value.forEach(function(element) {
    element.classList.remove("visually-hidden");
  })
}


top30button.addEventListener("click", function(event) {
    event.preventDefault();
    removeVisHidden(top30, overlay);
});
faqbutton.addEventListener("click", function(event) {
    event.preventDefault();
    removeVisHidden(faq, overlay);
});

closeButtons.forEach(function(element) {
  element.addEventListener("click", function(event) {
  event.preventDefault();
  addVisHidden(overlay);
  popups.forEach(function(element) {
    if (!element.classList.contains(".visually-hidden")) {
      addVisHidden(element);
    }
  })
});
})

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
  if (!overlay.classList.contains(".visually-hidden")) {
    addVisHidden(overlay);
  }    
  popups.forEach(function(element) {
    if (!element.classList.contains(".visually-hidden")) {
      addVisHidden(element);
    }
  })
  }
});

overlay.addEventListener("click", function(event) {
  addVisHidden(overlay);
  popups.forEach(function(element) {
    if (!element.classList.contains(".visually-hidden")) {
      addVisHidden(element);
    }
  })
});

// функция создает ДОМ элемент
let makeElement = function(teg, className, text) {
  var element = document.createElement(teg);
  element.classList.add(className);
  if (text) {
   element.textContent = text; 
  }  
  return element;
};

// функция рисует всех игроков на рулетку с удалением старых
var renderCards = function(data2) {
  var goods = document.querySelector('.advantages-circle');
  while (goods.firstChild) {
    goods.removeChild(goods.firstChild);
}
  for (var i = 0; i < data2.length; i++) {
    var elem = makeElement('li', 'advantages-circle__element');
    var image = makeElement('img', 'advantages-circle__img');
    image.classList.add('borders');
    image.src = data2[i].imgUrl;
    image.alt = data2[i].eth;   
    if (data2.length <= 15) {
		image.style.margin = 1 + "px";
	}
    cardsData[i].value1 = i;
    image.setAttribute('id', `id${i}`)
    elem = make(elem, i, data2.length);
    // console.log(elem);
    elem.appendChild(image);
    goods.appendChild(elem);
  }
};

// функция прикрепляет стили к каждому игроку что бы те отрисовывались под нужным градусом относительно круга
function make(elem, i, length) {
	let nbItems = length
	let circleSize = 365
	let itemSize = 42
	let halfItem = itemSize / 2;
	let halfParent = circleSize / 3 + 8;
	let rot = -90
	if (i > 0) {
		rot = -90 + ((360 /nbItems) * i );		
	}
	cardsData[i].deg = 1800 + 90 + rot;
 if (length > 15) {  	
 	if (length > 60) {
 			halfParent += 60/1.5;
 		}
 		else {
 			halfParent += length/1.5;
 		}
 		// console.log(rot)
  	elem.style.width = (42 - length/2) + "px" 
  	elem.style.height = (42 - length/2) + "px" 
  	elem.style.margin = -1 * (42 - length/2)/2 + "px" 
  }   
	elem.style.transform = "rotate(" + rot * 1 + "deg) translate(" + halfParent + "px) rotate(" + rot * -1 + "deg)";
	return elem;
}



//функция анимирования рулетки
function animateRoulette(option) {
document.querySelector(".ellipse").animate([
  // keyframes
  { transform: 'rotate(0deg)' }, 
  { transform: `rotate(${option}deg)` }
], { 
  // timing options
  duration: duringTime,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(0.41, 0.59, 0.59, 0.96)"
});
document.querySelector(".advantages-circle").animate([
  // keyframes
  { boxShadow: '0 0 0 0 rgba(157, 60, 242, 0.4)' }, 
  { boxShadow: `0 0 0 50px rgba(157, 60, 242, 0)` },
  { boxShadow: `0 0 0 0 rgba(157, 60, 242, 0)` }
], { 
  // timing options
  duration: 1000,
  iterations: 10
});
}
// функция возвращает рулетку на место
function backRoulette(option) {
  let degre = option - 1800;
document.querySelector(".ellipse").animate([
  // keyframes    
  { transform: `rotate(${degre}deg)` },
  { transform: 'rotate(0deg)' }
], { 
  // timing options
  duration: 2000,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(0.41, 0.59, 0.59, 0.96)"
});

}

// Функция удаляет всех игроков с рулетки
function removePlayers() {
	var goods = document.querySelector('.advantages-circle');
	  while (goods.firstChild) {
    goods.removeChild(goods.firstChild);
	}
}
// Добавление нового игрока в пул
function addPlayer(url, eth, value, deg) {
	let user = {
		imgUrl: `img/${url}.jpg`,
    eth: eth,
    value1: value,
    deg: deg
	}
cardsData.push(user);
renderCards(cardsData);
}

// функция передает последнего победителя в списк победителей
function addRightPart(lastWinner) {
	var goods = document.querySelector('.winners');
  var elem = makeElement('li', 'winners__item');
  var image = makeElement('img', 'winners__img');    
  var div = makeElement('div', 'winners__description');
  var name = makeElement('p', 'winners__text', lastWinner.eth);
  var value = makeElement('p', 'winners__value', 'Сумма: ');
  var span = makeElement('span', 'total-win', `${lastWinner.value1} ETH`);
  image.classList.add('borders');
  image.src = lastWinner.imgUrl;
  image.alt = 'player';   
  image.width = 42; 
  image.height = 42; 
  elem.appendChild(image);
  elem.appendChild(div);
  div.appendChild(name);
	value.appendChild(span);
  div.appendChild(value);
  goods.appendChild(elem);
};

// Функция передает победителя вниз во вкладку - последний победитель
function winner(winer) {
	var goods = document.querySelector('.container-winner');
	  while (goods.firstChild) {
    goods.removeChild(goods.firstChild);	
  }	
  var elem = makeElement('div', 'last-winner'); 
  var image = makeElement('img', 'last-winner__img');  
  var div1 = makeElement('div', 'last-winner__description');
  var eth = makeElement('p', 'last-winner__text', winer.eth);  
  var last = makeElement('p', 'last-winner__text', 'Последний победитель');
	var div2 = makeElement('div', 'last-winner__total'); 
	var value = makeElement('p', 'last-winner__value');
  var span = makeElement('span', 'total-win', `${winer.value1} ETH`);
  var name = makeElement('p', 'last-winner__text', 'Выигрыш');
  name.classList.add('last-winner__text--color');
  last.classList.add('last-winner__text--bold');
  image.classList.add('borders--active');
  image.src = winer.imgUrl;
  image.alt = 'player';   
  image.width = 50; 
  image.height = 50; 
  elem.appendChild(image);
  div1.appendChild(eth);
  div1.appendChild(last);
	elem.appendChild(div1);
	value.appendChild(span);
	div2.appendChild(value);
	div2.appendChild(name);
	elem.appendChild(div1);
	elem.appendChild(div2);
  goods.appendChild(elem);
  //выкидываем предпобедителя в список победителей
  addRightPart(winer);
};

//запуск рулетки с победителем и предпоследним победителем
function firstStep(winer) {
  animateRoulette(winer.deg);
  setTimeout(()=> {
    winner(winer)
    document.getElementById(`id${winer.value1}`).classList.add('active-win');
    setTimeout(()=> {
      document.getElementById(`id${winer.value1}`).classList.remove('active-win');
      backRoulette(winer.deg);
    }, 3000)
  }, duringTime)
}

renderCards(cardsData);
firstStep(cardsData[15]);

