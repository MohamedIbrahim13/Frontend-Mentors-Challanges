// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }
//   login() {
//     console.log(`Username:${this.username} + Password:${this.password}`);
//   }
// }

function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.updateProfile = function () {
  console.log(`${this.username} updated his profile`);
};
class Admin extends User {
  constructor(username, password, title) {
    super(username, password);
    this.title = title;
  }
  delUser(user) {
    users = users.filter(u => {
      return u.username !== user.username;
    });
  }
}
const userOne = new User("Joey", 123);
console.log(userOne);
const adminOne = new Admin("Mario", "test", "The Admin");

// userOne.login();

let users = [userOne, adminOne];
adminOne.delUser(userOne);
console.log(users);

function Updater(email, password, cusomizer) {
  User.call(this, email, password);
  this.cusomizer = cusomizer;
}

const newCustom = new Updater("hhhh", "222", "zzz");
console.log(newCustom);
