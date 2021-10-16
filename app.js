function getHistory(){          //Obtener el valor del primer número escrito
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {    //Imprimir en display el primer numero
    document.getElementById("history-value").innerText=num;
}

function getOutput(){       //Obtener el valor escrito
    return document.getElementById("output-value").innerText;
}

function printOutput(num){     //Imprimir valor escrito
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormatedNumber(num);
    }
}

function getFormatedNumber(num){        
    if(num=="-"){
        return "";
    }
    var n = num;
    var value = n.toLocaleString("en");
    return value;
}

//===== Funciones para operaciones de botones======

var last_num_store = 0; //variable para guardar el resultado de la ultima operacion hecha
var operator = document.getElementsByClassName("type-operation");
for ( var i = 0; i < operator.length; i++){     //se itera para saber que boton operando fue presionado
    operator[i].addEventListener('click',function(){
        if(this.innerText == "AC"){             //resetea el dsiplay y lo limpia
            printHistory("");
            printOutput("");
        }
        else if (this.innerText == "C"){
            var output = getOutput().toString();    //substrae el ultimo digito para borrarlo
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else if (this.innerText == "."){
            var output = getOutput().toString();        //boton para hacer una operacion con decimales
            if(output != ""){
                salida = output;
                output = salida + this.innerText;
                printOutput(output);
            }
        }
        else if (this.innerText == "ANS"){      //Obtener la respuesta de la operación anterior
            printHistory("");
            printOutput("");
            printOutput(last_num_store);
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history != ""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output == ""?
                output:output;
                history = history + output;
                if(this.innerText == "="){      //Boton igual para realizar operacion mediante la funcion eval
                    var result = eval(history);
                    last_num_store = result;
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.innerText;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
//Ciclo para agregar el evento listener a los botones numeros
var number = document.getElementsByClassName("type-number");
for ( var i = 0; i < number.length; i++){
    number[i].addEventListener('click',function(){
        var output = getOutput();
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}
//Operaciones para los botones de las burbujas
function buSuma(){
    var output = getOutput();
    if(output != ""){
        output = output + "+";
        printHistory(output);
        printOutput("");
    }
}

function buResta(){
    var output = getOutput();
    if(output != ""){
        output = output + "-";
        printHistory(output);
        printOutput("");
    }
}

function buMul(){
    var output = getOutput();
    if(output != ""){
        output = output + "*";
        printHistory(output);
        printOutput("");
    }
}

function buEntre(){
    var output = getOutput();
    if(output != ""){
        output = output + "/";
        printHistory(output);
        printOutput("");
    }
}

