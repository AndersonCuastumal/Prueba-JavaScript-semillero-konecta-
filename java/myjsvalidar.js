//validadcion de datos formulario
window.onload = function(){
    var elementos = document.forms[0].elements;
    for(i=0;i<elementos.length;i++){
        elementos[i].onkeypress = validar;
    }
}

function validar(nombre){
    switch(this.name){
    
        case 'identificacion':
            return datosN(nombre, 3);
            break;
        case 'celular':
            return datosN(nombre, 3);
            break;
        case 'area':
            return datosN(nombre, 4);
            break;
        case 'name':
            return datosN(nombre, 1);
            break;
        case 'email':
            return datosN(nombre, 2);
            break;
        case 'cargo':
            return datosN(nombre, 4);
            break;
        case 'horario':
            return datosN(nombre, 5);
            break;
    }
}

function datosN(nombre, n){
    var caracteres = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÚÓÚ"
    var numeros = "0123456789";
    var alfanumerico = caracteres + numeros;
    var especiales = "@.-_*:";
    var alfanumericoEspeciales= alfanumerico + especiales;
    var numericoEspeciales=numeros + especiales;
    var permitidos ="";
    
    switch (n){
        case 1: permitidos = caracteres; break;
        case 2: permitidos = alfanumericoEspeciales; break;
        case 3: permitidos = numeros; break;
        case 4: permitidos = alfanumerico; break;
        case 5: permitidos = numericoEspeciales; break;
       
    }
    
    var codigoPresionado = nombre.charCode || nombre.keyCode;
    var caracter = String.fromCharCode(codigoPresionado);
    
        if(permitidos.indexOf(caracter)!= -1){
            return true;
        }
        else{
            return false;
        }
}