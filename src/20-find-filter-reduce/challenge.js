/**
 * Reto: find, filter y reduce
 *
 * En este reto practicarás los tres métodos de orden superior más importantes
 * para trabajar con arreglos: find, filter y reduce.
 *
 * Conceptos clave:
 * - find: retorna el PRIMER elemento que cumple la condición (o undefined)
 * - filter: retorna TODOS los elementos que cumplen la condición (array vacío si no hay)
 * - reduce: acumula un resultado final recorriendo todo el array
 */

/**
 * Ejercicio 1: buscarNotaPorId
 *
 * Usa find para retornar la nota que tenga el id especificado.
 * Si no existe, retorna undefined.
 *
 * @param {Array} notas - Arreglo de objetos nota con propiedades: id, title, content, category
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} La nota encontrada o undefined
 */
function buscarNotaPorId(notas, id) {
  const nota = notas.find (n => n.id === id);
  return nota; 
}

/**
 * Ejercicio 2: buscarNotaPorTituloExacto
 *
 * Usa find para retornar la nota cuyo título coincida exactamente (===)
 * con el título buscado. La comparación debe ser sensible a mayúsculas/minúsculas.
 *
 * @param {Array} notas - Arreglo de notas
 * @param {string} titulo - El título exacto a buscar
 * @returns {Object|undefined} La nota encontrada o undefined
 */
function buscarNotaPorTituloExacto(notas, titulo) {
  const nota = notas.find(n => n.title === titulo);
  return nota;
}

/**
 * Ejercicio 3: filtrarNotasPorCategoria
 *
 * Usa filter para retornar todas las notas que pertenezcan
 * a la categoría especificada.
 *
 * @param {Array} notas - Arreglo de notas
 * @param {string} categoria - La categoría a filtrar
 * @returns {Array} Arreglo con las notas de esa categoría (vacío si no hay)
 */
function filtrarNotasPorCategoria(notas, categoria) {
  const notasCategoria = notas.filter(nota => nota.category === categoria);
  return notasCategoria;
}

/**
 * Ejercicio 4: filtrarNotasPorLongitudMinima
 *
 * Usa filter para retornar todas las notas cuyo content tenga
 * una longitud mayor o igual a la especificada.
 *
 * @param {Array} notas - Arreglo de notas
 * @param {number} longitudMinima - Cantidad mínima de caracteres
 * @returns {Array} Notas que cumplan la condición
 */
function filtrarNotasPorLongitudMinima(notas, longitudMinima) {
  const notasLargas = notas.filter(nota => nota.content.length >= longitudMinima);
  return notasLargas;
}

/**
 * Ejercicio 5: sumarIds
 *
 * Usa reduce para sumar todos los id de las notas.
 * El valor inicial del acumulador debe ser 0.
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {number} La suma de todos los ids
 */
function sumarIds(notas) {
  const sumaIDs = notas.reduce((acc, nota) => acc + nota.id, 0);
  return sumaIDs;
}

/**
 * Ejercicio 6: concatenarTitulos
 *
 * Usa reduce para concatenar todos los títulos de las notas
 * separados por un guión (-). El valor inicial debe ser string vacío "".
 *
 * Ejemplo: [{title: "A"}, {title: "B"}] → "A-B"
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {string} String con los títulos concatenados
 */
function concatenarTitulos(notas) {
  const notasConcatenads = notas.reduce((acc, nota, indice) =>{
    if (indice===0){
      return nota.title;
    }
    return acc + "-" + nota.title; 
  }, "" );
  return notasConcatenads;
}

/**
 * Ejercicio 7: contarNotasPorCategoria (Reto avanzado)
 *
 * Usa reduce para contar cuántas notas existen por cada categoría.
 * El acumulador debe ser un objeto vacío {}.
 *
 * Ejemplo de resultado: { trabajo: 2, personal: 1, estudio: 3 }
 *
 * Tip: En cada iteración, usa la categoría de la nota como clave del objeto.
 * Si la clave no existe, inicialízala en 0, luego incrementa.
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {Object} Objeto con categorías como claves y conteos como valores
 */
function contarNotasPorCategoria(notas) {
  const notasPorCategoria = notas.reduce((acc, nota, index) =>{

    if(nota.category in acc ) {
      acc[nota.category]++;
    }else{
      acc[nota.category]=1;
    }
    return acc;

  },{} );

  return notasPorCategoria;
}

/**
 * Ejercicio 8: calcularPromedioDeIds
 *
 * Usa reduce para calcular el promedio de todos los ids.
 * Primero suma todos los ids, luego divide por la cantidad de notas.
 *
 * @param {Array} notas - Arreglo de notas
 * @returns {number} El promedio de los ids
 */
function calcularPromedioDeIds(notas) {
  if (notas.length === 0) {return 0};
  const sumaIDs = notas.reduce((acc, nota) => acc + nota.id, 0);
  return (sumaIDs / notas.length);
}

export {
  buscarNotaPorId,
  buscarNotaPorTituloExacto,
  filtrarNotasPorCategoria,
  filtrarNotasPorLongitudMinima,
  sumarIds,
  concatenarTitulos,
  contarNotasPorCategoria,
  calcularPromedioDeIds,
};
