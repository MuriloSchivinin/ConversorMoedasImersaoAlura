function pegaValorDollar() {
    let dollar;
    dollar = document.getElementById('input1').value
    dollar = dollar.replace(",", ".")
    dollar = parseFloat(dollar)
    if (dollar > 0) {
        let real;
        real = dollar * 5.51
        real = real.toFixed(2)
        document.getElementById('input1').value = ''
        document.getElementById('value1').value = `R$ ${real}`
    }
    else {
        alert(`ERRO - POR FAVOR, INSIRA UM VALOR VÁLIDO.`)
        document.getElementById('input1').value = ''
    }
}

function pegaValorEuro() {
    let euro;
    euro = document.getElementById('input2').value
    euro = euro.replace(",", ".")
    euro = parseFloat(euro)
    if (euro > 0) {
        let real;
        real = euro * 6.52
        real = real.toFixed(2)
        document.getElementById('input2').value = ''
        document.getElementById('value2').value = `R$ ${real}`
    }
    else {
        alert(`ERRO - POR FAVOR, INSIRA UM VALOR VÁLIDO.`)
        document.getElementById('input2').value = ''
    }
}

function pegaValorLibras() {
    let libras;
    libras = document.getElementById('input3').value
    libras = libras.replace(",", ".")
    libras = parseFloat(libras)
    if (libras > 0) {
        let real;
        real = libras * 7.56
        real = real.toFixed(2)
        document.getElementById('input3').value = ''
        document.getElementById('value3').value = `R$ ${real}`
    }
    else {
        alert(`ERRO - POR FAVOR, INSIRA UM VALOR VÁLIDO.`)
        document.getElementById('input3').value = ''
    }
}