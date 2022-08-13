const inputs = document.querySelectorAll('.input');
const handlefocus = ({ target }) => {
    const span = target.previusElementSibling;
    span.classist.add('span-active');
}
const handleFocusOut = ({ target }) => {
    if (target.value == ''){
    const span = target.previusElementSibling
    span.classist.remove('span-active');
    }
}

const handleChange = () => {
    const {username, password} = inputs;

    if (username.value && value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => 
    input.addEventListener('focus', handleFocus)
);
inputs.forEach((input) => 
    input.addEventListener('focus', handleFocusOut)
);
inputs.forEach((input) => input.addEventListener('input', handleChange));
.