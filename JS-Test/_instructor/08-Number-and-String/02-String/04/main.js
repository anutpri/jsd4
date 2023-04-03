
function wordDectection (str) {
    // #1 Normalize
    let lowerStr = str.toLowerCase()

    // #2 Check
    let isMatch = lowerStr.includes('xxx') || lowerStr.includes('porn') || lowerStr.includes('sex')

    return isMatch
}

console.log(wordDectection("sex"))
console.log(wordDectection("porn"))
console.log(wordDectection("xxx"))

console.log(wordDectection("SEX"))
console.log(wordDectection("PORN"))
console.log(wordDectection("XXX"))

console.log(wordDectection("SeX"))
console.log(wordDectection("pOrN"))
console.log(wordDectection("XxX"))

console.log(wordDectection("S1X"))
console.log(wordDectection("P0RN"))
console.log(wordDectection("X7X"))