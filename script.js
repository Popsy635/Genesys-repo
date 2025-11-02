const interns = [
  { name: "Ada", tasks: [80, 75, 90, 85, 95] },
  { name: "Bola", tasks: [60, 70, 65, 75, 80] },
  { name: "Chidi", tasks: [88, 92, 85, 90, 94] },
  { name: "Damilola", tasks: [72, 78, 70, 68, 74] },
  { name: "Emeka", tasks: [95, 97, 99, 92, 94] }
];

function calculateAverage(tasks) {
  const total = tasks.reduce((sum, score) => sum + score, 0);
  return (total / tasks.length).toFixed(2);
}

console.log("=== Gradebook Results ===");
interns.forEach(intern => {
  const avg = calculateAverage(intern.tasks);
  console.log(`${intern.name}'s average score: ${avg}`);
});

const classAvg =
  interns.reduce((sum, intern) => sum + parseFloat(calculateAverage(intern.tasks)), 0) /
  interns.length;

console.log("--------------------------");
console.log(`Class Average Score: ${classAvg.toFixed(2)}`);
console.log("==========================");