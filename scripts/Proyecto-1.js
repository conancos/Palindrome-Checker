//Comprobador de palíndromos - Palindrome Checker
let blanqueado;
let palindromo;

function palindrome(str) {

    blanqueado = str.replace(/[^\w]|_/gi, '').toLowerCase();
    /* let blanqueado = str.replace(/[^\a-zA-Z0-9\^s]|/gi, '').toLowerCase(); */
    console.log(blanqueado, "=> Blanqueado")

    palindromo = blanqueado.split('').reverse().join('');
    console.log(palindromo, "=> Palíndromo")

    return (palindromo === blanqueado);
}
// let wordPal = prompt("Comprobador de palíndromos : ")

// console.log(palindrome(`${ wordPal }`));

// console.log(palindrome("_eye0*-"), " ❌ Para la 1ª llamada.");
// console.log(palindrome("eye/-'_0_'\ey e"), " ✅ Para la 2ª llamada");