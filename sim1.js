// Definir el estado inicial de los qubits
let qubits = [
  [1, 0], // Qubit 0 in state |0>
  [1, 0]  // Qubit 1 in state |0>
];

// Función para aplicar la puerta X (NOT) a un qubit
function applyXGate(qubitIndex) {
  qubits[qubitIndex] = [qubits[qubitIndex][1], qubits[qubitIndex][0]];
}

// Función para aplicar la puerta H (Hadamard) a un qubit
function applyHGate(qubitIndex) {
  const hadamardMatrix = [
    [1 / Math.sqrt(2), 1 / Math.sqrt(2)],
    [1 / Math.sqrt(2), -1 / Math.sqrt(2)]
  ];

  const newQubit0 = hadamardMatrix[0][0] * qubits[qubitIndex][0] + hadamardMatrix[0][1] * qubits[qubitIndex][1];
  const newQubit1 = hadamardMatrix[1][0] * qubits[qubitIndex][0] + hadamardMatrix[1][1] * qubits[qubitIndex][1];

  qubits[qubitIndex] = [newQubit0, newQubit1];
}

// Función para aplicar la puerta CNOT a dos qubits (control y target)
function applyCNOT(controlIndex, targetIndex) {
  if (qubits[controlIndex][0] === 1) {
    qubits[targetIndex] = [qubits[targetIndex][1], qubits[targetIndex][0]];
  }
}

// Función para entrelazar los qubits
function applyEntanglement() {
  qubits[1] = qubits[0]; // Qubit 1 becomes entangled with Qubit 0
}

// Mostrar el estado actual de los qubits
function showQubitsState() {
  console.log(`Qubit 0: [${qubits[0][0]}, ${qubits[0][1]}]`);
  console.log(`Qubit 1: [${qubits[1][0]}, ${qubits[1][1]}]`);
}

// Aplicar operaciones a los qubits
applyHGate(0); // Aplicar puerta H a Qubit 0
applyEntanglement(); // Entrelazar los qubits
applyCNOT(0, 1); // Aplicar puerta CNOT con Qubit 0 como control y Qubit 1 como objetivo

// Mostrar el estado final de los qubits
showQubitsState();
