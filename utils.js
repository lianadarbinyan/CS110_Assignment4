


/* 1 */
function matrixProduct(mat1, mat2) {
    let product = [];
    for (let i = 0; i < mat1.length; ++i) {
        product[i] = [];
        for (let j = 0; j < mat1[0].length; ++j) {
            let sum = 0;
            for (let k = 0; k < mat2[0].length; ++k) {
                sum += mat1[i][k] * mat2[k][j];
            }
            product[i][j] = sum;
        }
    }
    return product;
}

let mat1 = [
    [1,2],
    [3,4]
]
let mat2 = [
    [5,6],
    [7,8]
]

console.log(matrixProduct(mat1, mat2))



// let matProduct = matrixProduct(mat1, mat2)
// console.log(matProduct)






/* 2 */
function sumOfMatrices(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        console.log('Your matrices does not contain the same number of elements!');
        return;
    }
    for (let row = 0; row < mat1.length; ++row) {
        for (let col = 0; col < mat2[0].length; ++col) {
            mat1[row][col] += mat2[row][col]
        }
    }
    return mat1;
}

// let mat1 = [
//     [1,2],
//     [3,4]
// ]
// let mat2 = [
//     [5,6],
//     [7,8]
// ]

console.log(sumOfMatrices(mat1, mat2));





/* 3 */
function sumOfArray(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; ++i) {
        value += arr[i];
    }
    return value;
}

function sumOfEachRow(mat) {
    let k = 0;
    let arr2 = [];
    for (let row = 0; row < mat.length; ++row) {
        k += sumOfArray(mat[row]);
        arr2.push(k)
    }
    return arr2;
}

let mat = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

console.log(sumOfEachRow(mat));







module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
}

