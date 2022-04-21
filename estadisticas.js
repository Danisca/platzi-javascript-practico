
const btnMedia = document.getElementById('btn-media');
btnMedia.addEventListener('click',()=>{
    const inputData = document.getElementById('media-data');
    const mediaResult = document.getElementById('media-result');
    if(inputData.files[0]){
        const dataFile = inputData.files[0];
        // const media = 0;
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            //obtiene el resultado de leer el archivo
            const fileRead = fileReader.result;
            //procesa el archivo leido 
            // y retorna un array de strings con cada 
            //elemento
            const dataProcessed = processData(fileRead);
            //convierte un array de strings a uno de enteros
            const dataNumber = arrayToInt(dataProcessed);
            //retorna el promedio de los datos de un array 
            //pasado como parametro
            const media = calculateMedia(dataNumber);
            // console.log(media);
            mediaResult.innerHTML = `<p> La media aritmetica de tus datos es: ${media}</p>`;
            console.log(quickSort(dataNumber));
        }
        fileReader.readAsText(dataFile);
    }
});

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
        }
        );
        return result;

    } catch (error) {
        console.log(error);
        return error;
    }
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