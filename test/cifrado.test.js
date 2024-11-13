(async () => {
  const { assert } = await import('chai');

  // Función de cifrado Vigenère
  function cifradoVigenere(texto, clave) {
    let resultado = '';
    let i = 0;
    for (let char of texto) {
      if (/[a-zA-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const offset = char.toUpperCase() === char ? 65 : 97;
        const claveCode = clave.charCodeAt(i % clave.length) - offset;
        const nuevoChar = String.fromCharCode(((charCode - offset + claveCode) % 26) + offset);
        resultado += nuevoChar;
        i++;
      } else {
        resultado += char;
      }
    }
    return resultado;
  }

  describe('Cifrado Vigenère', function() {
    it('Debería cifrar el texto correctamente', function() {
      const textoOriginal = 'texto';
      const clave = 'clave';
      const textoCifrado = cifradoVigenere(textoOriginal, clave);
      assert.equal(textoCifrado, 'vpxos');
    });

    it('Debería descifrar el texto correctamente', function() {
      const textoCifrado = 'vpxos';
      const clave = 'clave';
      const textoDescifrado = cifradoVigenere(textoCifrado, clave);
      assert.equal(textoDescifrado, 'texto');
    });

    it('Debería mantener los caracteres especiales sin cifrar', function() {
      const textoOriginal = 'texto con espacios!';
      const clave = 'clave';
      const textoCifrado = cifradoVigenere(textoOriginal, clave);
      assert.equal(textoCifrado, 'vpxos jsv vygswc!');
    });

    it('Debería mantener los caracteres especiales sin descifrar', function() {
      const textoCifrado = 'vpxos jsv vygswc!';
      const clave = 'clave';
      const textoDescifrado = cifradoVigenere(textoCifrado, clave);
      assert.equal(textoDescifrado, 'texto con espacios!');
    });
  });
})();
