// Crea una función llamada rollDice() que reciba como parametro el numero de caras 
// que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
// Como hemos dicho, que la función use el parametro para simular una tirada de dado 
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
// preocupes! Busca información sobre la función de javascript Math.random()

function rollDice(caras) {
    // Generar un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
    const randomNumber = Math.random();
    // Escalar el número aleatorio al rango deseado de 1 a caras
    const resultado = Math.floor(randomNumber * caras) + 1;

    // Devolver el resultado de la tirada
    return resultado;
};

console.log(rollDice(6)); // Tirada de un dado de 6 caras