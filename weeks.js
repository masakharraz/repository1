//week3.d1
//task1
function securityCheck(usersData) {
  return usersData.map(user => {
    let password = user.user.password;
    user.user.flag = password.length >= 8;
    
    if (/^[a-z]+$/.test(password)) {
      user.user.passwordHealth = 'weak';
    } else if (/^[a-z0-9]+$/.test(password)) {
      user.user.passwordHealth = 'normal';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).+$/.test(password)) {
      user.user.passwordHealth = 'strong';
    } else {
      user.user.passwordHealth = 'normal';
    }
    return user;
  });
}

let usersData = [
  { user: { email: 'majd@rbk.org', password: '_majd(2017)' } },
  { user: { email: 'fatema@rbk.org', password: '12345' } },
  { user: { email: 'maher@rbk.org', password: 'M@her2017' } },
  { user: { email: 'sahar@rbk.org', password: 'saher2017' } }
];

console.log(securityCheck(usersData));