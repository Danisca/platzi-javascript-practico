function precioMenosDescuento(precio, descuento){
    // (descuento / 100) * precio
    const valorDescuento = (descuento / 100) * precio;
    const precioConDescuento = precio - valorDescuento;

    return precioConDescuento;
}

const btnCalculatePrice = document.getElementById('btn-calculate-price');
btnCalculatePrice.addEventListener('click',(e)=>{
    const priceInput = document.getElementById('price');
    const discountInput = document.getElementById('discount');
    const resultContainer = document.getElementById('result-container');
    
    if(priceInput.value && discountInput.value){
        const price = parseInt(priceInput.value);
        const discount = parseInt(discountInput.value);
        resultContainer.innerHTML = `<p> Tu total a pagar es: $ ${precioMenosDescuento(price, discount)}</p>`;
        resultContainer.style.display = "block";
    }
});

const btnCalculatePriceCupon = document.getElementById('btn-calculate-price-cupon');
btnCalculatePriceCupon.addEventListener('click', (e)=>{
    const cuponPriceInput = document.getElementById('cupon-price');
    const discountCuponInput = document.getElementById('discount-cupon');
    const resultContainerCupon = document.getElementById('result-container-cupon');
    const cupons = [
        {
            "name":"Jklm123",
            "value": 10
        },
        {
            "name":"Asdf456",
            "value": 8
        },
        {
            "name":"Wxyz789",
            "value": 5
        }
    ];
    if(cuponPriceInput.value && discountCuponInput.value){
        const cupon = cupons.find((cupon)=>{
            return cupon.name === discountCuponInput.value;
        });
        // console.log(cupon);
        if(!cupon){
            // console.log('no cupon!')
            resultContainerCupon.innerHTML = `<p> Tu cupon no existe</p>`;
            resultContainerCupon.style.display = "block";   
        }else{
            // console.log('hay cupo/n!')
            const price = parseInt(cuponPriceInput.value);
            const discount = parseInt(cupon.value);
            const finalPrice = precioMenosDescuento(price, discount);
            resultContainerCupon.innerHTML = `<p> Tu total a pagar es: $ ${finalPrice}</p>`;
            resultContainerCupon.style.display = "block";
        }
    }
});