function getHistory(){
    return document.getElementById("histroy-value").innerText;
}

function printHistory(num){
    document.getElementById("histroy-value").innerText=num;
}

function getOutput(num){
    return document.getElementById("output-value").innerText=num;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    if(num=="_"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//alert(reverseNumberFormat(getOutput()));
var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
       else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output= output.substr(0, output.length-1);
                printOutput(output);
            }

        }else{
            var output=getOutput();
            var histroy=getHistory();
            if(output==""&&history!=""){
                if(isNaN(histroy[histroy.length-1])){
                    histroy=histroy.substr(0,histroy.length-1);
                }
            }
            if(output!="" || histroy!=""){
                //condition ? true:false
                output=output==""? 
                output:reverseNumberFormat(output);
                history=histroy+output;
                if(this.id=="="){
                    output=reverseNumberFormat(output);
                    histroy=histroy+output;
                    if(this.id=="="){
                        var result=eval(histroy);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        histroy=histroy+this.id;
                        printHistory(histroy);
                        printOutput("");
                   
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length;i++){
    number[i].addEventListener('click', function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number
            output=output+this.id;
            printOutput(output);
        }

    });
}









