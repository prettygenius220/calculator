<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
  <style>
    *{
    font-family: "Poppins", Calibri;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right, red, green, yellow);
    background-repeat: no-repeat;
}

.calculator{
    position: relative;
    display: grid;
    margin:10px  30px 10px 30px;
    

}

.calculator .value{
    grid-column: span 4;
    height: 90%;
    text-align: right;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 20px;
}

.calculator span{
    display: grid;
    width: 100%;
    height: 150%;
    color: white;
    padding: 20px;
    background: navy;
    place-items: center;
    border: 1px solid rgba(0, 0, 0, 0.493);
}

.calculator span:active{
    background: rgb(142, 35, 35);
    color: blue;
}

.calculator span.clear{
    grid-column: span 3;
    background: rgb(221, 8, 44);
}

.calculator span.plus{
    grid-column: span 2;
}

.calculator span.minus{
    grid-column: span 2;
}

.calculator span.bottom{
    height: 100%;
}

@media(max-height:650px){
    .calculator{
        width: 10%;
        margin: 10%;
    }
    body{
        min-width: 100%;
    }
}
  
  </style>
</head>
<body>
    <form action="#" class="calculator" name="calc">
        <input type="text" class="value" name="text" readonly="">
        <span class="num clear" onclick="document.calc.text.value =''">c</span>
        <span class="num" onclick="document.calc.text.value = eval(calc.text.value)">=</span>
        <span class="num plus" onclick="document.calc.text.value +='+'">+</span>
        <span class="num minus" onclick="document.calc.text.value +='-'">-</span>
        <span class="num" onclick="document.calc.text.value +='1'">1</span>
        <span class="num" onclick="document.calc.text.value +='2'">2</span>
        <span class="num" onclick="document.calc.text.value +='3'">3</span>
        <span class="num" onclick="document.calc.text.value +='4'">4</span>
        <span class="num" onclick="document.calc.text.value +='5'">5</span>
        <span class="num" onclick="document.calc.text.value +='6'">6</span>
        <span class="num" onclick="document.calc.text.value +='7'">7</span>
        <span class="num" onclick="document.calc.text.value +='8'">8</span>
        <span class="num bottom" onclick="document.calc.text.value +='9'">9</span>
        <span class="num bottom" onclick="document.calc.text.value +='0'">0</span>
        <span class="num bottom" onclick="document.calc.text.value +='00'">00</span>
        <span class="num bottom" onclick="document.calc.text.value +='.'">.</span>
        
  </form>
    
</body>
</html>

