define(
    function (require, exports, module) {
        function Person(name) {
            this.name = name;
        }

        Person.prototype.setName = function (name) {
            this.name = name;
        };

        Person.prototype.getName = function () {
            return this.name;
        };

        Person.prototype.sayName = function () {
            console.log('HHHHHello name :', this.name);

            return this.name;
        };
    }
);
