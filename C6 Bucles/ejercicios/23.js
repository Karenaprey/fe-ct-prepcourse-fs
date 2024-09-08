function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) return false;
  
  if (numero === 2 || numero === 3) return true;
  
  if (numero % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) return false; 
  }
  return true;
  
}

module.exports = esNumeroPrimo;
