'use strict';

export function number(target: any, key: string) {
    let descriptor = Object.getOwnPropertyDescriptor(target, key);

    console.log("aaaaa" + descriptor);

    //Object.defineProperty(target, key, {
    //    set: (value: any) => {
    //        target[key] = value + 1;
    //    }
    //});
}

function logProperty(target: any, key: string) {

    // property value
    var _val = target[key];

    // property getter
    var getter = function () {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };

    // property setter
    var setter = function (newVal: any) {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    };

    // Delete property.
    if (delete target[key]) {

        // Create new property with getter and setter
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

class Person {
    @logProperty
    public name: string;
    public surname: string;

    constructor(name : string, surname : string) {
        this.name = name;
        this.surname = surname;
    }
}

var p = new Person("remo", "Jansen");
p.name = "Remo";
var n = p.name;