define(
    function (require, exports, module) {
        function Person(name, age, address) {
            this.name = name;
            this.age = age;

            // This is a address
            this.address = address;
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
