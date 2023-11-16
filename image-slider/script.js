const images = document.querySelectorAll('#slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dots = document.getElementById('dots');

let currentSlide = 0;
images[currentSlide].style.display = 'block'

function nextSlide() {
  const dotDivs = document.querySelectorAll('#dot');
  console.log(currentSlide)
  
  if (currentSlide >= images.length - 1) {
    return;
  };
  images[currentSlide].style.display = 'none';
  dotDivs[currentSlide].style.color = 'blue';

  currentSlide++
  images[currentSlide].style.display = 'block';
  dotDivs[currentSlide].style.color = 'red';
}

function prevSlide() {
  const dotDivs = document.querySelectorAll('#dot');
  
  if (currentSlide < 1) return;
  dotDivs[currentSlide].style.color = 'blue';
  images[currentSlide].style.display = 'none';

  currentSlide--
  images[currentSlide].style.display = 'block';
  dotDivs[currentSlide].style.color = 'red';
}

next.addEventListener('click', e => {
  e.preventDefault();

  nextSlide();
})

prev.addEventListener('click', e => {
  e.preventDefault();

  prevSlide();
})

function createDots() {
  images.forEach( (e, i) => {
    let div = document.createElement('div');
    div.setAttribute('id', 'dot');
    div.textContent = i + 1;
    dots.appendChild(div);
  })
}
createDots();

const dotDivs = document.querySelectorAll('#dot');
dotDivs[0].style.color = 'red';

dotDivs.forEach( (dot, i) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();

    images[currentSlide].style.display = 'none';
    dotDivs[currentSlide].style.color = 'blue'
    
    currentSlide = i;
    images[currentSlide].style.display = 'block';
    dotDivs[currentSlide].style.color = 'red'
  })
})

setInterval( () => {
  nextSlide();
}, 5000)