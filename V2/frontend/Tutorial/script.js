const dialogBox = document.getElementById('dialog-box');
const dialogContent = document.getElementById('dialog-content');
const dialogText = document.getElementById('dialog-text');
const dialogButton = document.getElementById('dialog-button');

let dialogResolve;

dialogButton.addEventListener('click', () => {
  dialogBox.classList.add('hidden');
  dialogResolve();
});

function showDialog(text, buttonText = 'OK') {
  dialogText.textContent = text;
  dialogButton.textContent = buttonText;
  
  dialogBox.classList.remove('hidden');
  
  return new Promise((resolve) => {
    dialogResolve = resolve;
  });
}

// Exemplo de uso
const abrirDialog = document.getElementById('abrir-dialog');
abrirDialog.addEventListener('click', async () => {
  await showDialog('Olá, esta é a caixa de diálogo!', 'Fechar');
  alert('Você clicou em OK!');
});
