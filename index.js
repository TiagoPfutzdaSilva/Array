const {XboxPGE, XboxGames} = require('./arrays');

function juntalistas(listal, lista2) {
    let listaFinal = [];
    let posicaoAtualListal = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;
    
    while (posicaoAtualListal < listal.length && posicaoAtualLista2 < lista2.length) { 
        let produtoAtualListal = listal[posicaoAtualListal];
        let produtoAtualLista2 = lista2[posicaoAtualLista2]; 
       
        if (produtoAtualListal.preco < produtoAtualLista2.preco) { 
            listaFinal[atual] = produtoAtualListal;
            posicaoAtualListal++;
        
        } else {
            listaFinal [atual] = produtoAtualLista2; 
            posicaoAtualLista2++;
        }
        
        atual++;
    }

    while (posicaoAtualListal < listal.length) {
        listaFinal[atual] = listal[posicaoAtualListal]; 
        posicaoAtualListal++;
        atual++;
        }

        while (posicaoAtualLista2 < lista2.length) {
            listaFinal[atual] = lista2[posicaoAtualLista2];
            posicaoAtualLista2++;
            atual++;
        }

    return listaFinal;
}
console.log(juntalistas(XboxPGE, XboxGames))