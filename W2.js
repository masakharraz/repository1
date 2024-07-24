//w2.d1.e1
//task18
function indexOf(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf(['cat', 'dog', 'fox'], 'fox')); // Output: 2
console.log(indexOf(['cat', 'dog', 'fox'], 'cat')); // Output: 0

//w2.d2.e1
//task23
function popLastElement(arrayOfArrays) {
    for (let i = 0; i < arrayOfArrays.length; i++) {
        arrayOfArrays[i].pop();
    }
    return arrayOfArrays;
}

let input1 = [[1 , 2, 3, 4], [1, 2], [3, 4, 5]];
let input2 = [[1, 0, 3], [1], [3, 10]];

console.log(popLastElement(input1)); // Output: [[1, 2, 3], [1], [3, 4]]
console.log(popLastElement(input2)); // Output: [[1, 0], [3]]

//w2.d3.e1
//task28
function select(obj, arr) {
    let newObj = {};
    for (let key of arr) {
        if (obj[key]) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let arr = ['a', 'b', 'e'];
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log(select(obj, arr));

//w2.d4.e1
//task10
function range(start, end) {
    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(i);
    }
    return result;
}

let start = parseInt(prompt("Enter the start number:"));
let end = parseInt(prompt("Enter the end number:"));

console.log(range(start, end));

//w2.d5.e1
//task1
function stringLength(str) {
    let length = 0;
    while (str.slice(length, length + 1) !== "") {
        length++;
    }
    return length;
}

console.log(stringLength('hello')); // Output: 5
console.log(stringLength('hi')); // Output: 2

//w2.d6.e1
//task37
let students = [];

function createStudent(firstName, lastName, email, age, education) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + " " + lastName,
        email: email,
        age: age,
        education: education,
        skills: []
    };
}

function addSkills(student, skills) {
    student.skills = skills;
}

function addStudent(student) {
    students.push(student);
}

function getAllStudentsWithSkill(skill) {
    let result = [];
    students.forEach(student => {
        if (student.skills.includes(skill)) {
            result.push(student);
        }
    });
    return result;
}

let student1 = createStudent("Nancy", "Shalaby", "x@gmail.com", 25, "Music");
addSkills(student1, ["HTML", "CSS"]);
addStudent(student1);

let student2 = createStudent("Amjad", "Hamawi", "y@gmail.com", 19, "Art");
addSkills(student2, ["Javascript", "HTML"]);
addStudent(student2);

console.log(getAllStudentsWithSkill("CSS"));
console.log(getAllStudentsWithSkill("HTML"));



