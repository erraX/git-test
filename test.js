define(
    function (require, exports, module) {
        function Person(name) {
            this.name = name;
        }

        Person.prototype.sayName = function () {
            console.log('Hello:', this.name);
        };
    }
);
