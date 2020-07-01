function leap(year) {
    if(year % 4 != 0) {
        return "common year";
    } else if(year % 100 != 0) {
        return "leap year";
    } else if(year % 400 != 0) {
        return "common year";
    } else {
        return "leap year";
    }
}

let year;

while(true) {
    year = prompt("Enter a year: ");
    if(isNaN(year)) continue;
    console.log(year + " is a " + leap(year) + ".");
    break;
}