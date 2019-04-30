var searchM = document.querySelector('.input-field');
//const sidenav = document.querySelector('#sidenav');
const label = document.querySelector('#label-icon');
const  carousel = M.Carousel.getInstance(document.querySelector('.carousel'));
function search(active) {
  if(active === 1 ){
    searchM.style.width = '100%';
    sidenav.className = 'sidenav-trigger hide right';
  }else if(active === 0){
    searchM.style.width = '60%';
    sidenav.className = 'sidenav-trigger right';
    sidenav.style.transition = 'all .9s';
  }//
}



M.Sidenav.init(document.querySelectorAll('.sidenav'));

M.Tabs.init(document.querySelectorAll('.tabs'), {
  swipeable: false


});
M.Carousel.init (document.querySelectorAll('.carousel'), {
  fullWidth: true,
  indicators: true,
  padding: 200,
  
});



M.Slider.init(document.querySelectorAll('.slider'));


M.Collapsible.init(document.querySelectorAll('.collapsible'));

 /* function autoplay() {
    carousel.next();
    setInterval(autoplay, 4500);

  }
*/


