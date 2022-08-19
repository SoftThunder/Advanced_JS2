const products = [
    { id: 1, title: 'Toyota', price: 2000, img: 'src = img/toyota.jpg' },
    { id: 2, title: 'Skoda', price: 2000, img: 'src = img/skoda.jpg' },
    { id: 1, title: 'Mazda', price: 2000, img: 'src = img/mazda.jpg' },
    { id: 1, title: 'Volkswagen', price: 2000, img: 'src = img/volkswagen.jpg' },
];
const renderProduct = (title, price, img) => {
    return `<div class="product-item">
       <div ><img class="img-product" ${img} alt=""> </div>
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);