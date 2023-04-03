function extractCurrencyValue(string, rate) {

    let converted = Number(string.slice(1)) * rate

    return 'THB ' + converted
}

console.log(extractCurrencyValue('$120',30))