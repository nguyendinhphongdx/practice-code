// console.log(1 == true);
// console.log(2 == true);
// console.log(1 === true);

// console.log("1" == true);
// console.log("a" == true);
// console.log("a" == 1);


// console.log(null == undefined);
// console.log(null === undefined);

// console.log(0 == undefined);
// console.log(0 == null);

// console.log(false == null);
// console.log(false == undefined);


// var person1 = {
//   name:"James"
// }
// var person2 = {
//   name:"James"
// }

// console.log(person1 == person2);
// console.log(person1 === person2);

// var a = [1, 2, 3];
// var b = a;
// b[1] = 5;
// console.log(a[1]);

// var vehicals = {
// 	car : {
// 		name: 'Honda',
// 		price: 1000
// 	}
// };

// function changePrice(item){
// 	item.price = 2000;
// }

// changePrice(vehicals.car);

// console.log(vehicals.car.price);

// function findCommonElements(arr1, arr2) {
//     const countMap1 = new Map();
//     const countMap2 = new Map();
//     const commonElements = [];

//     for (const num of arr1) {
//         countMap1.set(num, (countMap1.get(num) || 0) + 1);
//     }

//     for (const num of arr2) {
//         countMap2.set(num, (countMap2.get(num) || 0) + 1);

//         if (countMap1.has(num) && countMap1.get(num) === countMap2.get(num)) {
//             commonElements.push(num);
//         }
//     }

//     return commonElements;
// }
// const a = [1, 2, 3, 3, 4, 4];
// const b = [2, 3, 4, 5, 4];

// console.log(findCommonElements(a, b)); // Result: [2, 4]

var person = new function __Person(){
    this._name = null;
    this._age = 0;
    
    this.init = function(name, age){
        this._name = name;
        this._age = age;
      show();
    }
    
    function show(){
        console.log(this._name + ':' + this._age);
    }
    }();
    
    person.init('James', 18);