function alterarConteudoMainBase(baseNumerica){
    let base
    let decimalDisplay = 'inline-block', binarioDisplay = 'inline-block', octalDisplay = 'inline-block', hexadecimalDisplay = 'inline-block';
    
    if(baseNumerica == 10){
        base = "Decimal"
        decimalDisplay = 'none'

    } else if (baseNumerica == 2){
        base = "Binário"
        binarioDisplay = 'none'
    
    } else if (baseNumerica == 8){
        base = "Octal"
        octalDisplay = 'none'
  
    } else if (baseNumerica == 16){
        base = "Hexadecimal"
        hexadecimalDisplay = 'none'
    }

    document.getElementById('base').innerHTML = base
    document.getElementById('converterDecimal').style.display = decimalDisplay
    document.getElementById('converterBinario').style.display = binarioDisplay
    document.getElementById('converterOctal').style.display = octalDisplay
    document.getElementById('converterHexadecimal').style.display = hexadecimalDisplay
}

function setaBaseConversao(baseNumerica){     
    document.getElementById('button_calcular').innerHTML = `
    <button id="calcular" onclick="converterBaseNumerica(${baseNumerica})">Converter</button>
    `
}

function converterBaseNumerica(baseNumerica){

    let valor = input_valor.value

    if(document.getElementById('converterDecimal').style.display == 'none'){

         document.getElementById('resultado').innerHTML =`${Number(valor).toString(baseNumerica).toUpperCase()}`

    } else if (document.getElementById('converterBinario').style.display == 'none'){
        valor = parseInt(valor, 2)
        
        if(baseNumerica == 8 || baseNumerica == 16){
            valor = valor.toString(baseNumerica).toUpperCase()
        }
        document.getElementById('resultado').innerHTML =`${valor}`

    } else if (document.getElementById('converterOctal').style.display == 'none'){
        valor = parseInt(valor, 8)
        
        if(baseNumerica == 2 || baseNumerica == 16){
            valor = valor.toString(baseNumerica).toUpperCase()
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

function alterarCorMenu(menu){
    document.getElementById(`button_decimal`).classList.remove('menu_selecionado')
    document.getElementById(`button_binario`).classList.remove('menu_selecionado')
    document.getElementById(`button_octal`).classList.remove('menu_selecionado')
    document.getElementById(`button_hexadecimal`).classList.remove('menu_selecionado')

    document.getElementById(`${menu}`).classList.add('menu_selecionado')
}

document.addEventListener("DOMContentLoaded", alterarConteudoMainBase(10), alterarCorMenu('button_decimal'))