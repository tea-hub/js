//pirveli
alert( null || 2 && 3 || 4 ) //3


//meotxe
function checkAge(age) {
    if (age > 18 || = 18) {
       return true; 
    } else {
       return confirm('Did parents allow you?');
       }
    }


    //meore
 function checkage(age) {
     if (age > 14 && < 90 ) {
         return true;
     }
     else {
         return false;
     }
 }

 //mexute
 function min(2, 3) {
    if (2 < 3) {
      return 2;
    } else {
      return 3;
    }
  }

  let login = prompt("please log in",'');
  
  if  (login == 'admin' ) {
      let password = prompt('password');
      if (password=='themaster') {
          alert ('welcome');
      } else if (password=='' || password==undefined) {
          alert('canceled');
      } else {
          alert('wrong password');
      }

  }


