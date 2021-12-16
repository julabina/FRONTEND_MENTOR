const primaryImg = document.querySelector(".containerImgPrimary");
const navMenu = document.querySelector(".menu__nav");
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
const cartBtn = document.querySelector(".cart__container__cartImg");
const cartContainer = document.querySelector(".cartContainer");
const cartContent = document.querySelector(
  ".cartContainer__cartContentContainer"
);
const miniCartNbr = document.querySelector(".cart__container__numberAdd__para");
const miniCartDiv = document.querySelector(".cart__container__numberAdd");
const mobilePreviousBtn = document.querySelector(".imgContainer__previous");
const mobileNextBtn = document.querySelector(".imgContainer__next");
const mobileMenuBtn = document.querySelector(".menu__menuImg");
const mobileMenuDarkBg = document.querySelector(".menu__darkBGForMobileOnly");
const mobileMenuClose = document.querySelector(".menu__nav__cross");

let cart = 0;
let total;
let addToCart = 0;

const displayPrimary = () => {
  for (let i = 0; i < previewsImages.length; i++) {
    let a = i + 1;
    if (previewsImages[i].classList.contains("carrouselActive")) {
      primaryImg.innerHTML = `
        <div class="imgContainer__previous" onClick="changeMobilePrimaryPreviousImg()">     
          <img src="./images/icon-previous.svg" alt="icon previous">
        </div>   
        <img class="imgContainer__primaryImg" src="./images/image-product-${a}.jpg" alt="product-${a} image">
        <div class="imgContainer__next" onClick="changeMobilePrimaryNextImg()">     
          <img src="./images/icon-next.svg" alt="icon next">
        </div>   
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
    miniCartDiv.classList.add("cartInvisible");
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
    miniCartDiv.classList.remove("cartInvisible");
    miniCartNbr.textContent = cart;
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

const changeMobilePrimaryPreviousImg = () => {
  for (let i = 0; i < previewsImages.length; i++) {
    if (previewsImages[i].classList.contains("carrouselActive")) {
      if (i === 0) {
        previewsImages[0].classList.remove("carrouselActive");
        previewsImages[3].classList.add("carrouselActive");
        break;
      } else {
        let a = i - 1;
        previewsImages[i].classList.remove("carrouselActive");
        previewsImages[a].classList.add("carrouselActive");
        break;
      }
    }
  }
  displayPrimary();
};

const changeMobilePrimaryNextImg = () => {
  for (let i = 0; i < previewsImages.length; i++) {
    if (previewsImages[i].classList.contains("carrouselActive")) {
      if (i === 3) {
        previewsImages[3].classList.remove("carrouselActive");
        previewsImages[0].classList.add("carrouselActive");
        break;
      } else {
        let a = i + 1;
        previewsImages[i].classList.remove("carrouselActive");
        previewsImages[a].classList.add("carrouselActive");
        break;
      }
    }
  }
  displayPrimary();
};

const changeModalePreviousImg = () => {
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

const changeModaleNextImg = () => {
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
  changeModalePreviousImg();
});

nextBtn.addEventListener("click", () => {
  changeModaleNextImg();
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

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("forMobileNav");
  mobileMenuDarkBg.classList.remove("forMobileNav");
});

mobileMenuClose.addEventListener("click", () => {
  navMenu.classList.add("forMobileNav");
  mobileMenuDarkBg.classList.add("forMobileNav");
});

/* preload images */

const preloadImg = (url) => {
  const img = new Image();
  img.src = url;
  return img;
};

const preloadImages = (images) => {
  for (let i = 0; i < images.length; i++) {
    images[i] = preloadImg(images[i]);
  }
};

let imgToPreload = [
  "./images/image-product2.jpg",
  "./images/image-product2-thumbnail.jpg",
  "./images/image-product3.jpg",
  "./images/image-product3-thumbnail.jpg",
  "./images/image-product4.jpg",
  "./images/image-product4-thumbnail.jpg",
];

preloadImages(imgToPreload);
