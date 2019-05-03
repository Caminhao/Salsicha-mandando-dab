// teclas permitidas
var pare = false
var permitidas = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // Konami Code
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // uma variavel que lembra o "progresso" no código
  var progresso = 0;
  
  // "escuta" quando alguem aperta uma tecla
  document.addEventListener('keydown', function(e) {
    // pega o valor das teclas da variavel "permitidas"
    var key = permitidas[e.keyCode];
    // pega o proximo valor requerido do konami code
    var ProximaKey = konamiCode[progresso];
  
    // compara a key com a proxima necessária
    if (key == ProximaKey) {
  
      // vai para a proxima tecla necessária no Konami code
      progresso++;
  
      // quando a ultima tecla for apertada, MACARENA IS ACTIVE
      if (progresso == konamiCode.length) {
        MACARENA();
        progresso = 0;
      }
    } else {
      progresso = 0;
    }
  });
  
  function MACARENA() {
    alert("O QUE QUE VOCÊ FEZ?");
    alert("...");
    alert("MACARENA");
    var id = document.getElementsByClassName('Salsicha')[0].id
    document.getElementById(id).style.visibility = 'hidden'
    document.getElementById('contador').innerHTML = ''
    pare = true
    document.body.style.backgroundImage = "url('Coisas/macarena.gif')";
  
    var audio = new Audio('Coisas/Macarena.mp3');
    audio.play();
  }
  