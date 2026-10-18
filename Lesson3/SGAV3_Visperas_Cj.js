'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 95],
    [60, 65, 67],
    [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

// A. Display the Original Records
console.log('\nPART A: ORIGINAL RECORDS');

// Display every student's index, name, and score
for (let i = 0; i < studentNames.length; i++) {
    console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}

// B. Add New Students
console.log('\nPART B: ADD NEW STUDENTS');

// Add Faith and Aaron
studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

// C. Remove and Replace Records
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove first and last students
studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

// Find and remove Daniel
let danielIndex = studentNames.indexOf('Daniel');

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

// Insert Grace
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);

// D. Calculate Class Statistics
console.log('\nPART D: CLASS STATISTICS');

// Calculate total score
let totalScore = 0;

for (let i = 0; i < studentScores.length; i++) {
    totalScore += studentScores[i];
}

// Calculate average
let averageScore = totalScore / studentScores.length;

// Find highest and lowest
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
    if (studentScores[i] > highestScore) {
        highestScore = studentScores[i];
    }

    if (studentScores[i] < lowestScore) {
        lowestScore = studentScores[i];
    }
}

console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

// E. Analyze Passing Scores
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScores = studentScores.filter(score => score >= 75);

const statuses = studentScores.map(score =>score >= 75 ? 'Passed' : 'Failed' );

const atLeastOneFailed = studentScores.some(score => score < 75);

const allStudentsPassed = studentScores.every(score => score >= 75);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

// F. Sort and Search
console.log('\nPART F: SORT AND SEARCH');

// Copy scores
const sortedScores = Array.from(studentScores);

// Sort highest to lowest
sortedScores.sort((a, b) => b - a);

console.log('Scores from Highest to Lowest:', sortedScores);

console.log('Contains 91:', studentScores.includes(91));
console.log('Index of 91:', studentScores.indexOf(91));

// G. Process a Two-Dimensional Array
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {

    let total = 0;

    for (let j = 0; j < activityScores[i].length; j++) {
        console.log(originalNames[i] + ' Score:', activityScores[i][j]);
        total += activityScores[i][j];
    }

    let average = total / activityScores[i].length;

    activityAverages.push(Number(average.toFixed(2)));

    console.log(
        originalNames[i] +
        "'s activity average: " +
        average.toFixed(2)
    );
}

console.log('Activity Averages:', activityAverages);

// H. Create a Text Summary
console.log('\nPART H: TEXT SUMMARY');

console.log('Students:', studentNames.join(' | ')); 