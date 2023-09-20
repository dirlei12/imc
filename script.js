function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    const categoria = determinarCategoriaIMC(imc);

    const resultado = `Seu IMC é ${imc.toFixed(2)} (${categoria}).`;
    document.getElementById("resultado").innerText = resultado;
}

function determinarCategoriaIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}
