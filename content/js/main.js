// SELECT LOADING DIV
loadingDiv = document.querySelector('.page-loading');

// SELCET HAMBURGER ICON
const hamburgerIcon = document.querySelector('.nav-bar .toggle-btn'),
  navbarMobile = document.querySelector('.navbar-mobile'),
  overlayAll = document.querySelector('.overlay-all'),
  closeBtn = document.querySelector('.close-btn');
let apiUrl =
  'https://www.luai-phone.com/wp-json/wc/v3/products?consumer_key=ck_efa31b6beedcbcb7718f014d878c4d3b471ac976&consumer_secret=cs_f7c266306d2d9d10f0fb0fbcd8a8eb3d201826a8';
let dataWrapper = document.querySelector('.wrapper');

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
  // rtl: dir == 'rtl' ? true : false,
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

// START FETCHING DATA

async function fetchData() {
  try {
    let result = await fetch(apiUrl);
    let data = await result.json();
    showData(data);
    console.log(data);
  } catch {
    console.log('Error');
  }
}

function showData(data) {
  data.forEach((ele) => {});
  // console.log('showData', data);
  dataWrapper.innerHTML += ``;
}

fetchData();
