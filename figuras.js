
//Trabajar con cuadrados
    function squearePeremeter(side){
        return 4 * side;
    }
    function squareArea(side){
        return Math.pow(side, 2);
    }

//Trabajar con rectangulos
    function rectanglePeremeter(base, height){
        return 2 * (base + height);
    }
    
    function rectangleArea(base, height){
        return base * height;
    }

//Trabajar con el triangulo
    function trianglePeremeter(side1, side2, side3){
        return side1 + side2 + side3;
    }

    function rectangleArea(base, height){
        return base * height * 1/2;
    }

//Trabajar con el triangulo
    function circlePeremeter(radius){
        return 2 * Math.PI * radius;
    }

    function circleArea(radius){
        return Math.PI * Math.pow(radius, 2);
    }


//Trabajando con el formulario de html

const btnSquarePerimeter = document.getElementById('btn-square-perimeter');

btnSquarePerimeter.addEventListener("click",(e)=>{
    // console.log(document.getElementById('square-sides').value);
    const sideValue = parseInt(document.getElementById('square-sides').value);    
    if(sideValue){
        document.getElementById('square-perimeter-result').innerHTML = `El perimetro de tu cuadrado es = ${squearePeremeter(sideValue)}`;
    }
    // document.getElementById('area-result').innerHTML = "";
    // console.log(`result= ${squearePeremeter(sideValue)}`)
});

const btnSquareArea = document.getElementById('btn-square-area');
btnSquareArea.addEventListener("click", (e)=>{
    const sideValue = parseInt(document.getElementById('square-sides').value);
    if(sideValue){
        document.getElementById("square-area-result").innerHTML = `El area de tu cuadrado es = ${squareArea(sideValue)}`;
    }
    // document.getElementById('perimeter-result').innerHTML = "";
});

const btnCirclePerimeter = document.getElementById('btn-circle-perimeter');

btnCirclePerimeter.addEventListener("click",(e)=>{
    // console.log(document.getElementById('square-sides').value);
    const circleRadius = parseInt(document.getElementById('circle-radius').value);    
    if(circleRadius){
        document.getElementById("circle-perimeter-result").innerHTML = `El perimetro de tu circulo es = ${circlePeremeter(circleRadius).toFixed(2)}`;
    }
    // document.getElementById('area-result').innerHTML = "";
    // console.log(`result= ${squearePeremeter(sideValue)}`)
});

const btnCircleArea = document.getElementById('btn-circle-area');
btnCircleArea.addEventListener("click", (e)=>{
    const circleValue = parseInt(document.getElementById('circle-radius').value);
    if(circleValue){
        document.getElementById("circle-area-result").innerHTML = `El area de tu circulo es = ${circleArea(circleValue).toFixed(2)}`;
    }
    // document.getElementById('perimeter-result').innerHTML = "";
});

//Rectangle
const btnRectanglePerimeter = document.getElementById('btn-rectangle-perimeter');

btnRectanglePerimeter.addEventListener("click",(e)=>{
    // console.log(document.getElementById('square-sides').value);
    const rectangleBase = parseInt(document.getElementById('altura-rectangulo').value);    
    const rectangleAltura = parseInt(document.getElementById('base-rectangulo').value); 
    if(rectangleBase && rectangleAltura){
        document.getElementById("rectangle-perimeter-result").innerHTML = `El perimetro de tu rectangulo es = ${rectanglePeremeter(rectangleAltura, rectangleBase)}`;
    }
    // document.getElementById('area-result').innerHTML = "";
    // console.log(`result= ${squearePeremeter(sideValue)}`)
});

const btnRectangleArea = document.getElementById('btn-rectangle-area');
btnRectangleArea.addEventListener("click", (e)=>{
    const rectangleBase = parseInt(document.getElementById('altura-rectangulo').value);    
    const rectangleAltura = parseInt(document.getElementById('base-rectangulo').value); 
    if(rectangleBase && rectangleAltura){
        document.getElementById("rectangle-area-result").innerHTML = `El area de tu rectangulo es = ${rectangleArea(rectangleAltura, rectangleBase)}`;
    }
    // document.getElementById('perimeter-result').innerHTML = "";
});