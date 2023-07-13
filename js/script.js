let numOrStr = prompt(`Input number or string:`);
console.log(numOrStr);

switch (true) {
    case (numOrStr === null):
        alert(`You clicked "Cancel".`);
        break;
    case (numOrStr.trim() === ``):
        alert(`Empty String.`);
        break;
    case (isNaN(Number(numOrStr))):
        alert('Number is Ba_NaN.');
        break;
    default:
        alert(`OK!`);
        break;
}
