// Función para aplicar la transformación de Hadamard a un número
function applyHadamardTransformation(number) {
    const hadamardMatrix = [[1, 1], [1, -1]];
    const result = [0, 0];
    
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        result[i] += hadamardMatrix[i][j] * number[j];
      }
    }
    
    return result;
  }
  
  // Función para imprimir un arreglo en la consola
  function printArray(array) {
    console.log(`[${array.join(", ")}]`);
  }
  
  // Función para almacenar una clave encriptada usando transformación de Hadamard
  function storeEncryptedKey(username, password) {
    const key = password.split("").map(char => char.charCodeAt(0));
    
    console.log("Clave original:");
    printArray(key);
  
    const encryptedKey = applyHadamardTransformation(key);
  
    console.log("Clave encriptada:");
    printArray(encryptedKey);
    
    const user = {
      username: username,
      encryptedKey: encryptedKey
    };
    
    return user;
  }
  
  // Función para verificar la clave ingresada
  function verifyEncryptedKey(user, password) {
    const key = password.split("").map(char => char.charCodeAt(0));
    const encryptedInput = applyHadamardTransformation(key);
  
    return encryptedInput.every((value, index) => value === user.encryptedKey[index]);
  }
  
  // Almacenar la clave encriptada para el usuario "serdna"
  const storedUser = storeEncryptedKey("serdna", "1975");
  
  // Verificar la clave
  const isKeyCorrect = verifyEncryptedKey(storedUser, "1975");
  console.log("Clave correcta:", isKeyCorrect);
  