loadingDiv = document.querySelector('.page-loading');

// PRE LOADING Function
setTimeout(function () {
  // loadingDiv.style.opacity = '0';
  // loadingDiv.style.visibility = 'hidden';
  loadingDiv.style.cssText = `opacity= 0 ; visibility: hidden;transition:.5s all ease-in-out`;
  setTimeout(function () {
    loadingDiv.style.display = 'none';
  }, 100);
}, 4000);
