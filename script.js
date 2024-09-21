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

    let valor = input_valor.value

    if(document.getElementById('converterDecimal').style.display == 'none'){
         document.getElementById('resultado').innerHTML =`${Number(valor).toString(baseNumerica)}`
    } else if (document.getElementById('converterBinario').style.display == 'none'){
        valor = parseInt(valor, 2)
        
        if(baseNumerica == 8 || baseNumerica == 16){
            valor = valor.toString(baseNumerica)
        }
        document.getElementById('resultado').innerHTML =`${valor}`
    } else if (document.getElementById('converterOctal').style.display == 'none'){
        valor = parseInt(valor, 8)
        
        if(baseNumerica == 2 || baseNumerica == 16){
            valor = valor.toString(baseNumerica)
        }
        document.getElementById('resultado').innerHTML =`${valor}`
    } else if (document.getElementById('converterHexadecimal').style.display == 'none'){
        valor = parseInt(valor, 16)
        
        if(baseNumerica == 2 || baseNumerica == 8){
            valor = valor.toString(baseNumerica)
        }
        document.getElementById('resultado').innerHTML =`${valor}`
    }

}

document.addEventListener("DOMContentLoaded", descobrirBaseAlterarMain(10))

function alterarCorMenu(menu){
    document.getElementById(`${menu}`).id += 'menu_selecionado'
}