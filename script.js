// CHUNK

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
console.log("CHUNK : ", chunk([1, 2, 3, 4, 5], 2));

// REDUCE

const message = ["JavaScript ", "is ", "fun."];

function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

let joinedString = message.reduce(joinStrings);
console.log("REDUCE : ", joinedString);

// FILTER

function canVote(age) {
  return age >= 18;
}

function func() {
  var filtered = [24, 33, 16, 40, 12, 78, 9].filter(canVote);
  console.log("FILTER : ", filtered);
}
func();

// FIND

let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];

console.log(
  "FIND : ",
  customers.find((c) => c.credit > 100)
);

// SUM

var arr = [4, 8, 7, 13, 12];

var sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("SUM : ", sum);
