module.exports = function reverse (n) {
    let str = Math.abs(n).toString()
    let reverseStr = str.split("").reverse().join("");
    return Number(reverseStr)
}
