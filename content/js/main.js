// SELECT LOADING DIV
const loadingDiv = document.querySelector('.page-loading');

// SELCET HAMBURGER ICON
const hamburgerIcon = document.querySelector('.nav-bar .toggle-btn'),
  navbarMobile = document.querySelector('.navbar-mobile'),
  overlayAll = document.querySelector('.overlay-all'),
  closeBtn = document.querySelector('.close-btn');
let catWrapper = document.querySelector('.categories .wrapper');
let apiUrl =
  'https://www.luai-phone.com/wp-json/wc/v3/products?consumer_key=ck_efa31b6beedcbcb7718f014d878c4d3b471ac976&consumer_secret=cs_f7c266306d2d9d10f0fb0fbcd8a8eb3d201826a8';
let apiUrlCategories =
  'https://www.luai-phone.com/wp-json/wc/v3/products/categories?per_page=20&parent=0&consumer_key=ck_efa31b6beedcbcb7718f014d878c4d3b471ac976&consumer_secret=cs_f7c266306d2d9d10f0fb0fbcd8a8eb3d201826a8&fbclid=IwAR3ePmWjakvO4UJkdeEW9s70m0ihXRTOlzH4Xm_uoQROPrg_iq0jklNuWrE';
// PRE LOADING Function
setTimeout(function () {
  // loadingDiv.style.opacity = '0';
  // loadingDiv.style.visibility = 'hidden';
  loadingDiv.style.cssText = `opacity= 0 ; visibility: hidden;transition:.5s all ease-in-out`;
  setTimeout(function () {
    loadingDiv.style.display = 'none';
  }, 100);
}, 4000);

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

// INITIALIZE OWL CAROUSEL
// MAIN SLIDER
$('.main-slider').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: [
    "<i class='owl-btn  fa-solid fa-angle-left '></i>",
    "<i class='owl-btn  fa-solid fa-angle-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 1,
      nav: false,
      dots: true,
    },
    1000: {
      items: 1,
      nav: false,
      dots: true,
    },
  },
});
// CATEGORIES  SLIDER
$('.category-slider').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: [
    "<i class='owl-btn  fa-solid fa-angle-left '></i>",
    "<i class='owl-btn  fa-solid fa-angle-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: true,
    },
    600: {
      items: 4,
      nav: false,
      dots: true,
    },
    1000: {
      items: 6,
      nav: true,
      dots: true,
    },
  },
});
// LATEST PRODUCTS SLIDER
$('.latest-products-slider').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: [
    "<i class='owl-btn  fa-solid fa-angle-left '></i>",
    "<i class='owl-btn  fa-solid fa-angle-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 3,
      nav: false,
      dots: true,
    },
    1000: {
      items: 4.25,
      nav: false,
      dots: true,
    },
  },
});
// LATEST PRODUCTS SLIDER
$('.best-seller-slider').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: [
    "<i class='owl-btn  fa-solid fa-angle-left '></i>",
    "<i class='owl-btn  fa-solid fa-angle-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 3,
      nav: false,
      dots: true,
    },
    1000: {
      items: 4.25,
      nav: false,
      dots: true,
    },
  },
});
// BRANDS  SLIDER
$('.brands-slider').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: [
    "<i class='owl-btn  fa-solid fa-angle-left '></i>",
    "<i class='owl-btn  fa-solid fa-angle-right'></i>",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: true,
    },
    600: {
      items: 4,
      nav: false,
      dots: true,
    },
    1000: {
      items: 6,
      nav: true,
      dots: true,
    },
  },
});
// START FETCHING DATA

async function fetchData(e) {
  try {
    let result = await fetch(e);
    let datas = await result.json();
    showData(datas);
  } catch {
    console.log('Data Error');
  }
}

// function showData(datas) {
//   datas.forEach((data) => {
//     console.log(data);
//     catWrapper.innerHTML += `<li>
//     <a href="">
//       <figure class="image-wrap">
//         <img src="${data.image}" alt="Category Image">
//       </figure>
//       <h4>${data.name}</h4>
//     </a>
//   </li>`;
//   });
// }

// fetchData(apiUrlCategories);

// SHOW CATEGORIES
