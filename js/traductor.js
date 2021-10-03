// unicode es el valor unicode del caracter introducido. la A es el 65 por ejemplo
var opcion = document.getElementById('txt');
opcion.addEventListener("keyup",traducir,false);

var cadena                 
var posicion 
var codigoUnicode 
var chino 
var info 
var caracter 
var texto ="";


function traducir(){
    
    cadena = document.getElementById("txt").value; 
    caracter =cadena;
    posicion = cadena.length - 1;
    codigoUnicode = cadena.charCodeAt(posicion);
   var codigoSrt=""+codigoUnicode;
    if(codigoSrt!="NaN"){
        chino = unescape("%u" + codigoUnicode + "e8");
        cadena = cadena.substring(0, cadena.length - 1);
        cadena = cadena + chino;
        document.getElementById("txt").value = cadena;

        texto =  texto + '<br>------------------------------<br>'+
                    'Tipo de evento: keyup <br>'+
                    'Propiedad keycode: '+ codigoUnicode+'<br>'+
                    ' caracter pulsado:  '+caracter.slice(-1);      

        document.getElementById("info").innerHTML=  texto;
    }
    
                                        
}



