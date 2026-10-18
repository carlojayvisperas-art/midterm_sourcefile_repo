class student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getaverageScore() {
        let total = 0;
        for (let i =0; i< this.scores.length; i++) {
            total += this.scores[i];
        }
        return total / this.scores.length;
    }

    getletterGrade() {
        let average = this.getaverageScore();
        if (average >= 90) {
            return "A";
        }
        else if (average>= 80){
            return "B";
        }
        else if(average >=70) {
            return "C";
        }
        else if (average >= 60) {
            return "D";
        }
        else {
            return "F";
        }

    }
}

  function analyzesClass(student){
    let classTotal = 0;
    let topStudent = null;
    let highestAverage = 0;
    console.log("------- STUDENT REPORT -------");
    for (let i = 0; i<students.length; i++){
        let student = students[i];
        let average = student.getaverageScore();
    
    console.log(`${student.name} - Average Score: ${average.toFixed(1)} | Grade: ${student.getletterGrade()}`);
    classTotal += average;
    
    if (average > highestAverage) {
        highestAverage = average;
        topStudent = student.name;
    }

}

    let classAverage = classTotal/ students.length;
    console.log("------------------------------");
    console.log(` Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent} with ${highestAverage.toFixed(1)}`);

  }
    const studentsData = [
        { name: "Lany", scores: [85,90,92]},
        {name: "bongbung", scores: [70, 75, 68]},
        {name: "Dutherthe", scores: [95,98,92]},
        {name: "pico", scores: [55,60,58]}
    ];

    const students = [];

    for (let i = 0; i< studentsData.length; i++){
        students.push( new student (studentsData[i].name, studentsData[i].scores) );
    }
    analyzesClass(students);