// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.



// 1.1 Ejecuta esta función sin pasar ningún parametro
const suma = ( a = 10 , b = 5 ) => {
  console.log( a + b );
}
suma();

// 1.2 Ejecuta esta función pasando un solo parametro
const suma2 = ( a , b = 5 ) => {
  console.log( a + b );
}
suma2(10);

// 1.3 Ejecuta esta función pasando dos parametros
const suma3 = ( a , b ) => {
  console.log( a + b );
}
suma3(10, 5);