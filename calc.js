function disNum(a){
    document.calc.text.value += a;
}

function clearNum(){
    document.calc.text.value = '';
}

function evalResult(){
    var result = eval(calc.text.value);
    document.calc.text.value = result;
}