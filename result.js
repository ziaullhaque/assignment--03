/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var result = area / 2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (var i = 1; i <= 11; i++) {
  if (i % 3 === 0) {
    console.log(i + " - " + "medicine");
  } else {
    console.log(i + " - " + "rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docx") ||
  fileName.startsWith("#")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var result =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(result);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for (var i = 1; i <= 30; i++) {
  startingSalary = startingSalary + startingSalary * 0.05;
}
console.log(startingSalary.toFixed(2));
