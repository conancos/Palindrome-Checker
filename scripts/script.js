let inputWords = document.getElementById("input-words")
const magicButton = document.querySelector(".magic-button")
let result = document.querySelector(".result-palindrome")
const pop = document.querySelector(".true-false")
const soundStrike = document.getElementById("sound-strike");
const soundFail = document.getElementById("sound-fail");

const mainMachine = document.querySelector('.main-machine');
    
magicButton.addEventListener("mouseup", (event) => {
    if (event.type === "mouseup" || (event.type === "keyup" && event.key === "Enter")) {
        let str = inputWords.value;
        console.log(palindrome(str));

        result.innerText = `${ palindromo }`;

        pop.classList.remove("true", "false");

        setTimeout(function () {
            if (palindrome(str) === true) {
                soundStrike.play();
                pop.innerText = "TRUE";
                pop.classList.add("true");
            } else {
                soundFail.play();
                pop.innerText = "FALSE";
                pop.classList.add("false");
            }
        }, 10);
    }
});

inputWords.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let mouseupEvent = new Event("mouseup");
        magicButton.dispatchEvent(mouseupEvent);
        /* let clickEvent = new Event("click"); 
        magicButton.dispatchEvent(clickEvent); */
        console.log(event.key);
    }
});

/* const containerImage = document.querySelector('.container-image'); */
/* containerImage.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});  Apuntando cuanto mas arriba(padres) los hijos burbujean*/

mainMachine.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}); // Apuntando al padre, los hijos burbujean. Destino image


