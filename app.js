// Función para cifrar con el cifrado Vigenère
function vigenereEncrypt(text, key) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    if (alphabet.includes(char)) {
      const textCharIndex = alphabet.indexOf(char);
      const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length].toUpperCase());
      const encryptedCharIndex = (textCharIndex + keyCharIndex) % 26;
      result += alphabet[encryptedCharIndex];
      keyIndex++;
    } else {
      result += text[i]; // Mantener los caracteres no alfabéticos
    }
  }
  return result;
}

// Función para descifrar con el cifrado Vigenère
function vigenereDecrypt(text, key) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    if (alphabet.includes(char)) {
      const textCharIndex = alphabet.indexOf(char);
      const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length].toUpperCase());
      const decryptedCharIndex = (textCharIndex - keyCharIndex + 26) % 26;
      result += alphabet[decryptedCharIndex];
      keyIndex++;
    } else {
      result += text[i]; // Mantener los caracteres no alfabéticos
    }
  }
  return result;
}

// Conectar la interfaz con los botones y campos
document.getElementById('encryptBtn').addEventListener('click', function() {
  const text = document.getElementById('text').value;
  const key = document.getElementById('key').value;
  const encrypted = vigenereEncrypt(text, key);
  document.getElementById('encryptedText').textContent = encrypted;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
  const text = document.getElementById('encryptedText').textContent;
  const key = document.getElementById('key').value;
  const decrypted = vigenereDecrypt(text, key);
  document.getElementById('decryptedText').textContent = decrypted;
});
