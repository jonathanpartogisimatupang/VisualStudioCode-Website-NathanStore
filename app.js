$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarouse1({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText : ['PREV','NEXT'],
        responsive: {
            0:{
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    //PROJECT SLIDER
    $('#project-slider').owlCarouse1({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        smartSpeed: 1000,
        responsive: {
            0:{
                
            },
            768: {
                
            },
            1140: {

            }
        }
    })
});