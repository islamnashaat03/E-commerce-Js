// SELECT LOADING DIV
const loadingDiv = document.querySelector('.page-loading');

// SELCET HAMBURGER ICON
const hamburgerIcon = document.querySelector('.nav-bar .toggle-btn'),
  navbarMobile = document.querySelector('.navbar-mobile'),
  overlayAll = document.querySelector('.overlay-all'),
  closeBtn = document.querySelector('.close-btn');

let catWrapper = document.querySelector(
  '.categories .cat-swiper .swiper-wrapper'
);
// PRE LOADING Function
setTimeout(function () {
  // loadingDiv.style.opacity = '0';
  // loadingDiv.style.visibility = 'hidden';
  loadingDiv.style.cssText = `opacity= 0 ; visibility: hidden;transition:.5s all ease-in-out`;
  setTimeout(function () {
    loadingDiv.style.display = 'none';
  }, 100);
}, 4000);

// let productsJson = '/api.json';
// async function fetchData() {
//   try {
//     let result = await fetch(productsJson);
//     let products = await result.json();
//     console.log(products);
//     showData(products);
//   } catch {
//     console.log('Error fetching');
//   }
// }
// function showData(products) {
//   products.forEach((product) => {
//     catWrapper.innerHTML += `<li class="product-card">
//     <figure class="image-wrap">
//       <img src="${product.image}" alt="Product image">
//     </figure>
//     <div class="body">
//       <h4 class="name">${product.title}</h4>
//       <div class="cat-brand">
//         <h5 class="category">${product.category}</h5>
//         <span>/</span>
//         <h3 class="brand">${product.brand}</h3>
//       </div>
//       <div class="text"> ${product.description} </div>
//       <div class="rate">
//         <i class="fa-solid fa-star colored"></i>
//         <i class="fa-solid fa-star colored"></i>
//         <i class="fa-solid fa-star colored "></i>
//         <i class="fa-solid fa-star"></i>
//         <i class="fa-solid fa-star"></i>
//       </div>
//       <div class="price">
//         <div class="price-before-sale">500$</div>
//       <div class="final-price">${product.price}$</div>
//       </div>
//       <a href="addto cart" class="btn main-btn"> add to cart </a>
//       <!-- <div class="wishlist listed-to-wish"><i class="fa-solid fa-heart"></i></div> -->
//     </div>
//     <div class="sale-per">15%</div>
//   </li>`;
//   });
// }
// fetchData();

// fetch categories from api

let catJson = '/cat.json';
async function fetchCatData() {
  try {
    let result = await fetch(catJson);
    let products = await result.json();
    console.log(products);
    showCatData(products);
  } catch {
    console.log('Error fetching');
  }
}
function showCatData(categories) {
  categories.forEach((category) => {
    catWrapper.innerHTML += `<li class="item swiper-slide">
    <figure class="image-wrap">
      <img src="${category.image}" alt="Category Image">
    </figure>
    <h4>${category.catname} </h4>
</li>`;
  });
}
fetchCatData();

// NAV BAR MOBILE OPEN AN CLOSE
function closeNavBar() {
  navbarMobile.classList.remove('active');
  overlayAll.classList.remove('active');
}
hamburgerIcon.addEventListener('click', function () {
  navbarMobile.classList.add('active');
  overlayAll.classList.add('active');
});
overlayAll.addEventListener('click', function () {
  closeNavBar();
});
closeBtn.addEventListener('click', function () {
  closeNavBar();
});

// INITIALIZE MAIN SWIPER
var mainSlider = new Swiper('.main-slider', {
  speed: 400,
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// INITIALIZE CATEGORY SWIPER
var catSwiper = new Swiper('.cat-swiper', {
  speed: 400,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  init: false,
});
catSwiper.on('init', function () {
  console.log('cat inii');
});
catSwiper.init();
