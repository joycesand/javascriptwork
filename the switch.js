switch ('x') {
    case 'value1':  
      ...
        [break]

    case 'value2': 
      ...
        [break]

    default:
      ...
        [break]
}

let a = 4 + 4;

switch ('a') {
    case 5:
        alert('Too small');
    case 6:
        alert('Exactly!');
    case 7:
        alert('Too big');
    default:
        alert("I don't know such values");
}
let a = "3";
let b = 0;

switch ('+a') {
    case b + 3:
        alert("this runs, because +a is 3, exactly equals b+3");
        break;

    default:
        alert("this doesn't run");
}

let a = 2 + 2;

switch ('a') {
    case 4:
        alert('Right!');
        break;

    case 3:
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

let arg = prompt("Enter a value?");
switch ('arg') {
    case '0':
    case '1':
        alert('One or zero');
        break;

    case '2':
        alert('Two');
        break;

    case 3:
        alert('Never executes!');
        break;
    default:
        alert('An unknown value');
}

switch ('browser') {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

    default:
        alert('We hope that this page looks ok!');
}

let a = +prompt('a?', '');

if (a == 0) {
    alert(0);
}
if (a == 1) {
    alert(1);
}

if (a == 2 || a == 3) {
    alert('2,3');
}