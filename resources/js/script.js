$(document).ready(function(){
    /* For sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },
    {
        offset: '60px;'
    });

     
    
});


/*Animations on Scroll */


$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
},{
    offset: '50%'
});



$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
},{
    offset: '50%'
});


$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
},{
    offset: '50%'
});



$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
},{
    offset: '50%'
});


/*Mobile navigation*/



$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon')
    
    nav.slideToggle(200);

});





