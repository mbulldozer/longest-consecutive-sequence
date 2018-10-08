module.exports = function longestConsecutiveLength(array) {
    if (!array.length) {
        return 0;
    }
    const arr = array.sort((a, b) => a - b);
    const len = arr.length;
    let maxLength = 1;
    let currLength = 1;
    for (let i = 1; i < len; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            currLength++;
    } 
        else if (arr[i] - arr[i - 1] > 1) {
            maxLength = Math.max(currLength, maxLength);
            currLength = 1;
        }
    }
    return maxLength;
}
