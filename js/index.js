const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQuard(a, b, c);
document.write(result);

function solveQuard(a, b, c) {
    const discr = calcD(a, b, c);
    if (discr > 0) {

        const x1 = (-b + Math.sqrt(discr)) / (2 * a);
        const x2 = (-b - Math.sqrt(discr)) / (2 * a);
        return 'x1 = ' + x1 + ', x2 = ' + x2;

    }
    if (discr < 0) {
        return ('no win');

    }
    if (discr === 0) {
        const x1 = (-b) / (2 * a);
    }
    return 'x = ' + (-b + Math.sqrt(discr)) / (2 * a);

}

function calcD(a, b, c) {
    return b ** 2 - 4 * a * c;
}
