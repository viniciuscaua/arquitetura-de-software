export function validateUser(user) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}
