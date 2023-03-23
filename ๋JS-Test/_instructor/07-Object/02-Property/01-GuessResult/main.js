const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false; // update
  console.log(user); // * {email : 'cc@gmail.com', isActive : false};
  user = {}; 
  console.log(user); // ** Error : Assign to constant variable