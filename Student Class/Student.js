class Student {

    constructor(name, gradeLevel) {
        this.name = name;
        this.gradeLevel = gradeLevel;
    }

    introduce() {
        return `My name is ${this.name}, I am in grade ${this.gradeLevel}`;
    }

    promote() {
        if (this.gradeLevel < 12) {
            this.gradeLevel++;
        }
    }

    hasPassed(score) {
        return score >= 50;
    }

    updateName(newName) {
        this.name = newName;
    }

    isGraduating() {
        return this.gradeLevel === 12;
    }
}

module.exports = Student;
