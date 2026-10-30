const Student = require("./Student");

describe("Student", () => {

    test("student can introduce", () => {

        // Given
        const student = new Student("Donald", 10);

        // When
        const actual = student.introduce();

        // Check
        const expected = "My name is Donald, I am in grade 10";

        expect(actual).toBe(expected);
    });


    test("student can be promoted", () => {

        // Given
        const student = new Student("Donald", 10);

        // When
        student.promote();

        // Check
        expect(student.gradeLevel).toBe(11);
    });


    test("student has passed", () => {

        // Given
        const student = new Student("Donald", 10);

        // When
        const result = student.hasPassed(60);

        // Check
        expect(result).toBe(true);
    });


    test("student has failed", () => {

        // Given
        const student = new Student("Donald", 10);

        // When
        const result = student.hasPassed(40);

        // Check
        expect(result).toBe(false);
    });


    test("student is graduating in grade 12", () => {

        // Given
        const student = new Student("Donald", 12);

        // When
        const result = student.isGraduating();

        // Check
        expect(result).toBe(true);
    });


    test("student is not graduating before grade 12", () => {

        // Given
        const student = new Student("Donald", 10);

        // When
        const result = student.isGraduating();

        // Check
        expect(result).toBe(false);
    });


    test("student name is updated", () => {

        // Given
        const student = new Student("Donald", 10);

        // When
        student.updateName("Trump");

        // Check
        const actual = student.introduce();
        const expected = "My name is Trump, I am in grade 10";

        expect(actual).toBe(expected);
    });


    test("student is not promoted after grade 12", () => {

        // Given
        const student = new Student("Donald", 12);

        // When
        student.promote();

        // Check
        expect(student.gradeLevel).toBe(12);
    });

});
