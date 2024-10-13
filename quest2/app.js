import { validateUser } from './logicadenegocios.js';
import { saveUser } from './dados.js';

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    const user = {
        name: name,
        age: age
    };

    // Valida o usuário
    if (validateUser(user)) {
        saveUser(user);
        document.getElementById('message').innerText = 'Usuário cadastrado com sucesso!';
    } else {
        document.getElementById('message').innerText = 'Idade insuficiente. Usuário deve ser maior de 18 anos.';
    }
});
