
const calcular = () => {
    const alt = eval(document.getElementById('altura').value);
    const pes = eval(document.getElementById('peso').value);
  
    // Calculo IMC
    let calculoImc = pes / (alt ** 2).toFixed(2);
    let resultado = ''; 

    // Validação
    if (altura.value=="" || peso.value== "") {
        alert('Digite a Altura ou Peso!');
        return false;
    } else if (altura.value > 2.50 || peso.value > 650) {
        alert('[Formato de valor Inválido] Digite uma altura ou peso!');
        return false;
    }

  
    if (calculoImc < 18.5) {
        resultado = "abaixo do peso!"
    } else if  (calculoImc >= 18.5 && calculoImc <= 24.9) {
        resultado = "peso ideal!"
    } else if  (calculoImc >= 25 && calculoImc <= 29.9) {
        resultado = "Levemente acima do peso!"
    } else if  (calculoImc >= 30 && calculoImc <= 34.9) {
        resultado = "Obesidade grau 1!"
    } else if  (calculoImc >= 35 && calculoImc <= 39.9) {
        resultado = "Obesidade grau 2!"
    } else if  (calculoImc > 40) {
        resultado = "Obesidade grau 3!"
    }

    
    
     
    document.getElementById("res").innerHTML = `O seu IMC é ${calculoImc.toFixed(2)} = ${resultado}`;
    console.log(calculoImc)

    }



    