document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel= document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration:150,
        dist:-80,
        shift: 5,
        padding:5,
        numVisible:3,
        indicators: true,
        noWrap:false
    });
    });
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