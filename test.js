define(
    function (require, exports, module) {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        Person.prototype.setName = function (name) {
            this.name = name;
        };

        Person.prototype.getName = function () {
            return this.name;
        };

        Person.prototype.sayName = function () {
            console.log('I name is', this.name); // Update by master

            return this.name;
        };
    }
);
