console.log('Async JS Demo.');

function getUser(name, cb) {
  // issue AJAX - HTTP request to the server - 4 seconds
  console.log('  started searching user...');

  setTimeout(() => {
    const user = users.find(u => {
      return u.name === name;
    });

    if (user) {
      // success
      cb(null, user);
    } else {
      // failure
      cb('  User not found');
    }
  }, 4000);

  // return undefined;
}

console.log('begin');

const name = 'ram';
let user = getUser(name, (error, user) => {
  if (error) {
    console.log('ERROR:', error);
    return;
  }

  console.log('SUCCESS user:', user);
  // getPosts(user.id, (error, posts) => {
  //   if (error) {
  //     console.log('ERROR:', error);
  //     return;
  //   }

  //   console.log('SUCCESS posts:', posts);
  // });
});

console.log('  some other operation (independent).');

console.log('end');
