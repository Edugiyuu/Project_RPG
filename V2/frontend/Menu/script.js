const playButton = document.querySelector('#playButton')
const credits = document.querySelector('#credits')
const loading = document.querySelector('#loading')

function LoadingAnimation() {
    playButton.style.display = `none` 
    credits.style.display = "none"
    loading.style.display = 'flex'

    setTimeout(function() {
        window.location.href = '../Character-building/hat.html';
    }, 3000); // 2000 milissegundos (2 segundos)
}

playButton.addEventListener('click',LoadingAnimation)