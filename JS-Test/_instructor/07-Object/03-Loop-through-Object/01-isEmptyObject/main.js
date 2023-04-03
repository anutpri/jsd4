// INPUT : Object ที่ใช้ตรวจสอบ
// OUTPUT : true == Object ว่าง ไม่มี key   , false ==  Ob่่ject มีอย่างน้อย 1 key 

function isEmptyObject (obj) {

  // เข้า for loop เมื่อ object มี 1 key ขึ้นไป
  for(let key in obj) {
      console.log(key)
      return false 
  }
  // มีเฉพาะ 0 key ที่หลุดมาบรรทัดนี้ได้
  return true
}

const user_1 = {name : "CC12"}
const user_2 = {name : "Codecamp", cohort:12}
const user_3 = {}

console.log(isEmptyObject(user_1))  // true, false
console.log(isEmptyObject(user_2))  // true, false
console.log(isEmptyObject(user_3))  // true, false
console.log(isEmptyObject({name: "CC", age : 12}))  // on the fly object