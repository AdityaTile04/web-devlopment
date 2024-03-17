//! Array Methods

//! 1.push method
// add to end

// Example 1
let cars = ["audi", "bmw", "maruti", "mahindra"];
let addCar = cars.push("toyota");
console.log(cars);

// Exapmple 2
let friends = ["Aditya", "Saurabh", "Rushi", "Kunal"];
let addFriends = friends.push("Vishal");
console.log(friends);

// Example 2
let info = ["Aditya", 70, 8.5];
let addInfo = info.push("A");
console.log(info);

//! 2.pop method
// delete from end & return it

// Example 1
let companies = ["Facebook", "Microsoft", "Adobe", "JP Morgan", "Netflix"];
let delComp = companies.pop();
console.log(companies);

// Exapmle 2
let fruits = ["Mango", "Apple", "Grapes", "Orange", "Papaya"];
let delFru = fruits.pop();
console.log(fruits);

// Example 3
let numbers = [10, 20, 30, 40, 50, 60];
let detNum = numbers.pop();
console.log(numbers);

//! 3.unshift method
// add to start

// Example 1
let names = ["Aditya", "Gaurav", "Kunal"];
let addName = names.unshift("Nikhil");
console.log(names);

// Exapmle 2
let brands = ["Samsung", "Vivo", "Oneplus"];
let addBrand = brands.unshift("Apple");
console.log(brands);

// Example 3
let nums = [40, 60, 80, 100];
let addNum = nums.unshift(20);
console.log(nums);

//! 4.shift method
// delete from start & return it

// Example 1
let subjects = ["Maths", "Physics", "Boilogy", "Chemitry"];
let delSub = subjects.shift();
console.log(subjects);
console.log(delSub);

// Example 2
let followers = ["a", "b", "c", "d"];
let delFoll = followers.shift();
console.log(followers);
console.log(delFoll);

// Example 3
let animals = ["Tiger", "Lion", "Elephant"];
let delAni = animals.shift();
console.log(animals);
console.log(delAni);
