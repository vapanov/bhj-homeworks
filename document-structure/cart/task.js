'use strict';

const productsList = Array.from(document.querySelectorAll('div.product'));
const cartProducts = document.querySelector('div.cart__products');

productsList.forEach((product) => {
   let productId = product.dataset.id;
   let productImg = product.querySelector('img.product__image').src;

   // управление количеством
   Array.from(product.querySelectorAll('div.product__quantity-control')).forEach((qControl) => {
      qControl.addEventListener('click', (evt) => {
         evt.preventDefault();
         if (evt.target.classList.contains('product__quantity-control_inc')) {
            product.querySelector('div.product__quantity-value').textContent++;
         } else if (evt.target.classList.contains('product__quantity-control_dec') && Number.parseInt(product.querySelector('div.product__quantity-value').textContent) > 1) { // технически, вероятно, парсинт нужно везде вставить?
            product.querySelector('div.product__quantity-value').textContent--;
         }
      }, false);
   })

   // добавление в корзину
   product.querySelector('div.product__add').addEventListener('click', (evt) => {
      evt.preventDefault();
      let existCartProduct = Array.from(cartProducts.querySelectorAll('.cart__product')).find(item => item.dataset.id == productId);
      if (existCartProduct) {
         existCartProduct.querySelector('div.cart__product-count').textContent = Number.parseInt(existCartProduct.querySelector('div.cart__product-count').textContent) + Number.parseInt(product.querySelector('div.product__quantity-value').textContent);
      } else {
         cartProducts.append(elementCartTemplate(productId, productImg, product.querySelector('div.product__quantity-value').textContent));
      }
   }, false);

});

// шаблон карточки в корзине
function elementCartTemplate(productId, productImg, productCount) {
   let newCartProductDiv = document.createElement('div');
   newCartProductDiv.className = 'cart__product';
   newCartProductDiv.dataset.id = productId;

   let newCartProductImg = document.createElement('img');
   newCartProductImg.className = 'cart__product-image';
   newCartProductImg.src = productImg;

   newCartProductDiv.append(newCartProductImg);

   let newCartProductCountDiv = document.createElement('div');
   newCartProductCountDiv.className = 'cart__product-count';
   newCartProductCountDiv.textContent = productCount;

   newCartProductDiv.append(newCartProductCountDiv);

   return newCartProductDiv;
}