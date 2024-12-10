function mudarBG(cor) {
    document.body.style.backgroundColor = cor;
    const titulo = document.querySelector('#titulo');
    
    if (cor.toLowerCase() === 'black' || cor === '#000000') {
        titulo.style.color = 'white';
    } else if (cor.toLowerCase() === 'white' || cor === '#ffffff') {
        titulo.style.color = 'black';
    } else {
        titulo.style.color = '';
    }
}

const corUsuario = prompt('Digite a cor desejada (nome ou código hexadecimal):');
mudarBG(corUsuario);
