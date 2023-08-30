<?php
// Función para aplicar la transformación de Hadamard a un número
function applyHadamardTransformation($number) {
    $hadamardMatrix = [[1, 1], [1, -1]];
    $result = [0, 0];
    
    for ($i = 0; $i < 2; $i++) {
        for ($j = 0; $j < 2; $j++) {
            $result[$i] += $hadamardMatrix[$i][$j] * $number[$j];
        }
    }
    
    return $result;
}

// Función para almacenar una clave encriptada usando transformación de Hadamard
function storeEncryptedKey($username, $password) {
    $key = array_map('ord', str_split($password));
    
    $encryptedKey = applyHadamardTransformation($key);
    
    $user = [
        "username" => $username,
        "encryptedKey" => $encryptedKey
    ];
    
    return $user;
}

// Función para verificar la clave ingresada
function verifyEncryptedKey($user, $password) {
    $key = array_map('ord', str_split($password));
    $encryptedInput = applyHadamardTransformation($key);

    return $encryptedInput === $user["encryptedKey"];
}

// Almacenar la clave encriptada para el usuario "serdna"
$storedUser = storeEncryptedKey("serdna", "1975");

// Verificar la clave
$isKeyCorrect = false;
if (isset($_POST["password"])) {
    $isKeyCorrect = verifyEncryptedKey($storedUser, $_POST["password"]);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Simulador de Clave Criptográfica</title>
</head>
<body>
    <h1>Simulador de Clave Criptográfica</h1>
    <form method="post">
        <label for="password">Ingrese su clave:</label>
        <input type="password" name="password" required>
        <button type="submit">Verificar</button>
    </form>
    <?php if (isset($_POST["password"])): ?>
        <?php if ($isKeyCorrect): ?>
            <p>¡Clave correcta!</p>
        <?php else: ?>
            <p>Clave incorrecta</p>
        <?php endif; ?>
    <?php endif; ?>
</body>
</html>
