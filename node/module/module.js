function _privateMethod() {
    return "my module";
}
exports.describeMethod = function () {
    return "This is " + _privateMethod();
}