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