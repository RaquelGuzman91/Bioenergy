/*---- btn_inicio-----*/

addEventListener('DOMContentLoaded', () =>{
    const boton_ir_arriba = document.querySelector('#button-up')
    

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if (obtener_pixeles_inicio() > 0) {
            requestAnimationFrame(irArriba)
            scrollTo(0, Math.max(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 10)));
        }
    }

    const indicarScroll = () => {
        if(obtener_pixeles_inicio() > 700){
            boton_ir_arriba.className = 'mostrar'
        }   else {
            boton_ir_arriba.className = 'ocultar'
        }    
    }

    boton_ir_arriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

    window.addEventListener('scroll', indicarScroll);

});

