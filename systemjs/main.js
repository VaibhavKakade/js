import obj from "./a.js";

console.log(obj);
let someArrow = (str = "str") => {
    return "this is arrow, params are " + str;
};

console.log(someArrow());
