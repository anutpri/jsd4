// function getMenu() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const menu = [
//         { id: 1, name: "Espresso", price: 50 },
//         { id: 2, name: "Cappuccino", price: 60 },
//         { id: 3, name: "Latte", price: 70 },
//       ];
//       resolve(menu);
//     }, 1000);
//   });
// }

// function getProducts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const products = [
//         { id: 1, name: "Coffee Beans", price: 150 },
//         { id: 2, name: "Milk", price: 20 },
//         { id: 3, name: "Sugar", price: 10 },
//       ];
//       resolve(products);
//     }, 2000);
//   });
// }

// Promise.all([getMenu(), getProducts()])
//   .then(([menu, products]) => {
//     console.log("Menu:", menu);
//     console.log("Products:", products);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const now = new Date();
const currentHour = now.getHours();
let is_shop_open = true; 

//check is_shop_open by time
if (currentHour >= 21 || currentHour < 9) {
  is_shop_open = false;
} else {
    is_shop_open = true;
}

let stocks =  {
    coffee: [ "cappuccino", "latte" ,"mocha"],
    liquid: ["hot","ice","milk"],
    cup:["small","midium","large"],
    topping:["chocolate", "milk"]         
};




let order = (time, work) =>{ // work and time 2. customer order

    return new Promise((resolve, reject) =>{ // 3. we promise customer
        if (is_shop_open){

            setTimeout(() =>{ 
                resolve(work ())
            },time)  //now we have work and time
           
        }else {
            reject(console.log('the shop is closed'));
        }
    });
}

order(2000, () => console.log(`${stocks.coffee[0]} was selected`)) // 1. place order 2 second

.then(()=>{ //no ; before then
    return order(0000,()=>console.log('started making coffee')); //need to return 2. production started 0 seconds
})

.then(() =>{
    return order(2000,()=>console.log('coffee bean in process')); //need to return 3. 
})

.then(()=>{
    return order(2000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)); //need to return 4. water and ice was selected
})

.then(()=>{
    return(1000, () => console.log('coffee mixed'))
})

.then(() =>{
    return order(2000,()=>console.log(`${stocks.cup[0]}`));
})

.then(() =>{
    return order(3000,()=>console.log(`${stocks.topping[0]} was selected`));
})

.then(() =>{
    return order(1000,()=>console.log('coffee was served'));
})


.catch(()=>{

    console.log('ขออภัยในความไม่สะดวกร้านยังไม่เปิดบริการค่ะ');

})

.finally(()=>{
    console.log('รับขนมจีบซาลาเปาเพิ่มไม๊คะ');
});