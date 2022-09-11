'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];


const renderGoodsList = (list) => {
    let goodsList = list.map((item) => {
        return `<div class="goods-item"><h3>${item.title}</h3><p>${item.price}</p></div>`
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
