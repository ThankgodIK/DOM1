console.log("Hello World");
const MY_CART = document.getElementById("cart__container");

const CART__TOTAL = document.getElementById("cart__total");
console.log(CART__TOTAL);

const CHECKOUT__BTN = document.getElementById("checkout__btn");

let PRODUCT = [
  {
    productId: 1234,
    productImage:
      "https://th.bing.com/th/id/R.f12f34b272b44afd9754679cdce9b78a?rik=y8QyPWb2iOJ9ow&pid=ImgRaw&r=0",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 20000,
  },

  {
    productId: 1235,
    productImage:
      "https://th.bing.com/th/id/R.f12f34b272b44afd9754679cdce9b78a?rik=y8QyPWb2iOJ9ow&pid=ImgRaw&r=0",
    productTitle: "Rolex watch",
    productQuantity: 1,
    productPrice: 50000,
  },

  {
    productId: 1236,
    productImage:
      "https://th.bing.com/th/id/R.f12f34b272b44afd9754679cdce9b78a?rik=y8QyPWb2iOJ9ow&pid=ImgRaw&r=0",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 20000,
  },
];

const DISPLAYCARPRODUCT = (productToDisplay) => {
  let result = [];
  console.log(productToDisplay);
  for (let i = 0; i < productToDisplay.length; i++) {
    result.push(`<div class="flex gap-6 border p-2 rounded-md shadow-md">
        <img
          src=${productToDisplay[i].productImage}
          alt=""
          class="w-[100px]"
        />
        <div>
          <h3 class="font-bold">${productToDisplay[i].productTitle}</h3>
          <p class="text-grey-400">${productToDisplay[i].productPrice}</p>
          <button 
          onclick="deleteItemFromCart(${productToDisplay[i].productId})"
          class="bg-red-600 text-white text-xs p-1 rounded-md">
            Delete item
          </button>
        </div>

        <div class="flex gap-2 items-center">
          <button 
          onclick="increaseQuantity(${productToDisplay[i].productId})"
            class="font-semibold text-white bg-green-500 p-[0.2] rounded-md"
          >
            +
          </button>
          <p>${productToDisplay[i].productQuantity}</p>
          <button
          onclick="decreaseQuantity(${productToDisplay[i].productId})"
            class="font-semibold text-white bg-red-500 p-[0.2] rounded-md"
          >
            -
          </button>
        </div>
      </div>`);
  }

  MY_CART.innerHTML = result.join("");
};

window.addEventListener("DOMContentLoaded", () => {
  DISPLAYCARPRODUCT(PRODUCT);
  calculateCartTotal(PRODUCT);
});
//increase function
function increaseQuantity(productId) {
  PRODUCT.forEach((item) => {
    if (item.productId === productId) {
      item.productQuantity = item.productQuantity + 1;
    }
  });

  DISPLAYCARPRODUCT(PRODUCT);
  calculateCartTotal(PRODUCT);
}

//decrease function
function decreaseQuantity(productId) {
  PRODUCT.forEach((item) => {
    if (item.productId === productId && item.productQuantity >= 2) {
      item.productQuantity = item.productQuantity - 1;
    }
  });

  DISPLAYCARPRODUCT(PRODUCT);
  calculateCartTotal(PRODUCT);
}

//fuction to calculate
function calculateCartTotal(productToCalculate) {
  let total = 0;
  productToCalculate.forEach((item) => {
    total = total + item.productQuantity * item.productPrice;
  });
  CART__TOTAL.textContent = total;
}

//delete item from cart
function deleteItemFromCart(productId) {
  let result = [];
  for (let i = 0; i < PRODUCT.length; i++) {
    if (PRODUCT[i].productId !== productId) {
      result.push(PRODUCT[i]);
    }
  }
  PRODUCT = result;
  DISPLAYCARPRODUCT(PRODUCT);
  calculateCartTotal(PRODUCT);
}

function processOrder() {
  console.log(PRODUCT);
  alert("Your order has been processed successfully");
}

CHECKOUT__BTN.addEventListener("click", processOrder);
