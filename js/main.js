var slideIndex = 0;
var x = document.getElementsByClassName("mySlides");
var y = document.getElementsByClassName("mySlides2");
var z = document.getElementsByClassName("DivSlides");
carousel();
carousel2();

function carousel() {
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000);
}

function carousel2() {
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > y.length) {slideIndex = 1} 
    y[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000);
}


function mobilenav(f){
    
    var c = document.getElementById("mobilenav");
    c.classList.toggle("hidden");
    c.classList.toggle("grow");
    f.classList.toggle("change");
    
}






/*Number.prototype.roundTo = function(nTo) {
    nTo = nTo || 10;
    return Math.round(this * (1 / nTo) ) * nTo;
}

$(function() {
    var slides = 3;
    var slideWidth = $('#slider').width();
    var min = 0;
    var max = -((slides - 1) * slideWidth);

    $("#slider ul").width(slides*slideWidth).draggable({
        axis: 'x',
        drag: function (event, ui) {
            if (ui.position.left > min) ui.position.left = min;
            if (ui.position.left < max) ui.position.left = max;
        },
        stop: function( event, ui ) {
            $(this).animate({'left': (ui.position.left).roundTo(slideWidth)})
        }
    });
});*/


/*
var slideIndex = 0;
carousel();
window.onresize(carousel);

function carousel() {
    var i;
    if(window.innerWidth > 650){
        var x = document.getElementsByClassName("mySlides");
        var y = document.getElementsByClassName("mySlides2");
        y.style.display ="collapsed";
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
        setTimeout(carousel, 5000);   
    }
    else{
        var y = document.getElementsByClassName("mySlides");
        var x = document.getElementsByClassName("mySlides2");
        y.style.display ="none";
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
        setTimeout(carousel, 5000);    
    }
    
}*/

