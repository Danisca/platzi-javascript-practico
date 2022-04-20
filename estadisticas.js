
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
    const data = [];
    dataFile.split(/\n/).map((lineStr)=>{
        if(lineStr.length > 0 ){
            data.push(lineStr);
        }
    });
    return data;
}

function arrayToInt(arr){
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