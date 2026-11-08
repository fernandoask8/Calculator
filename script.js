function InserirNoDisplay(data){ //incrementa o valor do display, assim que o botão é clicado.
    document.getElementById("display").value += data 
    
}

function ApagarNoDisplay(data){ //valor do display vira um nada "", então é como se apagasse tudo.
    document.getElementById('display').value=""
}

function ApagarUmDisplay(data){ //display.value.slice corta um digito, e o escolhido é o -1 que é igual o ultimo.
  let display = document.getElementById('display')
  display.value = display.value.slice(0, -1)
}

function Result(){ // o valor do display será o eval(display.value) ou seja, eval faz a conta do que tiver como valor no display e coloca nessa variavel.
    let display = document.getElementById('display')
    try{ display.value = eval(display.value) //eval encontra os simbolos e ja faz a equação de forma automatica.
    }
    catch{
        display.value = 'Error' //se não tiver uma conta certa, por exemlo, 8++9, o resultado mostrado é erro.
    }
}