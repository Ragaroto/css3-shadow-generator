$(document).ready(function () {

  xPos = 0;
  yPos = 0;
  meuBlur = 0;
  cor = "";
  contador = 0;
  sombras = new Array();
  sombra = '0px 0px 0px #000';
  template = $('#sombra0').clone().css('visbility', 'hidden');



  $('#add').click(function () {
    contador++

    $(template).clone().appendTo('body').attr('id', 'sombra' + contador);
    sombras.push(sombra);

  });

  $('input[type="range"], input[type="color"], input[type="checkbox"]').live("change", function () {

    index = $(this).parent().attr('id').split('sombra')[1];

    xPos = $('#sombra' + index + ' .xPos').val();
    yPos = $('#sombra' + index + ' .yPos').val();
    meuBlur = $('#sombra' + index + ' .Blur').val();
    cor = $('#sombra' + index + ' .cor').val();
    tipo = $('#sombra'+index+' input[type="checkbox"]:checked').length == 1 ? "inset" : "";

    $('#sombra' + index + ' .xOut').val(xPos) ;
    $('#sombra' + index + ' .yOut').val(yPos);
    $('#sombra' + index + ' .blurOut').val(meuBlur);
    $('#sombra' + index + ' .colorOut').val(cor);

    sombras[index] = tipo +' '+ xPos + 'px ' + yPos + 'px ' + meuBlur + 'px ' + cor;
    $('#div').css('box-shadow', sombras);
    estilo = $('#div').attr("style");
    $("#syntax").html(estilo);
  });

  $('form input[type="number"]').live("change", function () {
    var index = $(this).parent().attr('id').split('sombra')[1];

    xPos = $('#sombra' + index + ' .xPos').val();
    yPos = $('#sombra' + index + ' .yPos').val();
    meuBlur = $('#sombra' + index + ' .Blur').val();
    cor = $('#sombra' + index + ' .cor').val();
    tipo = $('#sombra'+index+' input[type="checkbox"]:checked').length == 1 ? "inset" : "";

    $('#sombra' + index + ' .xPos').val( $('#sombra' + index + ' .xOut').val()); 
    $('#sombra' + index + ' .yPos').val( $('#sombra' + index + ' .yOut').val()); 
    $('#sombra' + index + ' .Blur').val( $('#sombra' + index + ' .blurOut').val()); 

    sombras[index] = tipo +' '+ xPos + 'px ' + yPos + 'px ' + meuBlur + 'px ' + cor;
    $('div').css('box-shadow', sombras);
    
    estilo = $('#div').attr("style");
    $("#syntax").html(estilo);
    console.log(estilo);

  });

});