const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores;
console.log(result1)
const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

function checkEnglish (employee){
  let findEnglish = employee.scores.english ?? "not defined"
  return `English score is ${findEnglish}`
}

const result2 = checkEnglish(employee2);
console.log(result2) //เมื่อทำการ console.log() ตัว result2 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น English score is not defined