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
  deleteMessage: function (index) {},
};
