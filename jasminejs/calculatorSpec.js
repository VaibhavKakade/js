describe("Calculator", function () {
    beforeEach(function () {

        Calculator.result = 0;

        jasmine.addMatchers({
            validateResult: function () {
                return {
                    compare: function (actual, expected) {
                        console.log(actual,expected);
                        var result = {
                            pass: actual === expected,
                            message: "Some message",
                        };
                        return result;
                    }
                }
            }
        });
    });
    // test 1
    it("should have result all the time", function() {
        expect(Calculator.result).toEqual(0);
    });
    // test 2
    it("should add the number to existing result", function() {
        expect(Calculator.add(5)).toEqual(5);
    });

    it("Test custom validator", function () {
        expect(Calculator.add(5)).validateResult(5);
    });

    it("toBeDefined", function () {
        var value = null;
        expect(value).toBeDefined();
        expect(value).toBeNull();
    });
});
