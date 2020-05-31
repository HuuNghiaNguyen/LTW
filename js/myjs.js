//navbar
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });

//carousel
$(document).ready(function(){
    $("#top-carousel").owlCarousel({
        animateOut: 'fadeOutDown',
        animateIn: 'fadeIn',
        items:1,
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        //stagePadding:50,
        lazyLoad:false
    });
});

$(document).ready(function(){
    $("#carousel2").owlCarousel({
        animateOut: 'fadeOutDown',
        animateIn: 'fadeIn',
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        stagePadding:20,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            960:{
                items: 2
            }
        },
        lazyLoad:false
    });
});

$(document).ready(function(){
    $("#carousel3").owlCarousel({
        animateOut: 'fadeOutDown',
        animateIn: 'fadeIn',
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        stagePadding:20,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            960:{
                items: 2
            }
        },
        lazyLoad:false,
        rtl:true
    });
});

$(document).ready(function(){
    $("#carousel4").owlCarousel({
        animateOut: 'fadeOutDown',
        animateIn: 'fadeIn',
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        stagePadding:20,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            960:{
                items: 2
            }
        },
        lazyLoad:false,
        rtl:false
    });
});

$(document).ready(function(){
    $("#hanoi-carousel").owlCarousel({
        animateOut: 'fadeOutDown',
        animateIn: 'fadeIn',
        items:3,
        autoHeight:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        dots:true,
        //stagePadding:50,
        lazyLoad:false
    });
});

//music
document.addEventListener('click', musicPlayOnLoad);
function musicPlayOnLoad() {
    document.getElementById('bg-music').play();
    document.getElementById('btn-music-toggle').innerHTML="❙❙&nbsp;"
    document.getElementById('btn-music-toggle2').innerHTML="❙❙&nbsp;"
    document.removeEventListener('click', musicPlayOnLoad);
}

function musicToggle() {
    if (document.getElementById('bg-music').paused) {
        document.getElementById('bg-music').play() 
        document.getElementById('btn-music-toggle').innerHTML="❙❙&nbsp;"
        document.getElementById('btn-music-toggle2').innerHTML="❙❙&nbsp;"
    }
        
    else {
        document.getElementById('bg-music').pause();
        document.getElementById('btn-music-toggle').innerHTML="▶"
        document.getElementById('btn-music-toggle2').innerHTML="▶"
    }
    
}

document.addEventListener('visibilitychange', musicStop);
function musicStop() {
    document.getElementById('bg-music').pause();
    document.getElementById('btn-music-toggle').innerHTML="▶"
    // document.removeEventListener('visibilitychange', musicStop);
}





//Scroll navbar - auto hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scrollNav").style.top = "0";
  } else {
    document.getElementById("scrollNav").style.top = "-156px";
  }
  prevScrollpos = currentScrollPos;
} 
