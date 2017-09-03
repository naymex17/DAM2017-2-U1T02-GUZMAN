function cuentaLetras(cadena){
    var res=cadena.replace(/[ ]/g,"");
    return res.length;
}
function cuentaPalabras(cadena){
    var arr=cadena.split(" ");
    return arr.length;
}

function numeroVocales(cadena){
    var res=0;
    for(var i=0;i<cadena.length;i++){
        var letra=cadena.charAt(i);
        var esVoc=(letra==='a' || letra==='e' || letra==='i' || 
                        letra==='o' || letra==='u');
        if(esVoc){ res++; }
    }
    return res;
}
function numeroCons(cadena){
    var res=0;
    for(var i=0;i<cadena.length;i++){
        var letra=cadena.charAt(i);
        var esCons=(letra!='a' && letra!='e' && letra!='i' && 
                        letra!='o' && letra!='u'&&letra!=' ');
        if(esCons){ res++;}
    }
    return res;
}
function palindromo(cadena){
    var cad=cadena.replace(/[ ]/g,"");
    var c=cad.split("").reverse().join("");
    if (c==cad){return "es palindromo";}
    return "no es palindromo";
}
function imprimir(cadena){
    console.log("la cadena '"+cadena+"' "+palindromo(cadena));
    console.log("tiene "+cuentaPalabras(cadena)+" palabras");
    console.log("tiene "+cuentaLetras(cadena)+" letras");
    console.log("tiene "+numeroVocales(cadena)+' vocales');
    console.log("tiene "+numeroCons(cadena)+" consonantes");
}
imprimir("anita lava la tina");
imprimir("aiex fdfh");
