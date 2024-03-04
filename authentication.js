//verify user and password input
const form = document.querySelector('form');
const username = form.querySelector('#user');
const password = form.querySelector('#password');

// default user and password
const defaultUser = 'admin';
const defaultPassword = '1234';

const userField = form.querySelector('.username');
const passwordField = form.querySelector('.password');

const button = form.querySelector('.confirmButton');

//changer la couleur du bouton de soumission uniquement si les deux input sont remplis
form.addEventListener('input', () => {
    if(username.value !== '' && password.value !== '') {
        button.style.backgroundColor = '#1D2939';
    } else {
        button.style.backgroundColor = '#607188';
    }
})

//verifier si les input sont corrects et soumettre le formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(username.value === defaultUser && password.value === defaultPassword) {
        window.location.href = './admin home page/adminHome.html';
    } else if(username.value !== defaultUser && password.value === defaultPassword) {
        userField.classList.add('error');
        passwordField.classList.remove('error');
    }
    else if(username.value === defaultUser && password.value !== defaultPassword) {
        passwordField.classList.add('error');
        userField.classList.remove('error');
    }
    else {
        userField.classList.add('error');
        passwordField.classList.add('error');
    }
})

