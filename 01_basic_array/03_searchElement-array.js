let arr = [30, 40, 90, 115, 45, 32, 46]

// To find whether present 
let element = 90;
let present = false;

for (i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        console.log(`${arr[i]} = ${i}`);
        present = true;
    } 
}

if (!present) {
    console.log("Element is not present in the array.")
}
