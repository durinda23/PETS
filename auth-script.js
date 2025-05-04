const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('auth-tab--active');
    registerTab.classList.remove('auth-tab--active');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('auth-tab--active');
    loginTab.classList.remove('auth-tab--active');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});