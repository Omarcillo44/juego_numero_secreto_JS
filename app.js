let numero_secreto = 0
let intentos = 0;
let lista_numeros_sorteados = []
let numero_maximo = 2;

function asignar_texto_elemento(elemento, texto){
    let elemento_HTML = document.querySelector(elemento);
    elemento_HTML.innerHTML = texto
}

function intento_del_usuario(){

    let numero_del_usuario = parseInt(document.getElementById('valor_usuario').value);
    if (numero_del_usuario === numero_secreto){
        asignar_texto_elemento('p', ("Acertaste el número en " + intentos + ((intentos === 1) ? ' intento':' intentos')))
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //No acertó
        if (numero_del_usuario > numero_secreto) {
            //No acertó
            asignar_texto_elemento('p', 'El número secreto es menor')
        } else {
            asignar_texto_elemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiar_caja();
    }
}

function limpiar_caja() {
    document.querySelector('#valor_usuario').value = '';
}

function generar_numero_secreto() {
    let numero_generado = Math.floor(Math.random() * numero_maximo)+1;

    //Si ya se sortearon todos los números
    if (lista_numeros_sorteados.length === numero_maximo){
        asignar_texto_elemento('p', 'Ya se sortearon todos los números posibles')
    }

    //Si el número generado está incluído en la lista
    if(lista_numeros_sorteados.includes(numero_generado)){
        return generar_numero_secreto();
    } else {
        lista_numeros_sorteados.push(numero_generado);
        return numero_generado;
    }
}

function condiciones_iniciales() {
    asignar_texto_elemento('h1', 'Juego del número secreto')
    asignar_texto_elemento('p', 'Indica un número del 1 al ' + numero_maximo)
    numero_secreto = generar_numero_secreto();
    intentos = 1;
}

function reiniciar_juego() {
    limpiar_caja();
    condiciones_iniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condiciones_iniciales();