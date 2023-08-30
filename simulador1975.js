// Función para convertir un número decimal a binario
function decimalToBinary(decimal) {
    return decimal.toString(2);
  }
  
  // Crear un qubit en el estado binario del número 1975
  const binaryString = decimalToBinary(1975);
  const initialQubit = new Qubit(1, 0);
  
  // Aplicar compuerta de Hadamard al qubit inicial
  const qubitAfterHadamard = hadamardGate(initialQubit);
  
  // Aplicar el código de repetición cuántico
  const repeatedQubits = quantumRepetitionCode(qubitAfterHadamard);
  
  // Imprimir los resultados
  console.log("Número en binario:", binaryString);
  console.log("Estado del qubit después de Hadamard:", qubitAfterHadamard);
  console.log("Código de repetición cuántico:", repeatedQubits);
  