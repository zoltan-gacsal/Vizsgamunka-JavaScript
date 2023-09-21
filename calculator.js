const screen = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
const btns = Array.from(buttons);

let currentInput = "";



btns.forEach(button => {
    button.addEventListener('click', (e) => {

        const inputValue = e.target.innerHTML;

        if (inputValue === 'DEL') {
            currentInput = "";
        }
        else if (inputValue === '=') {
            try {
                currentInput = eval(currentInput);
              } catch (error) {
                currentInput = 'Hiba';
              }            
        }
        else{
            currentInput += inputValue;
        }
        screen.textContent = currentInput;
    })
})