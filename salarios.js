const btnCalc = document.getElementById('btn-calc');
btnCalc.addEventListener('click',()=>{
    const inputData = document.getElementById('data');
    if(inputData.files[0]){
        const resultsSection = document.getElementsByClassName('results');
        resultsSection[0].style.display = 'block';
        const result = document.getElementById('result');

        
        const data = inputData.files[0];
        const fileReader = new FileReader;
        
        fileReader.onload = ()=>{
            const dataRead = fileReader.result;
            const dataProcessed = processData(dataRead);
            const dataAsIntArray = arrayToInt(dataProcessed);
            // console.log(dataAsIntArray);

            //Calculos de medidas de tendencia central de los datos
            const totalMedia = calculateMedia(dataAsIntArray);
            const totalMediana = calculateMediana(dataAsIntArray);
            const totalModa = calculateModa(dataAsIntArray);

            //calculos de muestras
            let tempData = dataAsIntArray;
            const muestraTop10 = calculateMuestra(tempData,10);
            tempData = dataAsIntArray;
            const muestraLow10 = calculateMuestra(tempData,10,false);

            //Calculando cada medida de tendencia central de la muestra del top10%
            const top10Media = calculateMedia(muestraTop10);
            const top10Moda = calculateModa(muestraTop10);
            const top10Mediana = calculateMediana(muestraTop10);

            //Calculando cada medida de tendencia central de la muestra del top10%
            const low10Media = calculateMedia(muestraLow10);
            const low10Moda = calculateModa(muestraLow10);
            const low10Mediana = calculateMediana(muestraLow10);

            result.innerHTML = `<h3>Analisis del total de los Datos</h3>`;
            result.innerHTML += `<p>Media General: ${totalMedia}</p>`;
            result.innerHTML += `<p>Mediana General: ${totalMediana}</p>`;
            result.innerHTML += `<p>Moda General: ${totalModa}</p>`;
            result.innerHTML += `<h3>Analisis del low 10%</h3>`;
            result.innerHTML += `<p>Media low 10%: ${low10Media}</p>`;
            result.innerHTML += `<p>Media low 10%: ${low10Media}</p>`;
            result.innerHTML += `<p>Media low 10%: ${low10Media}</p>`;
            
        }

        fileReader.readAsText(data);
    }

});

const sortedColombia = colombia.sort((a,b)=>{
    return a.salary - b.salary;
})

const salaries = sortedColombia.map(
    (elem)=>{return elem.salary;}
);

// const sortedSalaries = salaries.sort((a,b)=>{return a - b;})

function calculateMuestra(data, percent, top = true){
    //data variable must to be sorted asc
    const poblacion = data.length;
    let muestra = [];
    const result = (poblacion * percent) / 100;
    let spliceStart = poblacion - result;
    if(top){
        muestra = data.splice(spliceStart,result);
    }else{
        spliceStart = 0;
        muestra = data.splice(spliceStart,result);
    }

    // console.log(result);
    // if(top){
    //     // for(let i=1 ;i <= result;i++){
    //     //     muestra.push(data[poblacion - i]);
    //     // }
    //     const  muestra = data.splice(spliceStart,result);
    //     // console.log(`splice result: ${( spliceStart)}  ${( result)}`);
    // }else{
    //     // for(let i=0 ;i < result;i++){
    //     //     // console.log(data[i]);
    //     //     muestra.push(data[i]);
    //     // }

    // }
    // muestra = muestra.sort((a,b)=>{return a - b;});
    return muestra;
}


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
    // console.log(result);
    return result[result.length - 1];
}

function calculateMediana(data){
    const elementsCount = data.length;
    const centerValueIndex = parseInt(elementsCount / 2); 
    const orderData = data.sort((a,b)=>{
        return a - b;
    });
    if((elementsCount % 2) === 0){
        const centerValue = orderData[centerValueIndex -1];
        const rightValue = orderData[centerValueIndex];
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