let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function calcGrade(scores) {
  let exams = scores.exams;
  let exercises = scores.exercises;

  let examAvg = exams.reduce((acc, curr) => acc + curr, 0) / exams.length;
  let exercSum = exercises.reduce((acc, curr) => acc + curr, 0);

  let score = (examAvg * .65) + (exercSum * .35);

  return Math.round(score);
}

function returnGrade(score) {
  if (score >= 93) {
    return `${score} (A)`;
  } else if (score >= 85) {
    return `${score} (B)`;
  } else if (score >= 77) {
    return `${score} (C)`;
  } else if (score >= 69) {
    return `${score} (D)`;
  } else if (score >= 60) {
    return `${score} (E)`;
  } else {
    return `${score} (F)`;
  }
}

function returnAvg(scores) {
  return scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
}

function generateClassRecordSummary(scores) {
  let studentScores = [];
  let examsRaw = [[], [], [], []];

  Object.keys(scores).forEach(student => {
    let currStudent = scores[student];
    studentScores.push(calcGrade(currStudent.scores));
    currStudent.scores.exams.forEach((score, idx) => examsRaw[idx].push(score));
  });

  studentGrades = studentScores.map(score => returnGrade(score));
  exams = examsRaw.map(exam => {
    return {
      average: returnAvg(exam),
      minimum: Math.min(...exam),
      maximum: Math.max(...exam),
    }
  });

  return {studentGrades, exams}
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }