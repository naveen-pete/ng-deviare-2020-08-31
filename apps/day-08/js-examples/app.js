console.log('Async JS Demo. (Promise demo)');

function getUser(name) {
  console.log('  started searching user...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => {
        return u.name === name;
      });

      if (user) {
        // success
        resolve(user);
      } else {
        // failure
        reject('User not found');
      }
    }, 4000);
  });
}

console.log('begin');

const name = 'ram';
getUser(name)
  .then((user) => {
    console.log('user:', user);
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });

console.log('  some other operation (independent).');

console.log('end');

