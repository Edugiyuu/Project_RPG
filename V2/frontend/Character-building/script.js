const chapeu = document.querySelector('#chapeu')
const frente = document.querySelector('#frente')
const X = document.querySelector('#X')



let hatIndex = 0; 
var hat = false

const hatImages = [
    './chapeu/pixil-frame-0 (32).png',
    './chapeu/pixil-frame-0 (33).png',
    './chapeu/pixil-frame-0 (34).png', 
];

function Hat() {
    chapeu.style.display = 'block';

    chapeu.src = hatImages[hatIndex];
   
    hatIndex++;
    
    if (hatIndex >= hatImages.length) {
        hatIndex = 0; 
    }

    hat = true
}
    
function NoHat() {
    chapeu.style.display = 'none';
    hat = false
}

function AudioSelect() {
    const AudioSelect = document.querySelector('#AudioSelect')
    AudioSelect.play()
}

frente.addEventListener('click',Hat)
frente.addEventListener('click',AudioSelect)
X.addEventListener('click',NoHat)

const next = document.querySelector('#next')

function Next() {
   

    setTimeout(function() {
        window.location.href = '../Character-building/clothes.html';
    }, 1000); 
    
}

next.addEventListener('click',Next)