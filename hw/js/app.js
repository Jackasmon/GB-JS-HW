class GoodsItem {
    constructor(title, price, img = 'https://c.dns-shop.ru/thumb/st1/fit/200/200/5d945c94ad15db88f081766b1bb0ef07/a8186711f80ed6551944e74039da1168dd51cacd426cb0b9c88855cabeac11a2.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return ` <div class="product-item">
            <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }

    sum() {
        let res = 0;
        this.goods.forEach(el => {
            res += el.price;
        })
        return res;
    }
}

class Basket {
    constructor() {

    }
    renderClick() {
        const obj = document.querySelector('.btn-cart');
        let text = ` <div class="basket__wrapper">
        <div class="basket__wrapper-title">
            Ваша корзина:
        </div>
        <div class="basket__item">
            <span class="basket__title">Mobile</span> <span class="basket__line"></span>
            <span class="basket__price">350</span>
        </div>
    </div>
        `;
        obj.addEventListener('click', el => {
            const target = document.querySelector('.basket__wrapper');
            if (target) {
                return target.remove();
            }
            obj.insertAdjacentHTML('afterend', text);
        })
    }
}



const cart = new Basket();




const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.sum());
