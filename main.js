function tocarSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();

    }else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');




//Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]

    console.log(instrumento);

    //templete string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

/*

a mesma funcionalidade utilizando o while

let contador = 0;

//Enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]

 //   console.log(instrumento);

    //templete string
    const idAudio = `#som_${instrumento}`;
  //  console.log(idAudio);

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    contador = contador + 1;

   // console.log(contador);
}


*/