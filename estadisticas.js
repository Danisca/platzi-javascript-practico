
const btnCalc = document.getElementById('btn-calc');
btnCalc.addEventListener('click',()=>{
    const inputData = document.getElementById('data');
    if(inputData.files[0]){
        const file = inputData.files[0];
        const fileReader = new FileReader();
        const resultContainer = document.getElementById('result');
        fileReader.onload = ()=>{
            const fileRead = fileReader.result;
            const dataAsArray = processData(fileRead);
            const dataAsIntArray = arrayToInt(dataAsArray);
            // const orderedData = quickSort(dataAsIntArray);
            
            const media = calculateMedia(dataAsIntArray);//retorna un unico valor
            const mediana = calculateMediana(dataAsIntArray);//retorna un unico valor
            const moda = calculateModa(dataAsIntArray);//retorna un array con dos elementos[data,frecuencia]

            resultContainer.innerHTML = `<p> La media de tus datos es: ${media.toFixed(3)}</p>`;
            resultContainer.innerHTML += `<p> La mediana de tus datos es: ${mediana}</p>`;
            resultContainer.innerHTML += `<p> La moda de tus datos es: ${moda[0]} con ${moda[1]}</p>`;
        }
        fileReader.readAsText(file);
    }
});

function calculateModa(data){
    const dataCount = {};
    data.map((elemt)=>{
        if(dataCount[elemt]){
            dataCount[elemt] += 1;
        }else{
            dataCount[elemt] = 1;
        }
    });
    const result = Object.entries(dataCount).sort((elemA, elemB)=>{
        // console.log(`${elemA} -> ${elemB}`);
        return elemA[1] - elemB[1];
    });
    console.log(result);
    return result[result.length - 1];
}

function calculateMediana(data){
    const elementsCount = data.length;
    const centerValueIndex = parseInt(elementsCount / 2); 
    const orderData = data.sort((a,b)=>{
        return a - b;
    });
    if((elementsCount % 2) === 0){
        const centerValue = orderData[centerValueIndex];
        const rightValue = orderData[centerValueIndex + 1];
        const avg = calculateMedia([centerValue, rightValue]);
        return avg;
    } else{
        return orderData[centerValueIndex]; 
    }
}

function calculateMedia(data){
    const elementsCount = data.length;
    let sum = 0;
    data.forEach(element => {
        sum += element;
    });
    const media = sum / elementsCount;
    return media;
}

function processData(dataFile){
    //convierte los datos obtenidos de un archivo .csv
    //y devuelve los datos en un array de strings
    const data = [];
    dataFile.split(/\n/).map((lineStr)=>{
        //el if conprueba que no este vacia la linea
        if(lineStr.length > 0 ){
            data.push(lineStr);
        }
    });
    return data;
}

function arrayToInt(arr){
    //recibe un array de numero en tipo string
    //retorna otro array pero con sus elementos convertidos a numero,
    //especificamente a float
    const result = [];
    try {
            arr.forEach( (element) =>{
                result.push(parseFloat(element));
            });
        return result;

    } catch (error) {
        console.log(error);
        return error;
    }
}

function orderArray(arr){
    const orderArray = arr.sort((a,b)=>{
        return a - b;
    })
    return orderArray;
}

//algoritmo de ordenamiento
function quickSort(arr){
    if(arr.length < 1){
        return [];
    }
    const pivot = arr[0];
    const left = [];
    const rigth = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else if(arr[i] > pivot){
            rigth.push(arr[i]);
        }
    }
    return [].concat(quickSort(left), pivot, quickSort(rigth));
}