"use strict";
describe("calculator", function () {
    var ctrl;

    beforeEach(angular.mock.module("calculatorApp"));
    beforeEach(inject(function (_$controller_) {
        ctrl = _$controller_;
    }));

    describe("sum", function () {
        it("1+1 must be 2", function () {
            var scope = {};
            var ctrlInstance = ctrl("calculatorController", {
                $scope: scope
            });
            scope.num1 = 1;
            scope.num2 = 1;
            scope.sum();
            expect(scope.total).toBe(2);
        });
    });
});