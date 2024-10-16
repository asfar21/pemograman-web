function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Hasil: Masukkan bilangan yang valid!";
    } else {
        const result = num1 + num2;
        document.getElementById('result').innerHTML = "Hasil: " + result;
    }
}

function resetForm() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Hasil: ';
}
