const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

const fillSpan = (event) => {
    if (event.currentTarget.value) {
     return   span.textContent = event.currentTarget.value
    }
        
     span.textContent = `Anonymous`
}

input.addEventListener(`input`, fillSpan);

