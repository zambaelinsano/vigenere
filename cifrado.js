export function vigenereEncrypt(text, key) {
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
        result += text[i]; 
      }
    }
    return result;
  }
  
  export function vigenereDecrypt(text, key) {
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
        result += text[i];
      }
    }
    return result;
  }
  