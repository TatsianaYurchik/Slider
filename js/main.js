let slideIndex = 1;
let timer1;
let timer2;
let slider = document.getElementsByClassName("slide_item");
changeSlide (slideIndex);

function autoSlider() {
    if (++slideIndex > slider.length) 
        slideIndex =1;
    timer1 = setTimeout(changeSlide, 5000);
    timer2 = setTimeout(autoSlider, 5000);
    
}

function stop () {
    clearTimeout(timer1);
    clearTimeout(timer2);
}

function return_autoSlider (){
    timer1 = setTimeout(changeSlide, 5000);
    timer2 = setTimeout(autoSlider, 5000);
}


function nextSlide (){
    changeSlide (slideIndex +=1);
}

function beforeSlide () {
    changeSlide (slideIndex -=1);
}

function currentSlide(n) {
    changeSlide(slideIndex = n);
}


function changeSlide (n) {
    let i;
    let dots = document.getElementsByClassName ("dots_item");

    if (n > slider.length) {
        slideIndex =1;
    }

    if (n <1){
        slideIndex = slider.length;
    }
    for (i=0; i<slider.length; i++) {
        slider[i].style.display = "none";
    }

    for (i=0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slider[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}



