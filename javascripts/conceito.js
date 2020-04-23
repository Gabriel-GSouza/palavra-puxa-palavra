// Bolinhas
let bolinhas = [0];
bolinhas.push(document.getElementById('bolinha1'));
bolinhas.push(document.getElementById('bolinha2'));
bolinhas.push(document.getElementById('bolinha4'));
bolinhas.push(document.getElementById('bolinha8'));
bolinhas.push(document.getElementById('bolinha3'));
bolinhas.push(document.getElementById('bolinha5'));
bolinhas.push(document.getElementById('bolinha9'));
bolinhas.push(document.getElementById('bolinha6'));
bolinhas.push(document.getElementById('bolinha7'));

$(bolinhas[2]).addClass('blinking');
$(bolinhas[4]).addClass('blinking');

// $(bolinhas[3]).hide();
// $(bolinhas[5]).hide();
// $(bolinhas[6]).hide();
// $(bolinhas[7]).hide();
// $(bolinhas[8]).hide();

escondeBolinhas([3,5,6,7,8]);

// Elásticos
let elasticos = [0];
elasticos.push(document.getElementById('elastico-roxo-01'));
elasticos.push(document.getElementById('elastico-amarelo-01'));
elasticos.push(document.getElementById('elastico-amarelo-03'));
elasticos.push(document.getElementById('elastico-roxo-05'));
elasticos.push(document.getElementById('elastico-roxo-04'));
elasticos.push(document.getElementById('elastico-amarelo-04'))
elasticos.push(document.getElementById('elastico-amarelo-02'));
elasticos.push(document.getElementById('elastico-roxo-02'));
elasticos.push(document.getElementById('elastico-roxo-03'));
elasticos.push(document.getElementById('elastico-amarelo-05'));

let passeiNo2 = false;
let passeiNo3 = false;
let caminho1 = false;
let caminho2 = false;

function ativaBotoes(){
  $(bolinhas[2]).one("click", function() {
    revelaBolinhas([3]);
    escondeBolinhas([4]);
    revelaElasticos([1]);
    tiraBrilho([2,4])
    colocaBrilho([3]);
    passeiNo2 = true;
  });
  $(bolinhas[4]).one("click", function() {
    revelaBolinhas([3]);
    escondeBolinhas([2]);
    revelaElasticos([2]);
    tiraBrilho([2,4])
    colocaBrilho([3]);
    passeiNo3 = true;
  });
  $(bolinhas[3]).one("click", function(){
    if(passeiNo2){
      revelaBolinhas([5]);
      tiraBrilho([3]);
      colocaBrilho([5]);
      revelaElasticos([3]);
    }
    if(passeiNo3){
      revelaBolinhas([5])
      tiraBrilho([3]);
      colocaBrilho([5]);
      revelaElasticos([4]);
    }
  })
  $(bolinhas[5]).one("click", function(){
    tiraBrilho([5]);
    revelaBolinhas([6,8]);
    colocaBrilho([6,8]);
    revelaElasticos([5]);
  })
  $(bolinhas[8]).one("click", function(){
    escondeBolinhas([6])
    revelaElasticos([7]);
    tiraBrilho([8,6])
    caminho1 = true;
  })
  $(bolinhas[6]).one("click", function(){
    escondeBolinhas([8]);
    revelaBolinhas([7]);
    revelaElasticos([6]);
    tiraBrilho([6]);
    $(bolinhas[7]).show();
    colocaBrilho([7]);
    caminho2 = true;
  })
  $(bolinhas[7]).one("click", function(){
    revelaElasticos([8]);
    tiraBrilho([7]);
    revelaBolinhas([9]);
    colocaBrilho([9]);
  })
  $(bolinhas[9]).click(function(){
    if(caminho1){
      revelaElasticos([9]);
    }
    if(caminho2){
      revelaElasticos([10]);
    }
  })
}

$('#restart').click(restart);

function restart(){
  escondeElasticos([1,2,3,4,5,6,7,8,9,10]);
  escondeBolinhas([3,5,6,7,8,4,2]);
  revelaBolinhas([2,4]);
  tiraBrilho([2,3,4,5,6,7,8,9]);
  colocaBrilho([2,4]);
  passeiNo2 = false;
  passeiNo3 = false;
  caminho1 = false;
  caminho2 = false;
  ativaBotoes();
}

function revelaElasticos(argumento){
  for (let i = 0; i < argumento.length; i++) {
    elasticos[argumento[i]].style.opacity = '1';
  }
}
function escondeElasticos(argumento){
  for (let i = 0; i < argumento.length; i++) {
    elasticos[argumento[i]].style.opacity = '0';
  }
}
function colocaBrilho(argumento){
  for (var i = 0; i < argumento.length; i++) {
    $(bolinhas[argumento[i]]).addClass('blinking')
  }
}
function tiraBrilho(argumento){
  for (var i = 0; i < argumento.length; i++) {
    $(bolinhas[argumento[i]]).removeClass('blinking')
  }
}
function escondeBolinhas(argumento){
  for (var i = 0; i < argumento.length; i++) {
    bolinhas[argumento[i]].style.opacity = '0';
  }
}
function revelaBolinhas(argumento){
  for (var i = 0; i < argumento.length; i++) {
    bolinhas[argumento[i]].style.opacity = '1';
  }
}

ativaBotoes();
