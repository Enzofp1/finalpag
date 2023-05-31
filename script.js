
function saludo() {
    let edad = prompt("Ingrese su edad ");
    
    if (edad<=18) {
      alert("Usted esta entrando bajo su propia responsabilidad al ser menor ");      
    }  else if(edad>18){
      alert("Bienvenido!");
    }
    else{

    }
   
  }
  saludo();
  function Alerta()
  {
    var respuesta= alert("usted esta saliendo de este sitio");
    if(respuesta== true)
    {
        return true;
    }
    else{
        return false;
    }
  }
  function localidad() {
    let distancia = confirm("¿Vive a menos de 40km de San Nicolas?");
    if (distancia == true) {
      alert("Su envio será gratis!");
    } else {
      alert("Su envio tendra un precio dependiendo la zona!");
    }
  }
  localidad();
/*hay un error con el video de youtube, al ponerlo,la alerta de arriba no funciona*/