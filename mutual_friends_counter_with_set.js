//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //

const countMutualFriends = (userA, userB) => {
  const mutual = [];

  const idListA = new Set(userA.map((user) => user.id));

  userB.forEach((user) => {
    if (idListA.has(user.id)) {
      mutual.push(user);
    }
  });

  return mutual.length;
};

console.log("Total Mutual Friends: ", countMutualFriends(usersA, usersB)); // Expected output: 25000
