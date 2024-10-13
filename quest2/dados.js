const users = [];

export function saveUser(user) {
    users.push(user);
    console.log('Usuário salvo com sucesso:', user);
}
