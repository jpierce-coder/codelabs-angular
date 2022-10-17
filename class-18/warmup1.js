let users = [
  {
    username: "John123",
    confirmation_email: true
  }, 
  {
    username: "Amy123",
    confirmation_email: false
  },
  {
    username: "Jamie123",
    confirmation_email: true
  }
]


const userTrue = users.filter(user => user.confirmation_email === true);
console.log(userTrue);
