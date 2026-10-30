
const { mergeArray, sortMergedArray } = require("./arrayTask");

describe("mergeArray", () => {
    test("test that both arrays are merged in order", () => {
        expect(mergeArray([2, 4, 1], [3, 4])).toEqual([2, 4, 1, 3, 4]);
    });

    test("test that result array length is the length of both arrays combined", () => {
       const result = mergeArray([2, 4, 1], [3, 4]);
       expect(result.length).toEqual(5);
    });

    test("test that mergeArray returns an empty array when both inputs are empty", () => {
        expect(mergeArray([], [])).toEqual([]);
    });
});

describe("sortMergedArray", () => {
    test("test that sortMergedArray returns the combined values in ascending order", () => {
        expect(sortMergedArray([2, 4, 1], [3, 2, 6])).toEqual([1, 2, 2, 3, 4, 6]);
    });

    test("test that sortMergedArray sorts and retains duplicates", () => {
        expect(sortMergedArray([0, 3, 2], [3, 1, 2])).toEqual([0, 1, 2, 2, 3, 3]);
    });

    test("test that sortMergedArray handles empty inputs", () => {
        expect(sortMergedArray([], [2, 1])).toEqual([1, 2]);
        expect(sortMergedArray([], [])).toEqual([]);
    });

   
});
