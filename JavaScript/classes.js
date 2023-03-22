

class User {
    constructor(userID, password, fName, lName, age) {
      this.userID = userID;
      this.password = password;
      this.fName = fName;
      this.lName = lName;
      this.age = age;
    }
  
    logon() {
      console.log('Welcome');
    }
  
    logout() {
      console.log('Goodluck');
    }
  }
  
  class UserAdmin extends User {
    constructor(userID, password, fName, lName, age, permission) {
      super(userID, password, fName, lName, age);
      this.permission = permission;
    }
  
    grantPermission() {
      this.permission = 0;
      console.log('Permission granted');
    }
  }
  
  const userAdmin01 = new UserAdmin(901, 'password123', 'Somsak', 'JiamT', 77, 1);
  console.log(userAdmin01);
  userAdmin01.grantPermission();
  console.log(userAdmin01.permission);