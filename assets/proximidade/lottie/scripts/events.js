var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('nova'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'scripts/arte01_nobg.json'
})


let para = document.getElementById('para');
let freia = document.getElementById('freia');
let acelera = document.getElementById('acelera');
let rodando = true;

para.addEventListener("click", botaoPara);
freia.addEventListener("click", botaoFreia);
acelera.addEventListener("click", botaoAcelera);


let velocidade = 1;
function botaoFreia(){
  velocidade--;
  animation2.setSpeed(velocidade);
}

function botaoAcelera(){
  velocidade++;
  animation2.setSpeed(velocidade);
}


function botaoPara(){
  if(rodando){
    animation2.pause();
    para.innerHMTL = ">";
  }
  else{
    animation2.play();
    para.innerHMTL = "||";
  }
    rodando = !rodando;
}
