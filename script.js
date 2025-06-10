let audios = [
    {caminho:'tempo.mp3', legenda:'Tempo das águas'},
    {caminho:'tocando em frente.mp3', legenda:'Tocando em frente'},
    {caminho:'homem.mp3', legenda:'Homem do campo'},
    {caminho:'casa.mp3', legenda:'Casa de caboclo'},
    {caminho:'planeta.mp3', legenda:'Planeta azul'},
    {caminho:'reino.mp3', legenda:'Reino encantado'},
    {caminho:'terra.mp3', legenda:'Terra'},
    {caminho:'pequeno.mp3', legenda:'Pequeno'},
    {caminho:'agricultor.mp3', legenda:'Agricultor'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});

