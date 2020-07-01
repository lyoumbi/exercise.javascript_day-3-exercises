function smaller(a, b) {
   if(a <= b) return a;
   return b; 
}

let a;
let b;

while(true) {
    a = prompt("Enter the first number: ");
    if(isNaN(a)) continue;
    while(true) {
        b = prompt("Enter the second number: ");
        if(isNaN(b)) continue;
        break;
    }
    console.log("The smaller number between " + a + " and " + b + " is:" + smaller(a,b));
    break;
}

function smaller3(a, b, c) {
    return smaller(a, smaller(b,c));
}
