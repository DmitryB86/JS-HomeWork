function summ(a, b) {
    return BigInt(a) + BigInt(b)
}
function minus(a, b) {
    return BigInt(a) - BigInt(b)
}
function multiple(a, b) {
    return BigInt(a) * BigInt(b)
}
function devide(a, b) {
    return BigInt(a) / BigInt(b)
}


let x = prompt('x?', 1);
let y = prompt('y?', 1);
// newOp:
let activ = prompt('Enter operation + - * or \\')

if (activ == '+') {
    alert(summ(x, y))
} else if (activ == '-') {
    alert(minus(x, y))
} else if (activ == '*') {
    alert(multiple(x, y))
} else if (activ == '/') {
    if (y == 0) {
        alert('Devision by zero!!!')
    } else {
        alert(devide(x, y))
    }
} else {
    alert('Wrong operation, try again');
    // newOp;
}

