/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del uno al diez ';
*/

// SE CREARA UNA FUNCION PARA NO REPETIR LAS MISMAS LINEAS DE CODIGO
let numeroSecreto =0;
let numeroIntentos =0;
let listaNumerosSorteados =[];

let nuemroMaximo =10;

function asignarTextoElementos(elemento, texto){
    let elementoHtTML = document.querySelector (elemento);
    elementoHtTML.innerHTML = texto;
}
function verificarIntento (){
    //let numeroUsuario = document.querySelector('input'); este metodo es para acceder desde el elmento
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);   //

    console.log (numeroIntentos);
    console.log(typeof(numeroUsuario));
    console.log (numeroUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroSecreto === numeroUsuario); //el triple igual indica que tiene que ser igual en valor y tipo de dato

    if(numeroSecreto === numeroUsuario){
        asignarTextoElementos('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElementos('p','El numero secreto es menor');
        }else {
            asignarTextoElementos('p', 'El numero es mayor ');
        }
        numeroIntentos ++;
        limpiarCaja()
    }
    return ;
}

function limpiarCaja(){
    let caja = document.querySelector('#valorUsuario').value = '';
    //caja.value = '';  esta es otra forma para limpiar 
}

function generarNumeroSecreto(){// el valor se esta guardando en el retorno
    
    let numeroGenerado = Math.floor(Math.random()*100+1);
    console.log("el numero generado es " + numeroGenerado);
    console.log(listaNumerosSorteados);

    //preguntemos si ya utilizamos todas las opciones

    if (listaNumerosSorteados.length == nuemroMaximo){
        asignarTextoElementos('p', 'ya utilizaste tods las posibilades ')
    }else{
        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
          listaNumerosSorteados.push(numeroGenerado);  
        }
        return numeroGenerado;
    }
}
        
function condicionesIniciales(){
    asignarTextoElementos('h1', 'Juego del numero secreto ');
    asignarTextoElementos('p', `Indica un numero del 1 al ${100}  `);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego(){
    //esta funcion hara muchas cosas: limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio "digite  un numero de 1 al ..
    //Generar el numero aleatorio
    //Inicializar el numero numeroIntentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();


let listaGenerica = [];
let listaLenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
listaLenguajesDeProgramacion.push('Java', 'Ruby', 'Goland');

function mostrarElementosLista(){
    console.log(listaLenguajesDeProgramacion);
}

function elementosListaInversos (lista){
    for (let i =lista.length-1 ; i>=0; i--){
        console.log(lista[i]);
    }
}

function promedioElementos (lista){
    let suma =0;
    for (let i = 0; i<=lista.length-1; i++){
        suma += lista[i];
    }
    suma = suma/ lista.length;
    console.log(suma);
}

function nuemroMayorMenor(lista){
    let menor = lista[0];
    let mayor = lista[0];

    for (let i =0; i<lista.length; i++){
        if (lista[i] > mayor){
            mayor =lista[i];
        }
        if (lista [i] < menor ){
            menor = lista[i];
        }
    }
    console.log(`El numero mayor es : ${mayor} y el numero menor es : ${menor}`);
}

function sumaElementos (lista){
    let suma =0 ;
    for (let i =0; i< lista.length; i++){
        suma += lista[i];
    }
    console.log(suma);
}

function posicionElemento (lista, elemento){
    for (let i = 0; i<lista.length ; i++){
        if (lista [i]===elemento){
            console.log("El elemento esta en la posicion :" + i);
            return;
        }
    }
    console.log("-1");
}

function  sumarElementosListas (lista1, lista2){
    let confirmacion = true ;
    let nuevaLista = [0];
    //reviso que tengan el mismo tamaño 
    if (lista1.length === lista2.length ){
        //reviso que se han de tipo nnumerico
        for (let j = 0 ; j< lista1.length ; j++){
            if (typeof lista1[j] !== 'number' || typeof lista2[j] !== 'number'){
                confirmacion = false;
                j = lista1.length-1;
                console.log ("Los elemetos tiene diferentes tipos de valores ")
            }
        }
        
    }else {
        confirmacion = false;
        console.log ("Las listas no tiene las mismas cantidad de caracteres ")
    }    
    if (confirmacion){
        for (let i =0; i <lista1.length ; i++){
            nuevaLista [i] = lista1[i]+ lista2[i];
        }
    }else{
        console.log("ingrese listas del tipo numerico y de igual tamaño ;")
    }
    console.log(nuevaLista);
}

function elementosAlCuadrado (lista){
    for (let i = 0; i< lista.length; i++){
        lista[i] = lista[i]**2;
    }
    console.log(lista)
}

let lista1 = [4, 8, 2 ,5,2];
let lista3 = [12,1, 32, 15, 9];
let lista4 = [14, "ma", 15, 2];

mostrarElementosLista();
elementosListaInversos(listaLenguajesDeProgramacion);
elementosListaInversos(lista4);
promedioElementos(lista3);
nuemroMayorMenor(lista3);
console.log(lista3)
sumaElementos(lista3);
posicionElemento(lista4,13);
sumarElementosListas(lista3, lista1);
elementosAlCuadrado(lista1);