console.log('Async JS Demo.');

function getUser(name) {
  const user = users.find(u => {
    return u.name === name;
  });

  if (user) {
    console.log('  User found');
  } else {
    console.log('  User not found');
  }

  return user;
}

console.log('begin');

const name = 'ram1';
let user = getUser(name);
console.log('  user:', user);

console.log('end');

