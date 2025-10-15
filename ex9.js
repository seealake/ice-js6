const studentCountByStanding = {
  freshman: 2,
  sophomore: 10,
  junior: 9,
  senior: 5,
  other: 2,
};

// your code here

// print the highest number using .sort() or .toSorted()
// You do NOT need to print which kind of student it goes with
let maxCount = 0;
for (let standing in studentCountByStanding) {
  if (studentCountByStanding[standing] > maxCount) {
    maxCount = studentCountByStanding[standing];
  }
}
console.log(maxCount);
