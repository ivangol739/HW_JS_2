function check(numb) {
    for (let i = 2; i < numb; i++) {
        if (numb % i === 0) {
            return false;
        }
    }
    return numb > 1;
}

function getlistprimes(par) {
    let listpr = [];
    for (let j = 2; listpr.length < par; j++) {
        if (check(j)) {
            listpr.push(j);
        }
    }
    return listpr;
}

console.time();
console.log(getlistprimes(process.argv[2]));
console.timeEnd();