let hour = 12;
let isWeekend = true;

if (hour < 11 || hour > 20 || isWeekend) {
    alert('The office is closed.'); // it is the weekend
}

currentUser = null;
defaultUser = "Sandra";

name = currentUser || defaultUser || "unnamed";
console.log(name);
(name); // selects "Sandra" – the first truthy value


let x;

true || (x = 1);

console.log(x);
(x); // undefined, because (x = 1) not evaluated

let x;

false || (x = 1);

console.log(x); // 1


let hour = 13;
let minute = 50;

if (hour == 13 && minute == 50) {
    console.log(hour && minute);
    ('The time is 13:50');
}

let x = 3;

(x > 0) && alert('Greater than zero!');

let x = 1;

if (x < 0) {
    alert('Greater than zero!');
}

let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

    let pass = prompt('Password?', '');

    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == '' || pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (userName == '' || userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}

