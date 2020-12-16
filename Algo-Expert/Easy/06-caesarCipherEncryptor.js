function caesarCipherEncryptor(string, key) {
   let originalUni = [];

   for (let i = 0; i < string.length; i++) {
      // convert letter to unicode
      originalUni.push(string.charCodeAt(i));
   }
   return originalUni;

}