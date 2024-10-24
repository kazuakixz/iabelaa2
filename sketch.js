let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("gosta de Romance Anime?");
  campoAventura = createCheckbox("Gosta de Drama?");
}

function draw() {
  background("#E98EAD");
  let idade = campoIdade.value();
  let gostaDeRomanceAnime = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomanceAnime, gostaDeAventura);

  fill(color(144, 15, 127));
  textAlign(CENTER, CENTER);
  textSize(35);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRomanceAnime, ) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Violet Evergarden";
    } else {
      if (idade >= 15) {
        if(gostaDeRomanceAnime || gostaDeDrama) {
          return "Eu Quero Comer seu Pâncreas";          
        } else{
         return "Uma Linda Mulher";
        }
        
      } else {
        if (gostaDeRomanceAnime) {
          return "Olhos de Gato";
        } else {
          return "O tempo com você";
        }
      }
    }
  } else {
    if (gostaDeRomanceAnime) {
      return "Kimi no na wa";
    } else {
      return "Como Eu Era Antes de Você";
    }
  }
}
