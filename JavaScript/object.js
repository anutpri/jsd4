
const nickSkill = {
   
    Software: ['JS','HTML','CSS'],
    Hardware: ['Server', 'Switch', 'Firewall'],
    Systems: ['Vmware','Backups','Windows Server'],
    //Method to list all skills available
    mySkill() { 

        //Decalre variable to get nickSkill length
        const numberOfProperties = Object.keys(this).length;

        //Use for loop to log propertyName by < numberOfProperties
        for (let i = 0; i < numberOfProperties; i++) {

        //Decalre variable to get i (nickSkill current length)
          const propertyName = Object.keys(this)[i];

          //Log propertyName + ':'
          console.log(propertyName + ':');

          //Use for loop to log propertyName by index = j
          for (let j = 0; j < this[propertyName].length; j++) {

            //Log propertyName by index = j
            console.log('- ' + this[propertyName][j]);
          }
        }
      }
    };
 


  nickSkill.mySkill();