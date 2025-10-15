const students = [
  {
    year: "freshman",
    id: 9000000000,
    /* could have lots of other properties like name, GPA, ... */
  },
  { year: "freshman", id: 9000000001 },
  { year: "sophomore", id: 9000000002 },
  { year: "sophomore", id: 9000000003 },
  { year: "sophomore", id: 9000000004 },
  { year: "sophomore", id: 9000000005 },
  { year: "sophomore", id: 9000000006 },
  { year: "sophomore", id: 9000000007 },
  { year: "sophomore", id: 9000000008 },
  { year: "sophomore", id: 9000000009 },
  { year: "sophomore", id: 9000000010 },
  { year: "junior", id: 9000000011 },
  { year: "junior", id: 9000000012 },
  { year: "junior", id: 9000000013 },
  { year: "junior", id: 9000000014 },
  { year: "junior", id: 9000000015 },
  { year: "junior", id: 9000000016 },
  { year: "junior", id: 9000000017 },
  { year: "junior", id: 9000000018 },
  { year: "junior", id: 9000000019 },
  { year: "junior", id: 9000000020 },
  { year: "senior", id: 9000000021 },
  { year: "senior", id: 9000000022 },
  { year: "senior", id: 9000000023 },
  { year: "senior", id: 9000000024 },
  { year: "senior", id: 9000000025 },
  { year: "other", id: 9000000026 },
  { year: "other", id: 9000000027 },
];

const counts = {
  freshman: 0,
  sophomore: 0,
  junior: 0,
  senior: 0,
  other: 0,
};

// your code here.

/* Output should be:
{ 
  freshman: 2,
  sophomore: 10,
  junior: 10,
  senior: 5,
  other: 2
}
*/

console.log(counts);
