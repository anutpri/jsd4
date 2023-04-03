let message = "Global"
function parent() {
  let message = "Parent"
  function child(message){
		//     
    // let message = "Child"
    console.log(message)
  }
  
  child("Text Parameter")
}
parent()