/*
จงเขียนฟังก์ชัน filterRange(arr, a, b) 
เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

*/

const arr = [1,2,3,4,5,6,7,8,9,10]

filterRange(arr,5,8) //?


function filterRange(array,lowerBound,upperBound){

    // const resultArr = array.filter(item => item >= lowerBound && item <= upperBound )
    // return resultArr

    return array.filter(item => item >= lowerBound && item <= upperBound )
}
