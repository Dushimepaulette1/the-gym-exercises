/* Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
Your Code:*/
let facebookProfile = {
  name: "Dushime paulette",
  numberOfFriends: 1,
  messages: ["It's my birthday", "happy", "sad", "God is good"],
  postMessage: function (message) {
    this.messages.push(message);
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1); //removes elements from the provided index and removes only 1 item
  },
  addFriend: function () {
    this.numberOfFriends++;
  },
  removeFriend: function () {
    this.numberOfFriends--;
  },
};
facebookProfile.postMessage("we love RnB");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
facebookProfile.addFriend();
console.log(facebookProfile.numberOfFriends);
facebookProfile.removeFriend();
console.log(facebookProfile.numberOfFriends);
