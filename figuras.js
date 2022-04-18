
//Trabajar con cuadrados
    function squearePeremeter(side1){
        return 4 * side1;
    }
    function squareArea(side1){
        return Math.pow(side1, 2);
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

    function triangleArea(base, height){
        return base * height * 1/2;
    }

    //calcular altura de triangulo isosceles
    function triangleHeight(side1,side2, base){
        if(side1 === side2 && side1 != base){
            return Number.parseFloat(Math.sqrt(Math.pow(side1,2)- (Math.pow(base,2) / 4)).toFixed(2));
        }
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
    // console.log(document.getElementById('square-s~~ides').value);
    const squareSidesInput = document.getElementById('square-sides');
    const squearePeremeterResult =  document.getElementById('square-perimeter-result');

    if(squareSidesInput.value){
        const sideValue = parseInt(squareSidesInput.value);    
        squearePeremeterResult.innerHTML = `El perimetro de tu cuadrado es: ${squearePeremeter(sideValue)}`
    }
    // document.getElementById('area-result').innerHTML = "";
    // console.log(`result= ${squearePeremeter(sideValue)}`)
});

const btnSquareArea = document.getElementById('btn-square-area');
btnSquareArea.addEventListener("click", (e)=>{
    const squareSides = document.getElementById('square-sides');
    const squareAreaResult = document.getElementById("square-area-result");
    if(squareSides.value){
        const sideValue = parseInt(squareSides.value);
        squareAreaResult.innerHTML = `El area de tu cuadrado es: ${squareArea(sideValue)}`;
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