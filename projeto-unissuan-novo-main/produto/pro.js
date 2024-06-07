document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;
    const messageDiv = document.getElementById('message');

    let message = '';
    let isValid = true;

    if (!nome || !email || !password || !confirmPassword || !dob || !terms) {
        message = 'Todos os campos são obrigatórios.';
        isValid = false;
    } else if (password !== confirmPassword) {
        message = 'As senhas não coincidem.';
        isValid = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
        message = 'A data de nascimento deve estar no formato dd/mm/aaaa.';
        isValid = false;
        else if()
    }

    if (isValid) {
        message = 'Cadastro realizado com sucesso!';
    }

    messageDiv.textContent = message;
    messageDiv.style.color = isValid ? 'green' : 'red';
});