const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
function Timer(){
    function tempo(tempo){
    var dataUniversal  = new Date(tempo*1000);
    let formata = dataUniversal.toLocaleTimeString('pt-BR',{hour12:false,timeZone: 'UTC'})

    relogio.innerHTML = formata;
    }

    let segundos = 0;
    let time = 0;
    iniciar.addEventListener('click',function(evento){
        clearInterval(time)
        segundos = 0;
        relogio.classList.remove('pause')
        time = setInterval(function(){tempo(segundos++)},1000);
    });

    pausar.addEventListener('click',function(evento){
        const pausar = clearInterval(time)
        if(segundos !==0){
            relogio.classList.add('pause')
        }
    });

    zerar.addEventListener('click',function(evento){
        clearInterval(time)
        relogio.classList.remove('pause')
        tempo(0)
        segundos = 0;
    });
}
Timer()