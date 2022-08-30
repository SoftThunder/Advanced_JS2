const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }


    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());

        }
    }
}
class ProductItem {
    constructor(product, img = 'https://sun9-47.userapi.com/impf/c850020/v850020353/f2696/IJEXbuiIKtg.jpg?size=453x0&quality=95&sign=bb1352f3aa1e1d1c0cb4f85d907d4ad8') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;

    }
    render() {
        return `<div class="product-item" data-id = "${this.id}">
       <div ><img class="img-product" ${this.img} alt=""> </div>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
}

let list = new ProductsList();

class Basket {
    constructor(container = '.cart-block') {
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }
    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }
    _clickBasket() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }
    addGood() {

    }
    deleteGood() {

    }
    ordergood() {

    }
    renderGood() {

    }
}

class BasketItem {
    render(product, img = 'https://sstmarket.com/_sh/00/8.jpg') {
        return `<div class ="cart-item" data-id= "${product.id_product}">
        
                <img class= "img-cart-item" src = "${img}">
                <div class= "product-desc">
                <p class="product-title">${product.product_name}</p>
                <p class="product-quantity"> Quantity: ${product.quantity}</p>
                <p class= "product-single-price">${product.price} each </p>
                </div>
                </div>
                <div class="right-block">
                    <p class="product-price">${product.quantity * product.price}</p>
                    <button class= "del-btn" data-id = "${product.id_product}">X</button>
                    </div>
                    </div>`
    }
}

new Basket();
