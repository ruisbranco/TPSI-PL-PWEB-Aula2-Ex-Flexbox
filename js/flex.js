function fd(valor){
    document.getElementById('container').style.flexDirection=valor;
}

function fw(valor){
    document.getElementById('container').style.flexWrap=valor;
}

function fj(valor){
    document.getElementById('container').style.justifyContent=valor;
}

function fai(valor){
    document.getElementById('container').style.alignItems=valor;
}

var n = 0;
function slide(){
    var imagens= ['../img/1.jpg','../img/2.jpg','../img/3.jpg'];
    var legendas = ['Wolf','Maquina','Ilidan'];
    var linkspub = ['https://www.google.com/','https://www.pllware.com/','https://www.bola.com/'];
    document.getElementById('image_pub').src=imagens[n];
    document.getElementById('text_pub').innerHTML=legendas[n];
    document.getElementById('link_pub').href=linkspub[n];
    if(n<2) n++;
    else n = 0;
    setTimeout("slide()",2000);
}