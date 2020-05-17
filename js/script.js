/**
*@fileoverview Codificacion de palabras segun el algoritos de cifrado de cesar
*@version 1.0
*@author Anderson Danilo Guerreo Calpa <adguerreroc@unal.edu.co>
*@copyright Academia Geek 
*
*@param {String} myStr
*@return {String} testStr
*/
let codeCesar=(myStr)=>{
var val=0, testStr=""; //variables auxiliares
for(let i=0; i<myStr.length;i++){
    val=myStr.charCodeAt(i); //codigo ascii de cada letra que se recorre del string
    if(val>=65){ //condicion del algoritmo 
        val+=13;//se suma 13 a es rango de valores
    }
    if(val>90){
        val-=26;//se resta 26 posiciones a ese rango de valores
    }
    testStr += String.fromCharCode(val); //se retorna el nuevo string con la codificicaion dada
}
return testStr;
}

//evento llamado desde la interfaz de usuarrio
document.getElementById("send_wordc").addEventListener('click',(e)=>{
    let str= document.getElementById('word_cod').value;
    resultado=codeCesar(str);
    document.getElementById('result').innerHTML="La codificación Cesar de la palabra es: "+resultado;
})