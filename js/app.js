//using a function to add two arguments together then multiply them
function function_1(number_1, number_2) {
    //defining add as adding two arguements together
    let add = number_1 + number_2;
    //defining multiply with the result of add and multiplying it by 5
    let multiply = add * 5;
    //using return to give back the results
    return multiply;
}

//using a custom function to check the length of a string > 10
function function_2(string) {
    //definging variable to use in the if statement
    let length_check = string.length;
    //using an if state ment to return true if string is > 10 else returns false
    if (length_check > 10) {
        return true;
    } else {
        return false;
    }
}

//testing function_1 using two numbers
function_1(6, 4);
function_1(8, 1);
function_1(58, 2);

//testing function_2 with a string
function_2(`12345678`);
function_2(`123456789`);
function_2(`12345678910`);