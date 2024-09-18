function descobrirBaseAlterarMain(baseNumerica){
    var base = document.getElementById('base')
    
    if(baseNumerica == 10){
        base.innerHTML = "Decimal"
        document.getElementById('converterDecimal').style.display = 'none';
        document.getElementById('converterBinario').style.display = 'inline-block';
        document.getElementById('converterOctal').style.display = 'inline-block';
        document.getElementById('converterHexadecimal').style.display = 'inline-block';
    } else if (baseNumerica == 2){
        base.innerHTML = "Binário"
        document.getElementById('converterDecimal').style.display = 'inline-block';
        document.getElementById('converterBinario').style.display = 'none';
        document.getElementById('converterOctal').style.display = 'inline-block';
        document.getElementById('converterHexadecimal').style.display = 'inline-block';
    } else if (baseNumerica == 8){
        base.innerHTML = "Octal"
        document.getElementById('converterDecimal').style.display = 'inline-block';
        document.getElementById('converterBinario').style.display = 'inline-block';
        document.getElementById('converterOctal').style.display = 'none';
        document.getElementById('converterHexadecimal').style.display = 'inline-block';
    } else if (baseNumerica == 16){
        base.innerHTML = "Hexadecimal"
        document.getElementById('converterDecimal').style.display = 'inline-block';
        document.getElementById('converterBinario').style.display = 'inline-block';
        document.getElementById('converterOctal').style.display = 'inline-block';
        document.getElementById('converterHexadecimal').style.display = 'none';
    }
}

function descobrirBaseConversaoSetaBaseCalcular(baseNumerica){     
    document.getElementById('button_calcular').innerHTML = `<button id="calcular" onclick="calcular(${baseNumerica})">Calcular</button>`
}

function calcular(baseNumerica){
    
}

document.addEventListener("DOMContentLoaded", descobrirBaseAlterarMain(10))