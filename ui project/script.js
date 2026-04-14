

//document.getElementById('car').onclick = function() {
   // this.classList.add('car-moving');
   // const first=document.querySelector(".content1")
   //const second=document.querySelector(".content2")

    
   // setTimeout(() => {
      //  first.style.display = 'flex';
       
   // }, 1120); 

//};
const car = document.getElementById('car');
const first = document.querySelector(".content1");
const second = document.querySelector(".content2");

window.onscroll = function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) return;

    const scrollPercent = scrollTop / docHeight;
    
    
    const moveDistance = scrollPercent * (window.innerWidth - car.offsetWidth); 
    car.style.transform = `translateX(${moveDistance}px)`;

    if (scrollPercent >= 0.25 && scrollPercent < 0.75) {
        if (first) first.style.display = 'flex';
        if (second) second.style.display = 'none';
    } 
    else if (scrollPercent >= 0.75) {
        if (first) first.style.display = 'none';
        if (second) second.style.display = 'flex';
    } 
    else {
        if (first) first.style.display = 'none';
        if (second) second.style.display = 'none';
    }
};
    
