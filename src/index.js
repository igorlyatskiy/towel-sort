// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix == "undefined" || matrix.length == 0) {
        return [];
    }
    newArray = [];
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                newArray[count] = matrix[i][j];
                count++;
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                newArray[count] = matrix[i][j];
                count++;
            }
        }
    }
    return newArray;
};
