function checkAge (age) {
    if (age < 18) {
        console.log("Vous êtes mineur.");
    }
    if (age >= 18 && age <= 65) {
        console.log("Vous êtes majeur.");
    }
    if (age > 65) {
        console.log("Vous êtes senior.");
    }
}

checkAge(70);
export default checkAge;
