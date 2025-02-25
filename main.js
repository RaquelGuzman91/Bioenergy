const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderArticle = document.querySelectorAll(".slider-article");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e=> moveToRight())

/*CODIGO SLIDER INFINITO*/
setInterval(() => {
    moveToRight()
}, 4000);

let operacion = 0;
    counter = 0,
    widthImg = 100 / sliderArticle.length;

function moveToRight(){
    if (counter >= sliderArticle.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
/*QUITA LA TRANSITION AL LLEGAR A LA ULTIMA Y VUELVE A LA PRIMERA IMAGEN*/
        slider.style.transition = "none";
        return;
    }
    counter++;

        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .8s"
    

}

function moveToLeft(){
    counter--;
    if(counter < 0) {
        counter = sliderArticle.length-1;
        operacion = widthImg * (sliderArticle.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
/*  QUITA LA TRANSITION AL LLEGAR A LA ULTIMA Y VOLVER A LA PRIMERA IMAGEN*/
        slider.style.transition = "none";
        return
    }
    operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .8s"
}




/*------video------ */
let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video')
btn.onclick = function(){
    btn.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
    document.body.classList.add('no-scroll'); // Agrega la clase para deshabilitar el scroll
}
close.onclick = function(){
    btn.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
    document.body.classList.remove('no-scroll'); // Elimina la clase para habilitar el scroll
}


/**/
let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');



// span + scoll Animation

let CounterObserver = new IntersectionObserver(
    (entries,observe) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter,index) => {
    function UpdataCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if(initialNumber < targetNumber) {
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdataCounter, 40);
        }
    }
    UpdataCounter();


    if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
    }
    else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
            index / counters.length + 0.5
        }s`;
    }
});
    observe.unobserve(section_counter);
},
{
    root:null,
    threshold: 0.4,
});

CounterObserver.observe(section_counter);


 /*===================   efecto mostrar y esconder nav al hacer scrol    ====================*/
 var zero = 0;
 $(document).ready(function(){
     $(window).on('scroll', function(){
         $('.navbar').toggleClass('hide', $(window).scrollTop()
         > zero);
         zero = $(window).scrollTop();
     })
})
