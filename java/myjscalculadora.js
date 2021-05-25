
var solucion = ""; 
var resultado = "";
var b_inv = false; //bandera funciones inversas
var b_Grados =false;//bandera en radianes
var f = "";
var signoN= "-";
var signoP = "+";
var func="";

window.onload = function(){
    var x = document.getElementsByTagName("button") ;
    for (let i = 0; i < x.length; i++) {
        x[i].onclick = myFunction;
    }
}

function myFunction() {
    
    var datoi = document.getElementById('dato');

    if( (this.value != "AC") && (this.value !="=") && (this.value != "Rad") && (this.value != "Inv") && (this.value != "Deg") ){
        //datoi se escribe los valores digitados con la calculadora
        datoi.value += this.value; 
        func+=this.value;
        //generaciones de funciones a calcular
        if(this.value == "1") solucion += "1";
        if(this.value == "2") solucion += "2";
        if(this.value == "3") solucion += "3";
        if(this.value == "4") solucion += "4";
        if(this.value == "5") solucion += "5";
        if(this.value == "6") solucion += "6";
        if(this.value == "7") solucion += "7";
        if(this.value == "8") solucion += "8";
        if(this.value == "9") solucion += "9";
        if(this.value == "0" ) solucion += "0";
        if(this.value == "(") solucion += "(";
        if(this.value == "." ) solucion += ".";
        if(this.value == "+" ){solucion += "+"; signoN= "-";signoP = "+"; }
        if(this.value == "-"){ solucion += "-"; signoN= "+"; signoP = "-";}
        if(this.value == "×") solucion += "*";
        if(this.value == "÷") solucion += "/";
        if(this.value == ")") solucion += ")";
        if(this.value == "%") solucion +=  "*(1/100)";
        if(this.value == "π" ) solucion += (Math.PI);   
        if(this.value == "e" ) solucion += (Math.E);
        if(this.value == "Ans") solucion += resultado;
        if(this.value == "E(" ) solucion += "*Math.pow(10,";
        if(this.value == "^(" ){solucion += signoN;solucion += f.toString();solucion += signoP;solucion += "Math.pow(";solucion += f.toString();solucion += ",";} 
        if(this.value == "√(" ) solucion += "Math.sqrt(";
        if(this.value == "log(" ) solucion += "(1/Math.log(10))*Math.log(";
        if(this.value == "sin(" && b_Grados == true) solucion += "Math.sin(";
        if(this.value == "sin(" && b_Grados == false) solucion += "Math.sin((Math.PI/180)*";
        if(this.value == "tan(" && b_Grados == true) solucion += "Math.tan(";
        if(this.value == "tan(" && b_Grados == false) solucion += "Math.tan((Math.PI/180)*";
        if(this.value == "cos(" && b_Grados == true) solucion += "Math.cos(";
        if(this.value == "cos(" && b_Grados == false) solucion += "Math.cos((Math.PI/180)*";
        if(this.value == "ln(" ) solucion += "Math.log(";
        if(this.value == "!"){
            factorial = 1;
            for ( i = 1; i < eval(f); i++){
                factorial = factorial*(i+1);
            }
            solucion += signoN; solucion += f.toString(); solucion += signoP; solucion += factorial.toString();
        } 
        
        if(this.value == "e^("  ) solucion += "Math.exp(";
        if(this.value == "10^(" ) solucion += "Math.pow(10,";
        if(this.value == "^(2)" ){solucion += signoN; solucion += f.toString(); solucion += signoP; solucion += "Math.pow(";solucion += f.toString();
            solucion += ",2)";
        } 
        //Grados
        if(this.value == "asin(" && b_Grados == true) solucion += "Math.asin((Math.PI/180)*";
        if(this.value == "acos(" && b_Grados == true) solucion += "Math.acos((Math.PI/180)*";
        if(this.value == "atan(" && b_Grados == true) solucion += "Math.atan((Math.PI/180)*";
        //Radianes
        if(this.value == "asin(" && b_Grados == false) solucion += "Math.asin(";
        if(this.value == "acos(" && b_Grados == false) solucion += "Math.acos(";
        if(this.value == "atan(" && b_Grados == false) solucion += "Math.atan(";


        if(this.value == "Rnd" ) solucion += "Math.random()";
        if(this.value == "^(1/" ){solucion += signoN; solucion += f.toString(); solucion += signoP; solucion += "Math.pow(";solucion += f.toString();
            solucion += ",1/";
        } 

        if(this.value != "Ans"){
            if( (this.value != "-") && (this.value != "+") && (this.value != "×") && (this.value != "÷") && (this.value != "!") && (this.value != "^(2)") && (this.value != "^(1/") && (this.value != "^(") && (this.value != "=")  && (this.value != "AC") ){
                f += this.value;  
            }else f = "";
        }else f = resultado;
    }

    if( this.value == "AC" ){
        signoN= "-";
        signoP = "+";
        datoi.value = "";
        resultado = solucion;
        solucion= "";
        f = "";
        func="";
    }

    if( this.value == "=" ){

        var Operando = document.getElementById("operacion").innerText;
        var funcion=document.getElementById("operacion");
        funcion.value = func+this.value + Operando;//impresion de la funcion ejecutada
        solucion = eval(solucion); 
        datoi.value = solucion;
    }
    //Cambio a radianes ó a grados
    if( this.value == "Rad" && b_Grados==false){
        b_Grados=true;
        this.style.color = "rgb(167, 170, 170)";
        var Radian = document.getElementById("deg");
        Radian.style.color = "black";
    }
    if(this.value == "Deg" && b_Grados==true ){
        b_Grados=false;
        this.style.color= "rgb(167, 170, 170)";
        var Grados = document.getElementById("rad");
        Grados.style.color = "black";
    }
    //Cambio de funciones
    if( this.value == "Inv" && b_inv==false){
        camb = document.getElementsByClassName("camb");
        b_inv=true;   
        camb[0].innerHTML= "sin<sup>-1</sup>";
        camb[0].value = "asin(";
        camb[1].innerHTML= "e<sup>x</sup>"; 
        camb[1].value = "e^(";
        camb[2].innerHTML= "cos<sup>-1</sup>"; 
        camb[2].value = "acos(";
        camb[3].innerHTML= "10<sup>x</sup>"; 
        camb[3].value = "10^(";
        camb[4].innerHTML= "tan<sup>-1</sup>"; 
        camb[4].value = "atan(";
        camb[5].innerHTML= "x<sup>2</sup>"; 
        camb[5].value = "^(2)";
        camb[6].innerHTML= "Rnd"; 
        camb[6].value = "Rnd";
        camb[7].innerHTML= "<sup>y</sup>√x"; 
        camb[7].value = "^(1/";

        }else if(this.value == "Inv" && b_inv==true ){
            b_inv=false;   
            camb[0].innerHTML= "sin"; 
            camb[0].value = "sin(";
            camb[1].innerHTML= "ln"; 
            camb[1].value = "ln(";
            camb[2].innerHTML= "cos"; 
            camb[2].value = "cos(";
            camb[3].innerHTML= "log"; 
            camb[3].value = "log(";
            camb[4].innerHTML= "tan"; 
            camb[4].value = "tan(";
            camb[5].innerHTML= "√"; 
            camb[5].value = "√(";
            camb[6].innerHTML= "Ans"; 
            camb[6].value = "Ans";
            camb[7].innerHTML= "x<sup>y</sup>"; 
            camb[7].value = "^(";
        }
  }


