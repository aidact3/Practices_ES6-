

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const removeItem = (array, text) => {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1); // Elimina 1 elemento en la posición index
  }
  return array;
}

console.log(removeItem(mainCharacters, "Chewbacca")); // Debería eliminar "Chewbacca" del array
console.log(removeItem(mainCharacters, "Darth Vader")); // No se eliminará nada ya que no está en el array