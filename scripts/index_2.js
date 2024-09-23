// 5 types de variable :
// 3 primitives : string, number, boolean

// 2 complexes : array, object

let arr1 = [12, 13, 14]
let arr2 = [4, 32, 21]
let arr3 = [12, 77, 31]

let sum1 = 0

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        sum1 += arr1[i];
    }
}

console.log(sum1)

let sum2 = 0
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        sum2 += arr2[i];
    }
}

console.log(sum2)

let sum3 = 0
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        sum3 += arr3[i];
    }
}

console.log(sum3)

function addTen(firstParameter) {
    const result = firstParameter + 10
    return result
}

function substractFive(nb) {
    const result = nb - 5
    return result
}

function multiplyByTwo(nb) {
    const result = nb * 2
    return result
}

const nb1 = addTen(12)
const removedNb = substractFive(nb1)
const finalResult = multiplyByTwo(removedNb)

console.log(finalResult)