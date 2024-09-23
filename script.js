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

    document.getElementById('section_resultado').style.display = 'none'

    document.getElementById('h3_sub_titulo_para').style.display = 'none'
    
    

    document.getElementById('h3_sub_titulo_base_original').innerHTML = base
    document.getElementById('converterDecimal').style.display = decimalDisplay
    document.getElementById('converterBinario').style.display = binarioDisplay
    document.getElementById('converterOctal').style.display = octalDisplay
    document.getElementById('converterHexadecimal').style.display = hexadecimalDisplay
}

function setaBaseConversao(baseNumerica){     
    let baseOriginal
    let baseConversao

    if(document.getElementById('converterDecimal').style.display == 'none'){
        baseOriginal = "Decimal"
    } else if (document.getElementById('converterBinario').style.display == 'none'){
        baseOriginal = "Binário"
    } else if (document.getElementById('converterOctal').style.display == 'none'){
        baseOriginal = "Octal"
    } else if (document.getElementById('converterHexadecimal').style.display == 'none'){
        baseOriginal = "Hexadecimal"     
    }

    if(baseNumerica == 10){
        baseConversao = "Decimal"

    } else if (baseNumerica == 2){
        baseConversao = "Binário"
    
    } else if (baseNumerica == 8){
        baseConversao = "Octal"
  
    } else if (baseNumerica == 16){
        baseConversao = "Hexadecimal"     
    }

     document.getElementById('section_resultado').style.display = 'flex'
    document.getElementById('h3_sub_titulo_base_original').innerHTML = `${baseOriginal}`
    document.getElementById('h3_sub_titulo_para').style.display = 'inline-block'
    document.getElementById('h3_sub_titulo_base_conversao').innerHTML = `${baseConversao}`
    document.getElementById('button_converter').innerHTML = `
    <button id="converter" onclick="converterBaseNumerica(${baseNumerica})">Converter</button>
    `
}

function converterBaseNumerica(baseNumerica){

    let valor = input_valor.value

    if(document.getElementById('converterDecimal').style.display == 'none'){

         document.getElementById('resultado').innerHTML =`<p id="p_resultado">${Number(valor).toString(baseNumerica).toUpperCase()}</p>`

    } else if (document.getElementById('converterBinario').style.display == 'none'){
        valor = parseInt(valor, 2)
        
        if(baseNumerica == 8 || baseNumerica == 16){
            valor = valor.toString(baseNumerica).toUpperCase()
        }
        document.getElementById('resultado').innerHTML =`<p id="p_resultado">${valor}</p>`

    } else if (document.getElementById('converterOctal').style.display == 'none'){
        valor = parseInt(valor, 8)
        
        if(baseNumerica == 2 || baseNumerica == 16){
            valor = valor.toString(baseNumerica).toUpperCase()
        }
        document.getElementById('resultado').innerHTML =`<p id="p_resultado">${valor}</p>`

    } else if (document.getElementById('converterHexadecimal').style.display == 'none'){
        valor = parseInt(valor, 16)
        
        if(baseNumerica == 2 || baseNumerica == 8){
            valor = valor.toString(baseNumerica)
        }
        document.getElementById('resultado').innerHTML =`<p id="p_resultado">${valor}</p>`
    }

}

function alterarCorMenu(menu){
    document.getElementById(`button_decimal`).classList.remove('menu_selecionado')
    document.getElementById(`button_binario`).classList.remove('menu_selecionado')
    document.getElementById(`button_octal`).classList.remove('menu_selecionado')
    document.getElementById(`button_hexadecimal`).classList.remove('menu_selecionado')

    document.getElementById(`${menu}`).classList.add('menu_selecionado')

    alterarCorBotaoBaseConversao()
}

function alterarCorBotaoBaseConversao(menu){
    document.getElementById(`converterDecimal`).classList.remove('botao_selecionado')
    document.getElementById(`converterBinario`).classList.remove('botao_selecionado')
    document.getElementById(`converterOctal`).classList.remove('botao_selecionado')
    document.getElementById(`converterHexadecimal`).classList.remove('botao_selecionado')

    document.getElementById(`${menu}`).classList.add('botao_selecionado')

    document.getElementById('p_resultado').innerHTML = ''
}

document.addEventListener("DOMContentLoaded", alterarConteudoMainBase(10), alterarCorMenu('button_decimal'))