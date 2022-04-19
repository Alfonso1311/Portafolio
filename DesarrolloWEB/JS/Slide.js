/***********    SLIDE   *************/

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glide__slides'), {
        slidesToShow: 4,
        slidesToScroll: 1,
        duration: 4,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.arrow-left',
          next: '.arrow-right'
        }
    });
});