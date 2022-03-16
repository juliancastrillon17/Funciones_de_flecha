'use strict'; //Activa el modo stricto de JavaScript; 

window.addEventListener('load',function(){

    /*
        Julián Castrillón. 

        Ejercicio de funciones con flecha; 
        Creo un vector con números generados aleatoriamente
        del 1 al 20, de la misma manera utilizando método burbuja lo ordeno de forma ascendente y posteriormente
        dentro de la función, se le agrega un dato que indica el final del arreglo, con una palabra "fin";

        Versión: 1.0; 
        
    */

    let vector = [];
    let auxiliar = 0; 

    //Inicialización; 
    for(let i = 0; i<10; i+=1){
        let aleatorio = Math.ceil(Math.random()*10);
        vector[i] = aleatorio; 
    }

    //Ordenamiento; 
    for(let i = 0; i<10; i+=1){
        for(let j = 0; j<10; j+=1){
            if(vector[j]>vector[j+1]){
                auxiliar = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = auxiliar; 
            }
        }   
    }

    //Función; 
    let agregado = vector => {

        //Agregado de elemento que indica el fin del arreglo; 
        vector.push("Fin");

        //Impresión;
        for(let i = 0; i<vector.length; i+=1){
            console.log(vector[i]);
            document.write(vector[i]+"<br>");
        }
    }

    //Llamado a la función; 
    agregado(vector);
})

