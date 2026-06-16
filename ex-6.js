let height = undefined;
let result;

function checkHeight(height){
    let findHeight = height ?? "not defined";
    return `“Height is ${findHeight}”`
}

result = checkHeight(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
