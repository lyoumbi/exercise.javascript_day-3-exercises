function isLeap(year) {
    if(year % 4 != 0) {
        return false;
    } else if(year % 100 != 0) {
        return true;
    } else if(year % 400 != 0) {
        return false;
    } else {
        return true;
    }
}

function daysOfMonth(month, year) {
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if(isLeap(year)) return 29;
            return 28;
    }
}

function month(yearAndMonth) {
    let year = parseInt(yearAndMonth.split(" ")[0]);
    let month = parseInt(yearAndMonth.split(" ")[1]);
    return daysOfMonth(month, year);
}

let userInput = prompt("Enter year and month: ");
console.log(month(userInput) + " days.");
