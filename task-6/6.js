let catalog = {
    blue: {
        color: '#2175f5',
        img: 'https://i.postimg.cc/GhcRnN1V/blue.png',
        price: '300$',
        background: 'linear-gradient(45deg, #0136af, #22abfa)'
    },
    red: {
        color: '#f84848',
        img: 'https://i.postimg.cc/k43r1Ycj/red.png',
        price: '570$',
        background: 'linear-gradient(45deg, #d62926, #ee625f)'
    },
    green: {
        color: '#29b864',
        img: 'https://i.postimg.cc/BnzfDn1f/green.png',
        price: '470$',
        background: 'linear-gradient(45deg, #11998e, #1ce669)'
    },
    orange: {
        color: '#ff5521',
        img: 'https://i.postimg.cc/VNbQFPjr/orange.png',
        price: '260$',
        background: 'linear-gradient(45deg, #fc4a1a, #f7b733)'
    },
    black: {
        color: '#444',
        img: 'https://i.postimg.cc/dVNwB9pX/black.png',
        price: '489$',
        background: 'linear-gradient(45deg, #111, #666)'
    }
}

let img = document.querySelector('#image');
let blue = document.querySelector('#blue');
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let orange = document.querySelector('#orange');
let black = document.querySelector('#black');
let price = document.querySelector('#outprice');
let background = document.querySelector('#rbc');
let btnList = document.querySelectorAll('.color')
blue.addEventListener('click', (event) => {
    console.log('Red clicked');
    img.src = catalog.blue.img;
    price.textContent = catalog.blue.price;
    background.style.backgroundImage = catalog.blue.background;
    clickedButton(event);
});
red.addEventListener('click', (event) => {
    console.log('Red clicked');
    img.src = catalog.red.img;
    price.textContent = catalog.red.price;
    background.style.backgroundImage = catalog.red.background
    clickedButton(event);
});

green.addEventListener('click', (event) => {
    console.log('Green clicked');
    img.src = catalog.green.img;
    price.textContent = catalog.green.price;
    background.style.backgroundImage = catalog.green.background
    clickedButton(event);
});

orange.addEventListener('click', (event) => {
    console.log('Orange clicked');
    img.src = catalog.orange.img;
    price.textContent = catalog.orange.price;
    background.style.backgroundImage = catalog.orange.background
    clickedButton(event);
});

black.addEventListener('click', (event) => {
    console.log('Black clicked');
    img.src = catalog.black.img;
    price.textContent = catalog.black.price;
    background.style.backgroundImage = catalog.black.background;
    clickedButton(event);
});

let clickedButton = (event) => {
btnList.forEach(el => el.classList.remove('active'))
event.target.classList.add('active');
}