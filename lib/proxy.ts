'use strict';

//export class SchemaValidator = {
//    set: function(o: any, name: string, value: any) {
//
//    }
//}

// can do something really really funky with proxies

interface ProxyHandler<T> {
    getPrototypeOf? (target: T): any;
    setPrototypeOf? (target: T, v: any): boolean;
    isExtensible? (target: T): boolean;
    preventExtensions? (target: T): boolean;
    getOwnPropertyDescriptor? (target: T, key: PropertyKey): PropertyDescriptor;
    has? (target: T, key: PropertyKey): boolean;
    get? (target: T, key: PropertyKey, receiver: any): any;
    set? (target: T, key: PropertyKey, value: any, receiver: any): boolean;
    deleteProperty? (target: T, key: PropertyKey): boolean;
    defineProperty? (target: T, key: PropertyKey, attributes: PropertyDescriptor): boolean;
    enumerate? (target: T): PropertyKey[];
    ownKeys? (target: T): PropertyKey[];
    apply? (target: T, thisArg: any, argArray?: any): any;
    construct? (target: T, thisArg: any, argArray?: any): any;
}

type Validator = (value: any) => void;

type Validators = { [name: string]: Validator[] };


class ValidationError extends Error {
    private cause: Error;

    constructor(message: string, cause?: Error) {
        super(message);

        this.cause = cause;
    }
}