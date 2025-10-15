const studentCountByStanding = {
  freshman: 2,
  sophomore: 10,
  junior: 9,
  senior: 5,
  other: 2,
};

// your code here.

// print which kind of student there are the most of, and how many there are.
let maxCount = 0;
let maxStanding = "";
for (let standing in studentCountByStanding) {
  if (studentCountByStanding[standing] > maxCount) {
    maxCount = studentCountByStanding[standing];
    maxStanding = standing;
  }
}
console.log(`${maxStanding}: ${maxCount}`);