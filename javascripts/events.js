$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

    $('.menu-lateral > div').click(function(){
      $('.menu-lateral > div').removeClass('fundoAmarelo');
      $(this).toggleClass('fundoAmarelo');
      $('.conteudo').hide();
      console.log(this.id);
      $('.' + this.id).show();
      if(this.id == 'conceito' || this.id == 'contraste'){
        $('.roxao').addClass('branco');
      }
      else{
        $('.roxao').removeClass('branco');
      }
    })

    $('.elementoAnimacao1').mouseout(function(){
      $('.elementoAnimacao1').toggleClass('animado');
    });

    $('.elementoAnimacao1').mouseenter(function(){
      $('.elementoAnimacao1').toggleClass('animado');
    });

    var animation1 = bodymovin.loadAnimation({
      container: document.getElementById('animacao1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/inicio/inicio.json',
    })

    var animation3 = bodymovin.loadAnimation({
      container: document.getElementById('animacao3'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/proximidade/proximidade.json',
    })

    var animation4 = bodymovin.loadAnimation({
      container: document.getElementById('animacao4'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/contraste/contraste.json',
    })

    animation1.setSpeed(0.5);
    animation3.setSpeed(0.5);
    animation4.setSpeed(0.5);


    $('#limparFicha').click(function(){
      $('textarea').val('');
    });

    $('#imprimirFicha').click(function(){
      window.print();
    })

    $('#salvarFicha').click(function(){
      $('textarea').val('');
      window.print();
    })

})
