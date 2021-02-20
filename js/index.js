const doubler = (num, cb) => {
    const doubled = num * 2;

    if (typeof cb !== 'function') {
        throw TypeError(cb + ' is not a function');
    } else {
        cb(doubled);
    }
}

// doubler(7, val => {
//     console.log(val);
// });

const arr = [3, 5, 7, 9, 13, 17, 7];

// console.log(arr.join() === arr.toString());

arr.unshift(39);

arr.splice(0, 1);

console.log(arr);

const arr2 = ['Gazanfar', 'Famil', 'Anar', 'Elvin'];

const users = [
    {
        id: 1,
        name: 'Gazanfar',
        gender: 'male',
    },
    {
        id: 2,
        name: 'Anar',
        gender: 'male',
    },
    {
        id: 3,
        name: 'Aytan',
        gender: 'female',
    }
]

const numsBiggerThanFive = arr.filter((val) => {
    return 'some string';
});

console.log(numsBiggerThanFive);

const doubledNumbers = arr.map((val, index, array) => {
    return val * 2;
});

console.log(doubledNumbers);

const modifiedUsers = users.map(user => {
    return user.name + ' (active)';
});

console.log(modifiedUsers);

// console.log(arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 10));

console.log(['Zabil', 'Anar', 'Gazanfar'].sort());

const sortedNums = arr.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(sortedNums);

const hasFemale = users.some((user) => user.gender === 'female');

console.log(hasFemale);

const isAllMale = users.every((user) => user.name);

console.log(isAllMale);

const str = 'This is string';

const reverseString = (str = '') => {
    const arrOfChars = str.split('');

    arrOfChars.reverse();

    return arrOfChars.join('');
}

console.log(reverseString(str));

console.log(str.substring(2, 6));

const trimStart = (str = '') => {

} // example: '   this is sentence' -> 'this is sentence'


