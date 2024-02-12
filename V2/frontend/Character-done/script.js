const personagem = document.querySelector('#personagem')
const frente = document.querySelector('#frente')
const X = document.querySelector('#X')
const loading = document.querySelector('#loading')


let hatIndex = 0; 
var hat = false

const hatImages = [
    './personagens/pixil-frame-0 (36).png',
    './personagens/pixil-frame-0 (37).png',
];

function nextCaracter() {
    personagem.style.animation = "";
    setTimeout(() => personagem.style.animation = " nextCaracter .5s forwards", 0);

    personagem.style.display = "block";
    personagem.src = hatImages[hatIndex];
   
    hatIndex++;
    
    if (hatIndex >= hatImages.length) {
        hatIndex = 0; 
    }

    hat = true
}
    
function NoHat() {
    personagem.style.display = 'none';
    hat = false
}

function AudioSelect() {
    const AudioSelect = document.querySelector('#AudioSelect')
    AudioSelect.play()
}

frente.addEventListener('click',nextCaracter)
frente.addEventListener('click',AudioSelect)
X.addEventListener('click',NoHat)

const next = document.querySelector('#next')

function Next() {

    //salvar a imagem do chapeu que a pessoa escolheu
    frente.style.display = 'none';
    X.style.display = 'none';
    personagem.style.display = 'none';
    next.style.display = 'none';
    loading.style.display = 'flex'

    setTimeout(function() {
        window.location.href = '../Tutorial/index.html';
    }, 2000); 
    
}

next.addEventListener('click',Next)