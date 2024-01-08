const $a = [2, 3, 2];
const $b = [2, 3, 2];

function compare_array(arra, arrb) {
    if (arra.length != arrb.length) return false;
    const mapA = {};
    const mapB = {};

    for (let i = 0; i < arra.length; i++) {
        if (!mapA[arra[i]]) mapA[arra[i]] = 1;
        else mapA[arra[i]] += 1;

        if (!mapB[arrb[i]]) mapB[arrb[i]] = 1;
        else mapB[arrb[i]] += 1;

    }

    for (const key in mapA) {
        if (Object.hasOwnProperty.call(mapB, key)) {
            if (mapA[key] !== mapB[key]) return false;
        } else {
            return false;
        }
    }
    return true;
}
// console.log(compare_array($a, $b));

function lis(arr) {
    var s = new Set();
    for (var i = 0; i < arr.length; i++) {

        if (!s.has(arr[i])) {
            s.add(arr[i]);

            var nextGreater = Array.from(s).filter(x => x > arr[i]);


            if (nextGreater.length > 0) {
                s.delete(Math.min(...nextGreater));
            }
        }
    }

    return s;
}

/**
 * 
 * @param {number[]} arr 
 */
// function longestMonotonicSubarray(arr) {
//     const subArrays = [];
//     for (let start = 0; start < arr.length; start++) {
//         for (let end = start + 1; end < arr.length; end++) {
//             const subArray = arr.slice(start, end + 1);
//             subArrays.push(subArray);
//         }
//     }
//     const monotonics = subArrays.filter(arr => isMonotonic(arr).ok);

//     let maxLength = 0;
//     let result = [];
//     for (let index = 0; index < monotonics.length; index++) {
//         if (monotonics[index].length > maxLength) {
//             maxLength = monotonics[index].length;
//             result = monotonics[index];
//         }
//     }
//     return result;
// }

// function isMonotonic(arr) {
//     const n = arr.length;
//     const result = {
//         ok: true,
//         length: n
//     };
//     if (n <= 1) return result;

//     let increasing = null;

//     for (let i = 1; i < n; i++) {
//         if (arr[i] > arr[i - 1]) {
//             if (increasing === null || increasing) {
//                 increasing = true;
//             } else {
//                 return result.ok = false;
//             }
//         } else if (arr[i] < arr[i - 1]) {
//             if (increasing === null || !increasing) {
//                 increasing = false;
//             } else {
//                 return result.ok = false;
//             }
//         }
//     }

//     return result;
// }


function longestMonotonicSubarray(arr) {
    let maxLength = 1;
    let currentLength = 1;
    let startIdx = 0;
    let maxStartIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] || arr[i] < arr[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartIdx = startIdx;
            }
            currentLength = 1;
            startIdx = i;
        }
    }

    // Check for the last subarray
    if (currentLength > maxLength) {
        maxStartIdx = startIdx;
    }

    return arr.slice(maxStartIdx, maxStartIdx + maxLength);
}

function repairLongestMonotonicSubArray(arr) {
    const subarray = [];
    let startIndex = 0;
    let sentiment = 'increase'; // decrease
   
    for (let i = 1; i <= arr.length; i++) {
        let status = '';
        if(arr[i] > arr[i-1]) {
            status = 'increase';
        }
         if(arr[i] < arr[i - 1]){
            status = 'decrease';
        }
        if(status != sentiment || i == arr.length) {
            subarray.push({
                sentiment: sentiment,
                array: arr.slice(startIndex, i)
            });
            sentiment = status;
            startIndex = i - 1;
        }
        
    }

    console.log(subarray);
}
const arr = [1, 2, 3, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
// const result = longestMonotonicSubarray(arr);
// console.log(result);
repairLongestMonotonicSubArray(arr);
class Person {
    constructor(id, name, title) {
        this.id = id;
        this.name = name;
        this.title = title;
    }
}

class DataSearch {
    init(objects){
        this.objects = objects;
        this.index = this.buildIndex(objects);
    }
    
    buildIndex(objects) {
        const index = {};

        objects.forEach(person => {
            const personName = person.name.toLowerCase();
            const personTitle = person.title.toLowerCase();

            for (let i = 1; i <= personName.length; i++) {
                const substring = personName.substring(0, i);
                if (!index[substring]) {
                    index[substring] = [];
                }
                index[substring].push(person);
            }

            for (let i = 1; i <= personTitle.length; i++) {
                const substring = personTitle.substring(0, i);
                if (!index[substring]) {
                    index[substring] = [];
                }
                index[substring].push(person);
            }
        });

        return index;
    }

    suggest(query) {
        query = query.toLowerCase().substring(1);

        return this.index[query] || [];
    }
}


const sources = [
    new Person(1, 'John Doe', 'Software Engineer'),
    new Person(2, 'Jane Smith', 'Marketing Manager'),
    // ... add more
];

// const dataSearch = new DataSearch();
// dataSearch.init(sources);
// const result = dataSearch.suggest('@ma');

// console.log(result);