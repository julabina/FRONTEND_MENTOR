const primaryImg = document.querySelector(".containerImgPrimary");
const previewsImages = document.querySelectorAll(
  ".imgContainer__carrousel__image"
);
const minusBtn = document.querySelector(
  ".informationContainer__addToCart__choice__minusBtn"
);
const plusBtn = document.querySelector(
  ".informationContainer__addToCart__choice__plusBtn"
);
const nbrAdd = document.getElementById("numberAdd");
const addToCartBtn = document.querySelector(
  ".informationContainer__addToCart__btn"
);
const modale = document.querySelector(".modaleZoom");
const modalePrimaryImg = document.querySelector(
  ".modaleZoom__container__imgContainer__img"
);
const modalePreviewImg = document.querySelectorAll(
  ".modaleZoom__container__carrousel__image"
);
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const modaleCloseBtn = document.querySelector(
  ".modaleZoom__container__closeContainer__closeBtn"
);
const cartBtn = document.querySelector(".cart__cartImg");
const cartContainer = document.querySelector(".cartContainer");
const cartContent = document.querySelector(
  ".cartContainer__cartContentContainer"
);

let cart = 0;
let total;
let addToCart = 0;

const displayPrimary = () => {
  for (let i = 0; i < previewsImages.length; i++) {
    let a = i + 1;
    if (previewsImages[i].classList.contains("carrouselActive")) {
      primaryImg.innerHTML = `
        <img class="imgContainer__primaryImg" src="./images/image-product-${a}.jpg" alt="product-${a} image">
        `;
    }
  }
};

const displayModalePrimary = () => {
  for (let i = 0; i < modalePreviewImg.length; i++) {
    let a = i + 1;
    if (modalePreviewImg[i].classList.contains("modaleActive")) {
      modalePrimaryImg.innerHTML = `
            <img class="modaleZoom__container__imgContainer__primaryImg" src="./images/image-product-${a}.jpg" alt="product-${a} image">
            `;
    }
  }
};

const displayCart = () => {
  calculTotal();
  if (cart < 1) {
    cartContent.innerHTML = `
    <div class="cartContainer__emptyContainer">
            <p>Your cart is empty.</p>
          </div>
    `;
  } else {
    cartContent.innerHTML = `
    <div class="cartContainer__content">
            <img class="cartContainer__content__image" src="./images/image-product-1-thumbnail.jpg" alt="product 1 image">
            <div class="cartContainer__content__item">
              <p class="cartContainer__content__item__title">Fall Limited Edition Sneakers</p>
              <p class="cartContainer__content__item__price">$125.00 x ${cart} <span>$${total}.00</span></p>
            </div>
            <img onClick="deleteCart()" class="cartContainer__content__delete" src="./images/icon-delete.svg" alt="delete button">
          </div>
          <button class="cartContainer__checkoutBtn">Checkout</button>
    `;
  }
};

const displayAddToCart = () => {
  nbrAdd.textContent = addToCart;
};

const addActiveClass = () => {
  for (let i = 0; i < previewsImages.length; i++) {
    if (previewsImages[i].classList.contains("carrouselActive")) {
      modalePreviewImg[i].classList.add("modaleActive");
    }
  }
};

const calculTotal = () => {
  total = cart * 125;
  return total;
};

const deleteCart = () => {
  cart = 0;
  displayCart();
};

const changePreviousImg = () => {
  for (let i = 0; i < modalePreviewImg.length; i++) {
    if (modalePreviewImg[i].classList.contains("modaleActive")) {
      if (i === 0) {
        modalePreviewImg[0].classList.remove("modaleActive");
        modalePreviewImg[3].classList.add("modaleActive");
        break;
      } else {
        let a = i - 1;
        modalePreviewImg[i].classList.remove("modaleActive");
        modalePreviewImg[a].classList.add("modaleActive");
        break;
      }
    }
  }
  displayModalePrimary();
};

const changeNextImg = () => {
  for (let i = 0; i < modalePreviewImg.length; i++) {
    if (modalePreviewImg[i].classList.contains("modaleActive")) {
      if (i === 3) {
        modalePreviewImg[3].classList.remove("modaleActive");
        modalePreviewImg[0].classList.add("modaleActive");
        break;
      } else {
        let a = i + 1;
        modalePreviewImg[i].classList.remove("modaleActive");
        modalePreviewImg[a].classList.add("modaleActive");
        break;
      }
    }
  }
  displayModalePrimary();
};

const resetCarrousel = () => {
  for (let i = 0; i < previewsImages.length; i++) {
    previewsImages[i].classList.remove("carrouselActive");
  }
};

const resetModaleCarrousel = () => {
  for (let i = 0; i < modalePreviewImg.length; i++) {
    modalePreviewImg[i].classList.remove("modaleActive");
  }
};

displayPrimary();
displayCart();
displayAddToCart();

primaryImg.addEventListener("click", () => {
  modale.classList.remove("modaleInvisible");
  resetModaleCarrousel();
  addActiveClass();
  displayModalePrimary();
});

previewsImages[0].addEventListener("click", () => {
  resetCarrousel();
  previewsImages[0].classList.add("carrouselActive");
  displayPrimary();
});

previewsImages[1].addEventListener("click", () => {
  resetCarrousel();
  previewsImages[1].classList.add("carrouselActive");
  displayPrimary();
});

previewsImages[2].addEventListener("click", () => {
  resetCarrousel();
  previewsImages[2].classList.add("carrouselActive");
  displayPrimary();
});

previewsImages[3].addEventListener("click", () => {
  resetCarrousel();
  previewsImages[3].classList.add("carrouselActive");
  displayPrimary();
});

modaleCloseBtn.addEventListener("click", () => {
  modale.classList.add("modaleInvisible");
});

modalePreviewImg[0].addEventListener("click", () => {
  resetModaleCarrousel();
  modalePreviewImg[0].classList.add("modaleActive");
  displayModalePrimary();
});

modalePreviewImg[1].addEventListener("click", () => {
  resetModaleCarrousel();
  modalePreviewImg[1].classList.add("modaleActive");
  displayModalePrimary();
});

modalePreviewImg[2].addEventListener("click", () => {
  resetModaleCarrousel();
  modalePreviewImg[2].classList.add("modaleActive");
  displayModalePrimary();
});

modalePreviewImg[3].addEventListener("click", () => {
  resetModaleCarrousel();
  modalePreviewImg[3].classList.add("modaleActive");
  displayModalePrimary();
});

previousBtn.addEventListener("click", () => {
  changePreviousImg();
});

nextBtn.addEventListener("click", () => {
  changeNextImg();
});

cartBtn.addEventListener("click", () => {
  if (cartContainer.classList.contains("cartInvisible")) {
    cartContainer.classList.remove("cartInvisible");
  } else {
    cartContainer.classList.add("cartInvisible");
  }
});

minusBtn.addEventListener("click", () => {
  if (addToCart === 0) {
  } else {
    addToCart -= 1;
    displayAddToCart();
  }
});

plusBtn.addEventListener("click", () => {
  addToCart += 1;
  displayAddToCart();
});

addToCartBtn.addEventListener("click", () => {
  cart += addToCart;
  displayCart();
  addToCart = 0;
  displayAddToCart();
});
