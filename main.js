class ProductsList{
    constructor (container = '.products')
    this.container = container;
    this.goods = [];
    this.getProducts()
                .then(data => {
                    this/goods = [...data];
                    this.render()
                });
}

_getProducts() {
    return fetch ('${API}/catalogData.json')
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
}

render () {
    const block = document.querySelector(this.container);
    for (let product of this.goods){
        const productObj = new ProductItem(product);
        block.insertAdjacentHTML('beforeend', productObj.render());

}
}

class ProductItem {
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;

    }
    render (){
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
    constructor (container = '.cart-block'){
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this.getBasketItem()
            .then(data => {
                this.goods = data.contents;
                this.render();
            });
    }
    _getBasketItem() {
        return fetch (`${API}/getBasket.json`)
            .then(result => result.json())
            catch(error => {
                console.log(error);
            })
    }
    render(){
        const block = document/querySelector(this.container);
        for (let product of this.goods){
            const productObj = new getBasketItem();
            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }
    _clickBasket(){
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


getSumPrice() {
    let s = 0;
    this.goods.forEach(item => {
        s += item.price;
    });
}

